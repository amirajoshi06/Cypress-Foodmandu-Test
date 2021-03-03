describe('My Test Suite', function () {
    it('Foodmandu Test Cases', function () {
     
    //Opening Foodmandu URL 
    cy.visit('https://foodmandu.com/')   
    cy.url().should('include', 'foodmandu')     //assertion
    cy.contains("Login").click()
    cy.wait(3000)

    //Login
    cy.get('[type=email]').should('be.visible').and('be.enabled').type("amira@yopmail.com")  //assertion 
    cy.get('[type=password]').should('be.visible').and('be.enabled').type('test@123')
    cy.get('[type=submit]').click()
    cy.wait(3000)

    cy.get('h2').should('be.visible')         //assertion
    
    //Searching Food Item
    cy.get('[placeholder="Restaurant or Cuisine (leave it blank to browse all)"]').type("momo")   
    cy.wait(2000)
    cy.get('.btn.btn--primary.btn-lg.btn-block').click()
    cy.wait(3000)
    cy.title().should('eq','Foodmandu: Food Delivery Service in Kathmandu and Pokhara')       //assertion
    cy.get('.progressive__img.progressive--is-loaded:eq(0)').click()
    cy.scrollTo('center') 

    //Adding Description
    cy.get('.icomoon.icon-add-circle.icomoon--green:eq(2)').click()   
    cy.wait(3000)
    cy.get('[placeholder="Add Notes"]').type('foodmandu test')       
    cy.contains('Add to Bag').click()
    cy.wait(3000)

    //Logout
    cy.scrollTo('topRight')            
    cy.get('.icomoon.icon-profile').click()    
    cy.get('.green:eq(1)').click()
    cy.get('.btn.btn--hollow.hidden-sm-down').should('be.visible')             //assertion

    
    
    
   

     })
  })