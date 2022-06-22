const express = require("express")
const router = express.Router()
const HttpStatus = require("http-status")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.post("/connect_wallet", (req, res) => {
    try {
        const { username, password } = req.body //รับค่าชื่อผู้ใช้งานและรหัสผ่าน
        const mockExistPassword = '12345' //จำลองข้อมูลของรหัสผ่านที่สมัครเข้ามาครั้งแรก

        const user = {
            username,
            password
        }

        let salt = bcrypt.genSaltSync(5);
        let hash = bcrypt.hashSync(mockExistPassword, salt); //จำลองข้อมูลของรหัสผ่านที่เก็บอยู่ในฐานข้อมูลแบบเข้ารหัสแล้ว

        //ตรวจสอบว่ารหัสผ่านที่รับเข้ามามีค่าตรงกับรหัสผ่านที่เก็บไว้
        if (bcrypt.compareSync(password, hash)) {

            jwt.sign({ user }, 'secretKey', { expiresIn: '12h' }, (err, token) => {
                res.json({
                    token
                })
            })
        } else {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Wrong Password!'
            })
        }

    } catch (error) {
        res.json({
            message: error.message,
        })
    }

})

module.exports = router