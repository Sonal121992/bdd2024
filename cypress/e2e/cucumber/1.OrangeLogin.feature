Feature: Login functionality of Orange HRM web site


    Scenario: TC001 to login Orange HRM webpage with valid credentials
        Given Navigate to Orange HRM login webpage valid
        And Enter username and password
        When Click on login button
        Then Valid user should be logged in

    Scenario: TC002 to login Orange HRM webpage with invalid credentials
        Given Navigate to Orange HRM login webpage valid
        And Enter invalid username and password
        When Click on login button
        Then It should display Invalid credentials message