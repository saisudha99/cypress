

describe('validate the table',function(){

    let sum=0

    it('sum of table of column',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('table[class="table table-light traversal-table"]').find('tbody').find('tr').each(function(el){

            cy.wrap(el).children().first().then(function(el){

                sum= Number(el.text()) + sum
            })

        

        }).then(function(){
            expect(sum).to.equal(6)
        })
    })
})

