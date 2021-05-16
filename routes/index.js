const express = require('express')

const router = express.Router();
//var userRouter = require('./user.js')

let amit = require('./amit.json');
let designsubway = require('./designsubway.json');
//const { route } = require('./user.js');




router.get('/:userHandle', (req, res) => {
    console.log(req.params.userHandle);
    let user = req.params.userHandle;
    
    if (user == "amit") {
        //res.write(JSON.stringify(amit));
        console.log('hello')
        res.json(amit)
        
    }
    else if (user == "designsubway") {
        res.json(designsubway);
    }
    else res.send('user not found');
})





module.exports = router;