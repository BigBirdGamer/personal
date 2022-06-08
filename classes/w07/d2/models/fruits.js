const fruits = [
    {
      name: "apple",
      color: "red",
      readyToEat: true,
    },
    {
      name: "pear",
      color: "green",
      readyToEat: false,
    },
    {
      name: "banana",
      color: "yellow",
      readyToEat: true,
    },
  ];
  
  //? const fruits = [..]
  //? export default fruits;
  module.exports = fruits
  
  //? export -> object
  //? export default { data: [...], add: (a, b) => a + b }
  //? import { data, add} from "./fruits"
  
  //? export -> object - module.exports
  
//   const data = [];
//   const add = (a, b) => a + b;
  
//   module.exports = {
//       data:[],
//       add: add
//   }