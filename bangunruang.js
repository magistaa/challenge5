const express = require("express") // memanggil library express js  
const bodyParser = require("body-parser") // memanggil library body-parser  
const cors = require("cors") // memanggil library cors  
const app = express()  
  
// penggunaan body-parser untuk ekstrak data request berformat JSON  
app.use(bodyParser.json())  
  
// penggunaan body-parser untuk ekstrak data request berformat JSON  
app.use(bodyParser.urlencoded({ extended: true }))  
  
// penggunaan cors agar end point dapat diakses oleh cross platform  
app.use(cors())  
  
// endpoint "/test" dengan method GET  
app.get("/test", (req, res) => {  
    let responese = {  
        // req merupakan variabel yang berisi data request  
        // res merupakan variabel yang berisi data response dari end-point  
  
        // membuat objek yang berisi data yang akan dijadikan response  
  
        message: "Ini end-point pertama",  
        method: req.method,  
        code: res.statusCode  
    }  
    // memberikan response dengan format JSON yang berisi objek di atas  
    res.json(responese)  
})  
  
//menjalankan server pada port 8000  
app.listen(8000,()=> {  
    console.log("Server run on port 8000");  
  
    // end-point "/bujur_sangkar" dengan method POST  
app.post("/bujur_sangkar", (req,res) => {  
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik  
    let sisi = Number(req.body.sisi) // mengamil nilai lebar dari body  
  
    let luas = 6 * (sisi * sisi)  
    let volume = sisi * sisi * sisi  
  
    // membuat objek yang berisi data yang akan dijadikan response  
    let response = {  
        sisi: sisi,  
        luas: luas,  
        volume: volume,  
    }  
  
    // memberikan response dengan format JSON yang berisi objek di atas  
    res.json(response)  
})  
  
})  
