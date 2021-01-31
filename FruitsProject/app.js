const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Require name field"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "Delicious"
});

// mango.save();

// Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Updated");
//   }
// });

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruits!"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me"
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully save all the fruits");
//   }
// });

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "601627ff57a43b2d50c52987"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("Updated");
//   }
// })

// Fruit.deleteOne({name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Deleted");
//   }
// });

// Person.deleteMany({name: "John"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Deleted Many");
//   }
// });