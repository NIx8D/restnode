//inisialisasi mysql module
const mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#t00r",
    database: "dbrestapi"
});

//cek koneksi
conn.connect((err) => {
    //ketika koneksi error
    if (err) throw err;
    //ketika koneksi berhasil
    console.log("Mysql terkoneksi");
});

// export variabel conn agar dapat di pakai di file lain
module.exports = conn;