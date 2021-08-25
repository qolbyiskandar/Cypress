describe('kumpulan test case', function(){
    it('test-case1', function(){
        cy.visit('https://demoqa.com/automation-practice-form')  // parameternya URL
        //Input nama dan akhir
        cy.get('#firstName').type('Qolby')
        cy.get('#lastName').type('Azizah')
        //Input email
        cy.get('#userEmail').type('qolbyazizahsi@gmail.com')
        //Check gender
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click()
        //Input no hp
        cy.get('#userNumber').type('089606450129')
        //Check hobbies
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click()
        //Isi alamat terkini
        cy.get('#currentAddress').type('Jl. Supratman no. 64, Bandung 40122')
        //Click button submit
        cy.get('#submit').click()
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})