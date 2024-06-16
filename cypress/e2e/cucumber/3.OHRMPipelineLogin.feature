Feature: Verify login functionality of Orange HRM

    Scenario: TC001 Verify login for valid user
        Given Navigate to Orange HRM url page
        When Enter username and password
            | username | password |
            | Admin    | admin123 |
        And Click on login button
        Then Validate for valid user page
    @ignore
    Scenario Outline: TC002 Verify login for valid user
        Given Navigate to Orange HRM url page
        When Enter <username> and <password>
        And Click on login button
        Then Validate for valid user page

        Examples:
            | username | password |
            | Admin    | admin123 |
            | Admin    | admin123 |
    @smoke
    Scenario Outline: TC003 Verify login for Valid and Invalid user
        Given Navigate to Orange HRM url page
        When Enter <username1> and <password1>
        And Click on login button
        Then Validate for valid and invalid <credentials>

        Examples:
            | username1 | password1 |
            | Admin     | admin123  |
            | ABC       | abc123    |
    @regression
    Scenario Outline: TC004 Verify login for Valid and Invalid user with credentials
        Given Navigate to Orange HRM url page
        When Enter "<username2>" and "<password2>"
        #Agar yaha <> aise greater than less than mme agar pass kar rai to cy.js me hum word use karenge eski jagah
        #Lekin agar "" aise double quote me value pass kar rai to cy.js me hum string use karenge eski jagah
        And Click on login button
        Then  Validate for valid and invalid "<credentials2>"

        Examples:
            | username2 | password2 | credentials2 |
            | Admin     | admin123  | valid        |
            | ABC       | abc123    | invalid      |