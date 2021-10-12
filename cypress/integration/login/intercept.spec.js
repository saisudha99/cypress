

describe('validate the XHR  request',function(){

    it('validate the xhr GET request',function(){

//if api is hit by front end people it is called "accenture request"

cy.intercept({

    method:'GET',
    url:"https://jsonplaceholder.cypress.io/comments/1",

}).as('getComment')

cy.visit('https://example.cypress.io/commands/network-requests')
cy.contains('Get Comment').click()
cy.wait('@getComment').should(function(data){
    cy.log(data.response.statusCode)
    expect(data.response.statusCode).to.equal(200)


})
    })


    it('validate the xhr POST request',function(){

        //if api is hit by front end people it is called "accenture request"
        
        cy.intercept({
        
            method:'POST',
            url: "https://jsonplaceholder.cypress.io/comments",
        
        }).as('CreateComment')
        
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@CreateComment').should(function(data){
            cy.log(data.response.statusCode)
            expect(data.response.statusCode).to.equal(201)
})

    })

    it('validate the xhr PUT request',function(){

        //if api is hit by front end people it is called "accenture request"
        
        cy.intercept({
        
            method:'PUT',
            url:  "https://jsonplaceholder.cypress.io/comments/1",
        
        }).as('updateComment')
        
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').should(function(data){
            cy.log(data.response.statusCode)
            expect(data.response.statusCode).to.equal(200)
})

    })

})

        