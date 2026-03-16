// fuel efficiency and trip cost calculator

let distance = 300; // distance of trip
let fuel_eff = 25; // 25miles per gallon
let fuel_cost = 3.75; // per gallon

// Needed fuel for the trip
let fuel_needed = distance / fuel_eff; 
console.log("Fuel needed : " + fuel_needed + " gallons for the trip");

// Trip Cost
let trip_cost = fuel_needed * fuel_cost;
console.log("Total Cost for the trip : $ " + trip_cost );

