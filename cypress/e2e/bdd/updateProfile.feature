Feature: UpdateProfile

    Scenario: When accessing an account, I can update my user information
        Given I can login
        When I will complete the profile form with '<city>' and '<state>'
        Then I will see the success mesage

        Examples:
        | city | state |
        | Madrid| Spain |
