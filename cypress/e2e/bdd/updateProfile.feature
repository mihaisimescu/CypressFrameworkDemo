Feature: UpdateProfile

    Scenario: When accessing an account, I can update my user information
        Given I can login
        When I will complete the profile form with new city '<city>', state '<state>' and Zip Code '<zipCode>'
        Then I will see the success mesage

        Examples:
        | city | state |  zipCode |
        | Madrid| Spain | 3232 |
        | Roma  | Italy | 1313 |