describe('My Test Suite', () => {
    it('Login Scenario', () => {
     
    cy.visit('https://foodmandu.com/')   // Opening URL
    cy.contains("Login").click()
    cy.wait(2000)
    cy.get('[type=email]').type("amira@yopmail.com")     // Login with valid username and password
    cy.get('[type= password]').type('test@123')
    cy.get('[type=submit]').click()
    cy.wait(2000)

    //cy.title().should('eq','Order food from the widest range of restaurants.')
    cy.get('[placeholder="Restaurant or Cuisine (leave it blank to browse all)"]').type("momo")  // Searching for food item 
    //cy.wait(2000)
    cy.get('.btn.btn--primary.btn-lg.btn-block').click()
    cy.wait(2000)
    cy.scrollTo('center') 
    cy.get('.progressive__img.progressive--is-loaded:eq(0)').click()
    cy.get('.icomoon.icon-add-circle.icomoon--green:eq(2)').click()   // Adding item in bag
    cy.wait(2000)
    cy.get('[placeholder="Add Notes"]').type('foodmandu test')       // Adding description
    cy.contains('Add to Bag').click()
    cy.wait(2000)
    cy.scrollTo('topRight')             // Logout
    cy.get('.icomoon.icon-profile').click()      
    cy.get('.green:eq(4)').click()

    //cy.contains('Find Restaurants').click()
    
    
   

     })
  })