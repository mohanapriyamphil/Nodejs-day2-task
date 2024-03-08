const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//Creating a room
app.post('/api/rooms', (req, res) =>{
  res.status(200).json({message: "Room Created"})
});

//Booking a room
app.post('/api/bookings', (req, res) =>{
  res.status(200).json({message: "Booking Confirmed"});
});

//list all rooms with booked data
app.get('/api/rooms', (req, res) => {
  res.status(200).json({ message: "Rooms with booked data"});
});

//list all customers with booked data
app.get('/api/customers', (req, res) => {
  res.status(200).json({message: "Customers with booking data"})
});

//list how many times a customer booked details
app.get('/api/customer-booking', (req, res) => {
  res.status(200).json({ message: "Customers with booking details"})
}); 


//server listening on port
app.listen(3000, () => {
  console.log('Server is running on the Port 3000');
});