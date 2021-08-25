describe('kumpulan test case', function(){
    // Isi nama dan email, lalu klik button “email me!”.
    it('test-case1', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')  // parameternya URL
        cy.get('#et_pb_contact_name_0').type('Qolby')
        cy.get('#et_pb_contact_email_0').type('qolbyazizahsi@gmail.com')
        cy.get('.et_pb_contact_submit').click()
    })
    // Pilih jenis kelamin pada radio button.
    it('test-case2', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')  // parameternya URL
        cy.get('[value="female"]').click()
    })
    // Pilih satu atau semua pilihan pada checkboxes.
    it('test-case3', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')  // parameternya URL
        cy.get('[value="Bike"]').click()
        cy.get('[value="Car"]').click()
    })
    // Pilih dropdown “Audi”.
    it('test-case4', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')  // parameternya URL
        cy.get('select').select('Audi')
    })
    // Klik tombol “Click Me” pada bagian simple controls lalu cek apakah terdapat tulisan button success.
    it('test-case4', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')  // parameternya URL
        cy.get('.entry-title').click()
        cy.contains('success')
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
