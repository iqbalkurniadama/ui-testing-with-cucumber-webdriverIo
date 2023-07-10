Feature: Login flow in kasirAja

  Background: 
    Given I am on the login page                                   
  
  # negative 
  Scenario: User enters wrong email and password
    When I input email as "<wrongEmail>" and password as "<wrongPassword>"
    And I click on the login button
    Then I must see error message "<errorMessage>"

    Examples:
      | wrongEmail        | wrongPassword | errorMessage                       |
      | test123@gmail.com | asd           | Kredensial yang Anda berikan salah |

  # positive
  Scenario: User can login using valid data
    When I input email as "<email>" and password as "<password>"
    And I click on the login button
    Then I must navigate to dashboard page
  
    Examples:
      | email             | password       |
      | test@gmail.com    | 123            |
