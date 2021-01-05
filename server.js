//intialitation express modul
const express = require('express');
//inisialisasi body parser modul
const bodyParser = require('body-parser');
//global inisilisasi express
const app = express();




//parse application/json
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// make local domain with port 3000
let port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ` + port);
});