describe('transverse methods in cypress',function(){

    it('children() to get the children of the DOM element',function(){

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')

        cy.get('.traversal-breadcrumb').children('.active').should('have.text','Contact Us')
    })

    it('first() to retrieve the first Element in the HTMLElement list',function(){

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-breadcrumb').children().first().should('have.text','Home')
    })

    it('last() to retrieve the last Element in the HTMLElement list',function(){

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-breadcrumb').children().last().should('have.text','Contact Us')
    })

    it('eq() to retrieve the Element in the HTMLElement list by index',function(){

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-breadcrumb').children().eq(1).should('have.text','About Us')

})

it('parent() to retrieve the parent of current Element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.contains('Andy').parent().should('have.class','bg-info')


})
it('next() to retrieve the sibling of the Element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.bg-info').children().eq(0).next().should('have.text','Andy')


})
it('prev() to retrieve the prev sibling of the Element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.bg-info').children().eq(2).prev().should('have.text','Andy')

})

it('closet() to get the clost ancestor of the Element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.contains('Firstname').closest('table').should('have.attr','id','t01')

})


it('find() to get the descendent DOM Elements',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-pagination').find('li').find('a').should('have.length','7')

})

it('nextAll() to get the next sibling of DOM Element from current element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.contains('Apple').nextAll().should('have.length',9)

})


it('nextUntil() to find the next sibling to a particular sibling element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.contains('Apple').nextUntil('#veggie').should('have.length',4)

})

it('not() to remove a particular set of element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.btn').not('.disabled').should('have.length',12)

})

it('siblings() to get all the sibling  for a particular element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#coffee').siblings().should('have.length',4)

})

it('find() to basically filter out a particular element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    
     cy.get('.breadcrumb.traversal-breadcrumb').find(">li").filter('.active').should('have.text','Contact Us')

   // cy.get('.breadcrumb.traversal-breadcrumb').filter(".active").should('have.text','Contact Us')
})

it('filter() to basically filter out a particular element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    
     cy.get('.traversal-drinks-list').find(">li").filter("#milk").should('have.text','Milk')

   // cy.get('.breadcrumb.traversal-breadcrumb').filter(".active").should('have.text','Contact Us')
})


it('parents() to get a particular or validate a particular element',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-food-list').parent().should('contain','Apple')


})

it('parentsUntil() to get specific number of elements or only from child',function(){

    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')

    cy.get('.traversal-food-list').parentsUntil("Figs").should('have.length',5)

})

})