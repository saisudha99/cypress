describe('validate the window based elements',function(){
    it('validate the html element',function(){

cy.visit('https://plctools.com/ethernet-devices/')

 //cy.title().should('have.text','Ethernet Devices - PLC Tools')

// cy.title().should('eq', 'Ethernet Devices - PLC Tools')

 // cy.log(cy.title())
 // //expect(cy.title().chainerId).equals('"chainer132"')

 // expect(cy.title().chainerId).includes('chainer')

 // regular expression

    })

    it('reload the page',function(){

        cy.visit('https://plctools.com/ethernet-devices/')

        cy.contains("Analog Simulators").click({ force: true })
        cy.url().should('include', "analog")
        cy.go('back')
        cy.go('forward')
    })

    it('invoke command',function(){
        cy.visit('https://plctools.com/')
        cy.get('h2[class="page-heading"]').eq(0).should('have.text','Featured Products')
        cy.get('h2[class="page-heading"]').eq(0).invoke('text').then(function(el){
            expect(el).to.equals('Featured Products')
        })
    })
})

