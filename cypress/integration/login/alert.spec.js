
describe('verify the alert',function(){

    it('validate the normal alert',function(){

        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
         cy.on('window:alert',function(str){
             expect(str).to.equal('I am an alert box!')
         })

        // cy.window().then((win),function(){

        //     let a=win.alert()

        //     console.log(a)
        // })

    })

})

it('validate the confirm alert one',function(){
    cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
    cy.get('#button4').click()
    cy.on('window:confirm',function(str){
        return true
    })

cy.get("#confirm-alert-text").should('have.text',"You pressed OK!")

})


it('validate the confirm alert two',function(){
    cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
    cy.get('#button4').click()
    cy.on('window:confirm',function(str){
        return false
    })

cy.get("#confirm-alert-text").should('have.text',"You pressed Cancel!")

})

it('validate modal',function(){

    cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html') 
    cy.get("#button2").click()
    cy.get('.modal-title').should('have.text','It’s that Easy!!  Well I think it is.....')
    cy.get('button[data-dismiss="modal"]').first().click()
    cy.get("#myModal").should('not.have.class',"in")
})


