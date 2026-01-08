# OrangeHRM Login Automation (Data-Driven)

This project demonstrates data-driven test automation using Katalon Studio
on the OrangeHRM demo application.

## Features Covered
- Login Positive Scenario
- Login Negative Scenario (CSV Data-Driven)
- Forgot Password

## Tools & Technologies
- Katalon Studio
- Groovy
- CSV Data-Driven Testing

## Test Flow
- Test Suite binds external CSV test data
- Test Case is executed for each data row
- Login result is validated automatically (positive or negative)

## Data-Driven Approach
Test data (username & password) is stored in a CSV file and bound at the Test Suite level.
This allows scalable testing without hardcoded credentials.

## Demo Application
https://opensource-demo.orangehrmlive.com
