Feature: Verify new user registration for lambda test page

    Scenario Outline: Verify user for valid data
        Given Visit to lambda test url <index>
        And Click on continue button
        When Fill the form and click on continue button
        Then Check the new user created

        Examples:
            | index |
            | 0     |
            | 1     |