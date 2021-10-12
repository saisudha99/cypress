describe("the transverse method in cypress",function(){

    it(' normal wait in cypress',function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.wait(3000)
        cy.get('[name="first_name"]').focus().type("sudha")
        cy.get('[name="last_name"]').type("nallamilli")
        cy.get('[name="email"]').type("sudhashankar2014@gmail.com")
        cy.get('textarea.feedback-input').type("i am new to cypress")
        cy.get('[type="submit"]').click()
        cy.url().should('contain',"thank-you")
    })

    it('to check signup function by using commands ',function(){

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.Signup("chvr","reddy","chvrreddy@gmail.com","hello")
        //cy.pause()

    })

    it('to check signup function by using different command ',function(){

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.Signup("srikanth","reddy","srikanthreddy@gmail.com","hello")

    })

    it('to check signup function by using different users ',function(){

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.Signup("manga","chirla","mangachirla@gmail.com","hello")
        cy.wait(3000)

    })

    
})


it('to check signup function by using fixtures',function(){
    cy.fixture('example.json').then((obj)=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.Signup(obj.dad.firstName,obj.dad.lastName,obj.dad.email,obj.dad.comments)
    })

})

it('to check signup function by using fixtures',()=>{
    cy.fixture('example.json').then((obj)=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.Signup(obj.mom.firstName,obj.mom.lastName,obj.mom.email,obj.mom.comments)
    })


})


it('to check signup function by using fixtures',function(){
    cy.fixture('example.json').then((obj)=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.Signup(obj.bro.firstName,obj.bro.lastName,obj.bro.email,obj.bro.comments)
    })


})

it.only('va;lidate login from web',function(){

    cy.visit('http://www.webdriveruniversity.com/Login-Portal/fail.html')
    cy.fixture('user').then(function(obj){
    cy.Login(obj.admin.username,obj.admin.password)
    cy.Login(obj.customer.username,obj.customer.password)
    cy.Login(obj.merchant.username,obj.merchant.password)
    })
})