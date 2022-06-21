const express = require("express")
const router = express.Router()
const HttpStatus = require("http-status")
const jwt = require("jsonwebtoken")

router.get("/allData", (req, res) => {

    try {
        const result = true; //result แทนการเรียกใช้ฟังก์ชันและดึงค่าจากฐานข้อมูลสำเร็จ

        //ค้นหาข้อมูลทั้งหมดเพื่อนำมาแสดงเป็นลิสรายการ ถ้ามีข้อมูลจะส่งข้อมูลที่ค้นหาได้ออกไป
        //เรียกฟังก์ชั่นการค้นหาข้อมูล
        if (result) {
            res.status(HttpStatus.OK).json({
                message: 'Get All Data  Success',
                result: result
            })
        } else {
            res.json({
                message: 'Empty All Data',
                result: null
            })
        }

    } catch (error) {
        res.json({
            message: error.message,
        })
    }
})

router.get("/search", (req, res) => {
    const { item_name } = req.query //รับค่าชื่อไอเท็มที่ค้นหา
    const result = 'jet girl'; //result แทนการเรียกใช้ฟังก์ชันและดึงค่าจากฐานข้อมูลสำเร็จ

    try {

        //ค้นหาข้อมูลจากชื่อไอเท็มที่ส่งมาค้นหา หากพบข้อมูลตรงตามที่ค้นหาจะส่งข้อมูลออกไป
        //ถ้ามีการส่งค่ามาจะนำค่าไปเรียกฟังก์ชั่นเพื่อนำไปค้นหาข้อมูล
        if (item_name === result) {
            res.status(HttpStatus.OK).json({
                message: 'Get Search Data Success',
                result: 'Search Item'
            })
        } else {
            res.status(HttpStatus.GONE).json({
                message: 'Search Data Item Not Found',
                result: null
            })
        }

    } catch (error) {
        res.json({
            message: error.message,
        })
    }
})

router.put("/place_bid/:id", verifyToken, (req, res) => {
    const { id } = req.params //รับค่าชื่อไอเท็มที่ประมูล
    const { username, price } = req.body //รับค่าผู้ใช้งานและราคาไอเท็ม

    try {
        jwt.verify(req.token, 'secretKey', (err, authData) => {
            if (err) {
                res.sendStatus(HttpStatus.FORBIDDEN)
            } else {
                res.status(HttpStatus.OK).json({
                    message: 'Place a Bid Success',
                    authData
                })
            }
        })
    } catch (error) {
        res.json({
            message: error.message,
        })
    }
})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization']

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')

        const bearerToken = bearer[1]
        req.token = bearerToken
        next()

    } else {
        res.sendStatus(HttpStatus.FORBIDDEN)
    }
}

module.exports = router