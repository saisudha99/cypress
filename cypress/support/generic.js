export class generic {
    Visit(url) {
        cy.visit(url)
    }

    Type(element, text) {
        cy.get(element).type(text)
    }

    Click(element) {
        cy.get(element).click() 
}

}