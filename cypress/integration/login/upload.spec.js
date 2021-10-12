import "cypress-file-upload"




describe('verify the file upload',function(){

    it('verify the file upload',function(){
     cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
     let fixturePath="Manaul Testing"

     cy.get('#myFile').attachFile(fixturePath)
     cy.get("#submit-button").click()
     cy.on("window:alert",function(str){

expect(str).to.equal('Your file has now been uploaded!')
     })

    })

    it('verify the no file upload',function(){

cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
     let fixturePath="Manaul Testing"

    // cy.get('#myFile').attachFile(fixturePath)
     cy.get("#submit-button").click()
     cy.on("window:alert",function(str){

expect(str).to.equal('You need to select a file to upload!')

     })

    })

    it('uploading the multiple files',function(){

     cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
     let fixturePath="Manaul Testing"
     let fixturePath2="Manaul Testing"
cy.get( "#igUpload1_ibb_fp").attachFile([fixturePath,fixturePath2])
cy.get('#igUpload1_spbtncncl_lbl').click()
cy.get('#igUpload1_summplbl').contains('2')
     
})

it('change the file name while uploading',function(){

     cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
     let fixturePath="Manaul Testing"
     cy.get('#myFile').attachFile({filePath:fixturePath,fileName:"manual testing"});

     cy.wait(4000)
     cy.get('#submit-button').click()
     cy.on('window:alert',function(str){
          expect(str).to.equal('Your file has now been uploaded!')
     })
})

})