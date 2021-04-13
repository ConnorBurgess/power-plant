// const canEat = function(creature) {
//   const obj = {
//     eat: function(food) {
//       return `The ${creature.name} eats the ${food}.`
//     }
//   }
//   return obj;
// }

// const canSleep = function(creature) {
//   const obj = {
//     sleep: function() {
//       return `The ${creature.name} sleeps tonight.`
//     }
//   }
//   return obj;
// }

// const canFly = function(creature) {
//   const obj = {
//     fly: function() {
//       return `The ${creature.name} flies.`
//     }
//   }
//   return obj;
// }

// const canLayEggs = function(creature) {
//   const obj = {
//     layEggs: function() {
//       return `The ${creature.name} lays eggs.`
//     }
//   }
//   return obj;
// }

// const sleepingEatingCreature = function(name) {
//   let state = {
//     name
//   }
//   return { ...state, ...canEat(state), ...canSleep(state), ...canFly(state), ...canLayEggs(state) };
// }

// const cat = sleepingEatingCreature("cat");
// const lion = sleepingEatingCreature("lion");
// const bird = sleepingEatingCreature("bird");
// const platypus = sleepingEatingCreature("platypus");

// console.log(cat.eat("salmon"))
// console.log(lion.sleep())
// console.log(bird.fly())
// console.log(platypus.layEggs())