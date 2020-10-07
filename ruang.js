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
app.post("/berat_ideal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let beratbadan = Number(req.body.beratbadan) // mengamil nilai lebar dari body
    let tinggibadan = Number(req.body.tinggibadan)
    tinggibadan /= 100;

    

    let hasil = beratbadan / (tinggibadan * tinggibadan)
    let status = hasil
    
     if(hasil < 18.5 ){
        status = "Kekurangan Berat Badan";
    }else if (hasil >=18.5 && hasil <=24.9){
        status = "Berat Badan Normal"
    }else if (hasil >= 25 && hasil <= 29.9){
        status = "Kelebihan Berat Badan"
    }else{
        status = "Obesitas"
    }
    
    
                 
                
                 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        beratbadan: beratbadan,
        tinggibadan: tinggibadan,
        hasil: hasil,
        status: status,
   
        
        
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

})