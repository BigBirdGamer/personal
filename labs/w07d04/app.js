/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = "mongodb+srv://lucaslee98:S98555941e@cluster0.gfjejyc.mongodb.net/test";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect( mongoURI );

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
//? Insert many vampires
// Vampire.insertMany(seedData, (err, vampires) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("added provided vampire data", vampires);
//     mongoose.connection.close();
//   });
  
//? Create vampires
// const createVampire = {
//     name: "Jamie",
//     title: "YP",
//     hair_color: "pink",
//     eye_color: "pink",
//     dob: new Date(1998, 6, 3, 13, 12),
//     loves: ["Fried food" , "curry rice"],
//     location: "your heart",
//     gender: "f",
//     victims: 10
//   };
  
  
//   Vampire.create(createVampire, (error, tweet) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(tweet);
//     }
//     mongoose.connection.close();
//   });

//? Find
// const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { gender: "f" }
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

// const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { victims:{$gt : 500}  }
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

// const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { victims:{$lte : 150}  }
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

// const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { victims:{$ne : 500}  }
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

// const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { victims:{$gt : 150 , $lt:500 }  }
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

// const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { title: {$exists : true}  }
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

// const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { $and: [ {title: {$exists : true} }, { victims: 0}]}
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

//   const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { $and: [ {victim: {$gt : 0} }, { victims: {$gte: 1000}}]}
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

//? ISSUE
// const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { $or: [ {location:"New York, New York, US"}, {location:"New Orleans, Louisiana, US"} ]}
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

//   const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { $or: [ {loves:"brooding "}, {loves:"being tragic"} ]}
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

// const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { $or: [ {victims: {$gt: 1000 }}, {loves:"marshmallows"} ]}
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

// const doFind = async () => {
//     try {
//       const vampire = await Vampire.find(
//         { $or: [ {hair_color: "red"}, {eye_color:"green"} ]}
//       );
//       console.log(vampire);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   doFind();

const doFind = async () => {
    try {
      const vampire = await Vampire.find(
        { $and: [ {hair_color: "red"}, {eye_color:"green"} ]}
      );
      console.log(vampire);
    } catch (error) {
      console.log(error);
    }
  };
  doFind();
