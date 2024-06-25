Feature: Verify the Contact Us Webpage

    Scenario Outline: Verify contact us page for valid data
        Given Navigate to contact us page <index>
        When Enter user details
        And Click on submit button
        Then Verify the validation

        Examples:
            | index |
            | 0     |
            | 1     |

    