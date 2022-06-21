const express = require("express")
const router = express.Router()
const HttpStatus = require("http-status")


router.get("/dataAll", (req, res) => {

    try {
        const result = true; //result แทนการเรียกใช้ฟังก์ชันและดึงค่าจากฐานข้อมูลสำเร็จ

        //ค้นหาข้อมูลทั้งหมดเพื่อนำมาแสดงเป็นลิสรายการ ถ้ามีข้อมูลจะส่งข้อมูลที่ค้นหาได้ออกไป
        //เรียกฟังก์ชั่นการค้นหาข้อมูล
        if (result) {
            res.status(HttpStatus.OK).json({
                message: 'Get Data All Success',
                result: result
            })
        } else {
            res.json({
                message: 'Empty Data All',
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
    const { name } = req.query //รับค่าชื่อไอเท็มที่ค้นหา
    const result = 'search item name'; //result แทนการเรียกใช้ฟังก์ชันและดึงค่าจากฐานข้อมูลสำเร็จ

    try {

        //ค้นหาข้อมูลจากชื่อไอเท็มที่ส่งมาค้นหา หากพบข้อมูลตรงตามที่ค้นหาจะส่งข้อมูลออกไป
        //ถ้ามีการส่งค่ามาจะนำค่าไปเรียกฟังก์ชั่นเพื่อนำไปค้นหาข้อมูล
        if (name === result) {
            res.status(HttpStatus.OK).json({
                message: 'Get Search Data Success',
                result: 'Search Item'
            })
        } else {
            res.json({
                message: 'Empty Search Data',
                result: null
            })
        }

    } catch (error) {
        res.json({
            message: error.message,
        })
    }
})

router.put("/place_bid/:id", (req, res) => {
    const { id } = req.params //รับค่าชื่อไอเท็มที่ประมูล
    const { username, price } = req.body //รับค่าผู้ประมูลและราคาไอเท็ม
    let result = false; //result แทนการเรียกใช้ฟังก์ชันและดึงค่าจากฐานข้อมูลสำเร็จ

    try {

        //อัปเดตข้อมูลรายการที่ยื่นประมูล โดยรับค่าเป็นชื่อไอเท็มที่ประมูล, ผู้ทำการประมูล และราคาของไอเท็ม 
        //ถ้ามีการส่งค่ามาครบจะนำค่าไปเรียกฟังก์ชั่นเพื่อนำไปอัปเดตข้อมูล
        if (id && username && price) {
            result = true;
        }

        //ถ้าผลการอัปเดตสำเร็จจะส่งข้อความกลับไป
        if (result) {
            res.status(HttpStatus.OK).json({
                message: 'Place a Bid Success',
                result: null
            })
        } else {
            res.json({
                message: 'Place a Bid Fail',
                result: null
            })
        }

    } catch (error) {
        res.json({
            message: error.message,
        })
    }
})

module.exports = router