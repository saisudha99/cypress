




describe('validate the radiobutton and checkbox functionality',function(){

    it('validate the radibuttoncheckbox',function(){

        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="green"]').check()
        cy.get('input[value="green"]').should('be.checked')
       

        cy.get('input[value="blue"]').check()
        cy.get('input[value="blue"]').should('be.checked')
        cy.get('input[value="green"]').should('not.be.checked')

        cy.get('input[value="yellow"]').check()
        cy.get('input[value="yellow"]').should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')




        




        cy.get('input[value="orange"]').check()
        cy.get('input[value="orange"]').should('be.checked')
        cy.get('input[value="yellow"]').should('not.be.checked')



        cy.get('input[value="purple"]').check()
        cy.get('input[value="purple"]').should('be.checked')
        cy.get('input[value="orange"]').should('not.be.checked')

    })

})


it('validate the checkbox',function(){

    cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    cy.get('input[type="checkbox"]').each(function (el, index) {
        el.click()
        if (index == 2) {
            cy.wrap(el).should('not.be.checked')
        }
        else {
            cy.wrap(el).should('be.checked')
        }

    })



})
it('validate the drop down list',function(){

     
    // We can basically select by value attribute 
    // We can basically select by text

    cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    
    cy.get('#dropdowm-menu-1').select('Python')


})

it.only('validate whether the element is enabled or disabled',function(){

    cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    cy.get('input[value="cabbage"]').should('be.disabled')
    cy.get('input[value="pumpkin"]').should('be.enabled')


})






