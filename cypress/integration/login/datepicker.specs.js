
describe('test datepicker', function () {

    it('validate the date picker', function () {

        // let date=new date()
        // let year=date.getfullyear()
        // let month=date.getmonth()

        // let monthlong=date.tolocaledatestring('default',{month:"long"})
        // let monthshort=date.tolocaledatestring('default',{month:"short"})

        // let day=date.getdate()
        // cy.log(date.getfullyear())
        // cy.log(date.getmonth())
        // cy.log(date.date())
        // cy.log(monthlong)
        // cy.log(monthshort)

        let date=new Date()
        date.setDate(date.getDate()+500)

        let year = date.getFullYear()
        let monthLong=date.toLocaleDateString('deafult',{month:"long"})
        let day=date.getDate()

        cy.log(year)
        cy.log(monthLong)
        cy.log(day)

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMonthandYear(){
            cy.get('.datepicker-switch').first().then(el=>{
        
                if(!el.text().includes(year)){ // 2022
                    cy.get('.next').first().click()
                    selectMonthandYear()
                }

            }).then(()=>{

                cy.get('.datepicker-switch').first().then(el=>{
        
                    if(!el.text().includes(monthLong)){ // 2022
                        cy.get('.next').first().click()
                        selectMonthandYear()
                    }
    
                })

            

            })

        }

        function selectDate(){
            cy.get('.day').contains(day).click()

        }

        selectMonthandYear()
        selectDate()



    })






})



