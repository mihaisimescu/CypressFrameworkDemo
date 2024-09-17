Feature: Login

    Scenario: When entering valid user credentials I can login and see the overview page
        Given I open the login page
        When I will complete the login form and submit
        Then I am able to see the overview page