Feature: Lambda Page Validation Test Case

    Scenario Outline: Verify the Lambda Test Web Page
        Given Visit lambda test web page for login
        When Enter lambda test <userEmail> and <password>
        Then Lambda test url content "route=account/account"

        Examples:
            | userEmail          | password |
            | sonalk@gmail.com   | Novika   |
            | dipanshu@gmail.com | dipanshu |