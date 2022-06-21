const express = require("express")
const router = express.Router()
const HttpStatus = require("http-status")

router.get("/connect_wallet", (req, res) => {
    const { username, password } = req.query //รับค่าชื่อผู้ใช้งานและรหัสผ่าน
    const user = 'admin' //จำลองข้อมูล
    const pass = '12345' //จำลองข้อมูล

    try {

        //ถ้ามีการล็อกอินเข้ามาและชื่อผู้ใช้กับรหัสผ่านถูกต้องจะเข้าใช้งาน wallet ได้
        if (username === user && password === pass) {

            res.status(HttpStatus.OK).json({
                message: 'Connect Wallet Success',
            })
        } else {
            res.json({
                message: 'Connect Wallet Fail',
            })
        }

    } catch (error) {
        res.json({
            message: error.message,
        })
    }

})

module.exports = router