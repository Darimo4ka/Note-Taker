// //  create connection to this folder
const path = require('path');

// req esxpress router
const router = require('express').Router()


router.get("/api/notes", (req, res) => {

    // 'utf8' what is it good practice to include?
    fs.readFile(path.join(__dirname, "db", "db.json"), (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString)
        response.json(JSON.parse(jsonString));
    })
})

//   export 
module.exports = router;

