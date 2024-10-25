# Rule Engine Application


## Overview

This application is a dynamic rule engine designed to determine user eligibility based on various attributes such as age, department, salary, and experience. It leverages an Abstract Syntax Tree (AST) to represent and manage conditional rules, enabling the creation, combination, and evaluation of rules in a flexible and dynamic manner.

Key Features:
      Dynamic Rule Creation: Easily create new rules based on user attributes.
      Rule Combination: Combine multiple rules to form complex eligibility criteria.
Rule Evaluation:
         Efficiently evaluate user eligibility by processing the AST.
Use Cases:
    HR Systems: Determine eligibility for promotions, bonuses, or specific roles.

    Financial Services: Assess eligibility for loans, credit cards, or insurance policies.
  
    Educational Platforms: Evaluate student eligibility for scholarships or special programs.




## Features

- **Create Rules:** Define rules using a string format that gets converted into an AST.
  
  


- **Combine Rules:** Combine multiple rules into a single AST for more complex evaluations.
  
  

  
- **Evaluate Rules:** Check if the given data meets the criteria defined by the AST.
  
  


- **Tree Visualization:** Define or Combine Rule would should show Tree Representation.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. **Clone the Repository**
   ```bash
    git clone https://github.com/Arjuntiruveedula/Rule-Engine-with-AST.git
   ```

   ```bash
   cd Rule-Engine-with-AST
   ```

3. **You have to add your own Mongo Database**
   -Add .env file and add mongoUrl in .env file as
   ```bash
   MONGO_URL=yourDbUrl
   ```
4. **Install Backend Dependencies**

   
   ```bash
   npm install
   ```

5. **Start the Backend Server**

   ```bash
   nodemon server.js
   ```
   or
    ```bash
   npm start
   ```



    -And Application will be running at http://localhost:3000/

## API Endpoints

1. **Create a Rule**
   - **Endpoint:** `/api/create_rule`
   - **Method:** POST
   - **Body:**

     ```json
     {
       "ruleString": "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)",
       "ruleName": "Rule 1"
     }
     ```
use appropriate spaces in Rules for correct results.

Rule should be in follow format:
variable operator value 

   - **Response:**

     ```json
     {
       "_id": "605c72ef1f4e3a001f4d2e9a",
       "rule_name": "Rule1",
       "rule_ast": { ... }
     }
     ```

2. **Combine Rules**
   - **Endpoint:** `/api/rules/combine_rules`
   - **Method:** POST
   - **Body:**

     ```json
     {
       "ruleIds": ["605c72ef1f4e3a001f4d2e9a", "605c730f1f4e3a001f4d2e9b"]
       "operators: op
     }
     ```
   - **Response:**

     ```json
     {
       "type": "operator",
       "value": operator,
       "left": { ... },
       "right": { ... }
     }
     ```

3. **Evaluate a Rule**
   - **Endpoint:** `/api/rules/evaluate_rule`
   - **Method:** POST
   - **Body:**

     ```json
     {
       "rule": { ... },
       "data": {
         "age": 35,
         "department": "Sales",
         "salary": 60000,
         "experience": 3
       }
     }
     ```
   - **Response:**

     ```json
     {
       "result": true
     }
     ```

