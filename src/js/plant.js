// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

let plant = { soil: 0, light: 0, water: 0 };


// We create four functions using our function factory. We could easily create many more.

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const giveLight = changeState("light")(1);

$(document).ready(function() {

  $('#soil').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#soil').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#soil').click(function() {
    const newState = stateControl(greenFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#water').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Soil: ${newState.water}`);
  });

  $('#water').click(function() {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#light').click(function() {
    const newState = stateControl(giveLight);
    $('#light-value').text(`Light: ${newState.light}`);
  });

  $('#show-state').click(function() {
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });
});