// test scenario -- what to test ?? login
// testcase -- 2 valid credentials and with invalid credentials

// import Login from "./support/login_po"
// import generic from "./support/generic"



describe("verify the login functionality",function(){

    // tagName[attribute="value"]
    //<input placeholder="Email" type="text" id="login-form_email" class="ant-input" value="">
    //<input type="password" placeholder="Password" id="login-form_password" class="ant-input"></input>

    // Never ever right a testcase without validation


    it("login with valid creditianals",function(){
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('input[id="email"]').type("chinmaydeshpande010@gmail.com")
        cy.get('input[type="password"]').type("chinmay010")
        cy.get('button[id="SubmitLogin"]').click()
        cy.get('h1[class="page-heading"]').should('be.visible')
        

    })

    it("login with invalid creditianals",function(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")
        cy.get('input[id="email"]').type("chinmaydeshpande010@gmail.com")
        cy.get('input[type="password"]').type("chinmay01")
        cy.get('button[id="SubmitLogin"]').click()
        cy.get('#center_column > :nth-child(2) > p').should('be.visible')

    })

    // it.only("framework",function(){
    //     let login=Login()
    //     let gen=generic()

    //     gen.Visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")
    //     gen.Type(login.userid_element,"chinmaydeshpande010@gmail.com")
    //     gen.Type(login.passwordid_element,"chinmay01")
    //     gen.click(login.signinid_element)


    // })
        
    

})
