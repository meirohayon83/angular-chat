// const express = require('express')

// const router = express.Router();
// const msg = require('../server/model/message')

// require('../server/data/database')


// router.get('/', function (req, res, next) {


//     msg.find({}, function (err, data) {

//         if (err) {
//             res.send(err)
//         } else {

//             res.send(data)
//         }
//     })
// })




// router.get('/:id', function (req, res, next) {

//     msg.find({ id: req.params.id }, (err, data) => {
//         err ? console.log(err) : res.send(data)
//       })
//     })

//     router.post('/' , async (req, res) => {

//         var newMessage = new msg({


//             id: req.body.id,
//             message: req.body.message,
//             nickName: req.body.nickName
           

//         })

    
      
//         var data = await newMessage.save();
//         res.send(data);
        
//     })



//     router.post('/:id' , async (req, res) => {

//         if(msg.id === req.params.id){

        
//         var newMessage = new msg({


//             id: req.body.id,
//             message: req.body.message,
//             nickName: req.body.nickName
           

//         })

//         }
      
//         var data = await newMessage.save();
//         res.send(data);
        
//     })
    

       
    

// module.exports = router;
