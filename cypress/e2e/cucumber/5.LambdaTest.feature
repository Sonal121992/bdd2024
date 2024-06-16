Feature: LambdaTest login Validation

    Scenario Outline: Lambda Test web page
    # Scenario is use were data is fix means it uses fixed values for input and checks against predefined expected outcomes.
    # Scenario Outline is use when the same test is performed multiple times with a different combination of values.
        # for this we use angled brackets <>
        # actual data set is also provided in data table placed in Examples keyword
        #  allowing you to run the same scenario with different inputs to ensure the application behaves correctly under various conditions.
        Given Visit LambdaTest web page login
        When Enter lambda <userEmail> and <password>
        And Click on lambda login button
        # Always use different sentence as first time here we have written Click on login button
        # Therefore we have use here ===> Click on lambda login button
        Then url content "route=account/account"

        Examples:
            | userEmail          | password |
            | sonalk@gmail.com   | Novika   |
            | dipanshu@gmail.com | dipanshu |