Feature: Google page verification
    
    Scenario: Verify the google page
        Given I visit to google page
        When I see the "Google" in title
        # for <> we use word in cy.js
        Then I see the "google" in url
    # for " " we use string in cy.js
    @smoke @regression
    # for this we will not use npx cypress open
    # for smoke ==> we will use ==> npx cypress run --env TAGS="@smoke" --headed --browser edge
    # same for regression ===> we will use ==> npx cypress run --env TAGS="@smoke" --headed --browser edge
    # with this code will run and close for webpage
    # and we will get the report in the terminal
    # Wherever we have written @smoke That case only will get passed others will get ignore
    Scenario Outline: Verify the lambdatest website
        Given First visit the lambda test website
        When Enter login details <userEmail1> and <password1>
        #And Click on lambda test login button
        Then url should content "route=account/account"

        Examples:
            | userEmail1         | password1 |
            | sonalk@gmail.com   | Novika    |
            | dipanshu@gmail.com | dipanshu  |

    # Now instead of writting such a big code for result we will write description in pachage.json  inside script
    # like below , below the test
    # "smoke-test" : "npx cypress run --env TAGS='@smoke' --headed --browser edge",
    # "regression-test" : "npx cypress run  --env TAGS='@regression' --headed --browser edge"
    # after passing above command in package.json we write ==> npm run smoke-test ==> for smoke case
    # Here it will consider 2 examples as separate 2 cases
    # so for this 7.SmokeRegression it will give 1 pending 2 passing\
    # there are three types of tags
        # @smoke
        # @regression
        # @ignore
    # npx cypress run  --env TAGS='not @ignore' --headed --browser edge
    # if we run above code for result then we will get all case which are without ignore tag including smoke and regression
