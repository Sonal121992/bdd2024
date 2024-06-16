Feature: Login functionality of Orange HRM web site

    Background: Navigate the url
        Given Navigate to OHRM login webpage valid 
        #since the given statement is same in every scenario therefore we are writting it in background

    Scenario: TC001 Login OHRM web page with valid username and password
        #Given Navigate to OHRM login webpage valid
        And Enter username and password
        When Click on login button
        Then Valid user should be logged in
    @smoke
    Scenario: TC002 Login OHRM web page with invalid username and password
        #Given Navigate to OHRM login webpage valid
        And Enter invalid username and password
        When Click on login button
        Then Login page should display Invalid credentials message
    @ignore
    Scenario: TC003 Login OHRM web page with valid username and password
        #Given Navigate to OHRM login webpage valid
        And Enter username and password
        When Click on login button
        Then Login page should display "Dashboard"