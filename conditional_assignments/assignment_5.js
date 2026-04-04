// Eligibility for a Discount

// customers_age
let customers_age = 60;
let is_member = true;

// discount types
let senior_discount = "20% discount[senior]";
let member_discount = "10% discount[member]";

if (customers_age >= 60 && !is_member) {
  console.log("This customer is eligible for " + senior_discount);
} else if (customers_age < 60 && is_member) {
  console.log("This customer is eligible for " + member_discount);
} else if (customers_age >= 60 && is_member) {
  console.log(
    "This customer is eligible for " +
      senior_discount +
      " and " +
      member_discount,
  );
} else {
  console.log("Sorry, can't get any discount");
}

// tr method
let age = 40;
let isMember = true;
if (age >= 60 && isMember) {
  console.log(
    "You are eligible for both 20% senior discount and 10% memebr discount",
  );
} else if (age >= 60) {
  console.log("You are eligible for 20% senior discount ");
} else if (isMember) {
  console.log("You are eligible for 10% member discount");
} else {
  console.log("sorry, you are not eligible for any discount");
}
