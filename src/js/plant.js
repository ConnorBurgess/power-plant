import '../css/styles.css';
// This function stores our state.

const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};
let id = 0;
const stateControl = storeState({ name:`Plant ${id}`, soil: 0, light: 0, water: 0 });

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  console.log("prop = " + prop);
  return (value) => {
    console.log("value = " + value);
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};


// We create four functions using our function factory. We could easily create many more.

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const giveLight = changeState("light")(1);

// Add composition ability
const canEat = function(plant) {
  const obj = {
    eat: function(food) {
      return `${plant.name} eats the ${food}.`
    }
  }
  return obj;
}
const eatingPlant = (plant) => {
  console.log(plant);
  return { plant, ...canEat(plant) };
};

$(document).ready(function() {
  $('#soil').click(function() {
    const currentPlant = plantObj[`${id}`];
    const newState = currentPlant.plant(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#light').click(function() {
    const currentPlant = plantObj[`${id}`];
    const newState = currentPlant.plant(giveLight);
    $('#light-value').text(`Light: ${newState.light}`);
  });

  $('#water').click(function() {
    const currentPlant = plantObj[`${id}`];
    const newState = currentPlant.plant(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  var plantObj = {};
  $('#new-plant').click(function() {
    id++;

    plantObj[`${id}`] = storeState({ name:`Plant ${id}`, soil: 0, light: 0, water: 0});
    console.log(plantObj[`${id}`]);
    plantObj[`${id}`] = eatingPlant(plantObj[`${id}`]);
    console.log(plantObj[`${id}`]);
    // console.log(plantObj[`${id}`].eat("lol"));

    $('#plant-id').text(`Plant: ${id}`);
    // console.log(plantObj);
  });

  $('#show-state').click(function() {
    $('#output').empty();
    Object.entries(plantObj).forEach(entry => {
      const [key, value] = entry;
      console.log("hello");
      $('#output').append(`<br><b>${value().name}</b> `);
      $('#output').append(`<li> Soil: ${value().soil} </li>`);
      $('#output').append(`<li> Water: ${value().water}</li> `);
      $('#output').append(`<li> Light: ${value().light} </li>`);
      // $('#output').append(`<li> Ability: ${value()} </li>`);
    });
  });
});