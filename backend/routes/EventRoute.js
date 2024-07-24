const router = require('express').Router();
const Event = require('../models/EventModel.js');

//Add New Event
router.route('/add').post(async(req,res)=>{
  const {name, image} = req.body;

  try{
    let event = new Event({name, image});
    const result = await event.save();
    
    if(result)
      res.status(201).send("Data added sucessfully");
    else
      res.status(500).send("Server Error");
  }
  catch(error){
    console.log(error);
  }
});


//Get Event
router.route('/get/:id').get(async(req,res)=>{
  const {id} = req.params;

  Event.findById(id).then((event)=>{
    res.status(200).send(event)
  })
  .catch((error)=>{
    console.log(error);
  })
});


//Get All Events
router.route('/').get(async(req,res)=>{
  Event.find().then((event)=>{
    res.status(200).send(event)
  })
  .catch((error)=>{
    console.log(error);
  })
});


//Delete Event
router.route('/delete/:id').delete(async(req,res)=>{
  const {id} = req.params;
  console.log(id);

  await Event.findByIdAndDelete(id).then(()=>{
    res.status(200).send("Event Deleted !")
  })
  .catch((error)=>{
    console.log(error);
  })
});

module.exports = router;
