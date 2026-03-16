// Home Renovation Cost Estimator

// Costs fo different areas to renovate
let areas = {
  living_room: { sq_ft: 200, cost: 15 },
  kitchen: { sq_ft: 150, cost: 20 },
  bathroom: { sq_ft: 100, cost: 25 },
};

//  cost of living room
let living_room_cost = areas.living_room.sq_ft * areas.living_room.cost;
console.log("Cost for the living room : " + living_room_cost);

// cost of kitchen
let kitchen_cost = areas.kitchen.sq_ft * areas.kitchen.cost;
console.log("Cost of the Kitchen : " + kitchen_cost);

// cost of the bathroom
let bathroom_cost = areas.bathroom.sq_ft * areas.bathroom.cost;
console.log("Cost of the Bathroom : " + bathroom_cost);

// total renovation cost
let total_cost = living_room_cost + kitchen_cost + bathroom_cost;
console.log("Total Renovation Cost : " + total_cost);
