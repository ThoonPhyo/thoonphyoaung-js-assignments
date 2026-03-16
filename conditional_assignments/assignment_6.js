// Loan Eligibility Checker

// Customers info
let cust_credit_score = 200;
let cust_income_annual = 30000;

// Minimum required
let min_credit_score = 700;
let min_income_annual = 40000;

// determination
if (cust_credit_score >= min_credit_score && cust_income_annual >= min_income_annual) {
  console.log("This Customer is eligible for the loan !");
} else if (cust_credit_score < min_credit_score && cust_income_annual >= min_income_annual) {
    console.log("Sorry, a higher credit score is required.");
} else if (cust_credit_score >= min_credit_score && cust_income_annual < min_income_annual) {
    console.log("Sorry, a higher annual income is required.");
} else {
  console.log("Sorry, Not eligible for the loan !");
}
