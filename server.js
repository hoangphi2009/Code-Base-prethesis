const express = require("express");
const mysql = require('mysql2'); // Sử dụng mysql2
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "signup"
});

// Kết nối tới cơ sở dữ liệu và kiểm tra lỗi
db.connect((err) => {
    if (err) {
        console.error('Kết nối tới cơ sở dữ liệu thất bại:', err.stack);
        return;
    }
    console.log('Đã kết nối tới cơ sở dữ liệu MySQL với ID:', db.threadId);
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error('Lỗi khi chèn dữ liệu:', err);
            return res.status(500).json("Error: " + err.message); // Trả về thông tin chi tiết lỗi
        }
        return res.status(201).json(data);
    });
});

app.post('/account', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error('Lỗi khi chèn dữ liệu:', err);
            return res.status(500).json("Error: " + err.message); // Trả về thông tin chi tiết lỗi
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Faile");
        }
    });
});

app.listen(5500, () => {
    console.log("Server is listening on port 5500");
});
