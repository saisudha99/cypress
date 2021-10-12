

describe('verify all the api', function () {

    it('validate the get', function () {

        cy.request({
         method :"GET",
         url :'https://reqres.in/api/users?page=2'

        }).then(function(response){

            expect(response.status).to.equal(200)
            expect(response.body.data.length).to.equal(6)
            expect(response.body.data[0].last_name).to.contain("Lawson")
            expect(response.body).to.have.property("support")
            expect(response.body).to.include.all.keys("data","page","per_page","total_pages","total","support")

        })
    })


    it('validate the post', function () {

        cy.request({
         method :"POST",
         url :'https://reqres.in/api/users',
         body:
         {
            "name": "sudha",
            "job": "tester"
         }

        }).then(function(response,user){

            expect(response.status).to.equal(201)
            expect(response.name).to.equal(user,"sudha")
            expect(response.job).to.equal(user,"tester")

})
    
})


// PUT AND PATCH (SUBSET OF POST)
//response are 4 status,headers,body,duration
// ? indicates query parameter, / indicates path parameter

it('validate the put', function () {

    cy.request({
     method :"PUT",
     url :'https://reqres.in/api/users/2',
     body:
     {
        "name": "morpheus",
        "job": "zion resident"
     }

    }).then(function(response){

        expect(response.status).to.equal(200)

})

})
it('validate the delete', function () {

    cy.request({
     method :"DELETE",
     url :'https://reqres.in/api/users/2',

      }).then(function(response){

        expect(response.status).to.equal(204)

})

})

})