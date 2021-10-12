describe('verify the HomePage', function () {

    it('validate every navigation tab', function () {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('input[id="email"]').type("chinmaydeshpande010@gmail.com")
        cy.get('input[type="password"]').type("chinmay010")
        cy.get('button[id="SubmitLogin"]').click()

        cy.get("li [title='Women']").eq(0).should('have.text', 'Women')
        cy.get("li [title='Dresses']").eq(1).should('have.text', 'Dresses')
        cy.get("li [title='T-shirts']").eq(1).should('have.text','T-shirts')
    })
})