const express = require("express")
const router = express.Router()
const HttpStatus = require("http-status")
const jwt = require("jsonwebtoken")

router.post("/connect_wallet", (req, res) => {
    const { username, password } = req.body //รับค่าชื่อผู้ใช้งานและรหัสผ่าน
    const user = {
        username,
        password
    }

    try {
        jwt.sign({ user }, 'secretKey', { expiresIn: '12h' }, (err, token) => {
            res.json({
                token
            })
        })

    } catch (error) {
        res.json({
            message: error.message,
        })
    }

})

module.exports = router