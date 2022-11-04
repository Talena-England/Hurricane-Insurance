describe('Successful tests', () => {
  it('Successfully get two quotes for hurricane insurance. (straw, yes)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //entering a valid zip code, pressing get a quote, and validating we land on "buidling-material" page
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material straw, clicking next, and validating we land on "water-proximity" page
    cy.get('[data-testid="straw"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting Yes, clicking next, and validating we land on "quote" page. 
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss36').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/quote')

    //validate that two quotes were generated 
    cy.get('.jss45 > .MuiGrid-container').children().should('have.length', 2)
  
   //selecting include flood protection and clicking on choose complete
   cy.get('.jss60').click()
   cy.get('.jss61 > .MuiButtonBase-root > .MuiButton-label').click()
   //would add validation for page URL for checkout next
  })

  it('Successfully get two quotes for hurricane insurance. (sticks, yes)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //entering a valid zip code, pressing get a quote, and validating we land on "buidling-material" page
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material sticks, clicking next, and validating we land on "water-proximity" page
    cy.get('[data-testid="sticks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting Yes, clicking next, and validating we land on "quote" page. 
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss36').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/quote')

    //validate that two quotes were generated 
    cy.get('.jss45 > .MuiGrid-container').children().should('have.length', 2)
  
   //selecting include flood protection and clicking on choose complete
   cy.get('.jss60').click()
   cy.get('.jss61 > .MuiButtonBase-root > .MuiButton-label').click()
   //would add validation for page URL for checkout next 
  })

  it('Successfully get two quotes for hurricane insurance. (bricks, yes)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //entering a valid zip code, pressing get a quote, and validating we land on "buidling-material" page
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material bricks, clicking next, and validating we land on "water-proximity" page
    cy.get('[data-testid="bricks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting Yes, clicking next, and validating we land on "quote" page. 
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .jss36').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/quote')

    //validate that two quotes were generated 
    cy.get('.jss45 > .MuiGrid-container').children().should('have.length', 2)
  
   //selecting include flood protection and clicking on choose complete
   cy.get('.jss60').click()
   cy.get('.jss61 > .MuiButtonBase-root > .MuiButton-label').click()
   //would add validation for page URL for checkout next 
  })

  it('Successfully get two quotes for hurricane insurance. (straw, no)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //entering a valid zip code, pressing get a quote, and validating we land on "buidling-material" page
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material straw, clicking next, and validating we land on "water-proximity" page
    cy.get('[data-testid="straw"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting no, clicking next, and validating we land on "quote" page. 
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss36').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/quote')

    //validate that two quotes were generated 
    cy.get('.jss45 > .MuiGrid-container').children().should('have.length', 2)
  
   //selecting include flood protection and clicking on choose complete
   cy.get('.jss60').click()
   cy.get('.jss61 > .MuiButtonBase-root > .MuiButton-label').click()
   //would add validation for page URL for checkout next 
  })

  it('Successfully get two quotes for hurricane insurance. (sticks, no)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //entering a valid zip code, pressing get a quote, and validating we land on "buidling-material" page
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material sticks, clicking next, and validating we land on "water-proximity" page
    cy.get('[data-testid="sticks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting no, clicking next, and validating we land on "quote" page. 
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss36').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/quote')

    //validate that two quotes were generated 
    cy.get('.jss45 > .MuiGrid-container').children().should('have.length', 2)
  
   //selecting include flood protection and clicking on choose complete
   cy.get('.jss60').click()
   cy.get('.jss61 > .MuiButtonBase-root > .MuiButton-label').click()
   //would add validation for page URL for checkout next 
  })

  it('Successfully get two quotes for hurricane insurance. (brickss, no)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //entering a valid zip code, pressing get a quote, and validating we land on "buidling-material" page
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material bricks, clicking next, and validating we land on "water-proximity" page
    cy.get('[data-testid="bricks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting no, clicking next, and validating we land on "quote" page.  
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .jss36').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/quote')

    //validate that two quotes were generated 
    cy.get('.jss45 > .MuiGrid-container').children().should('have.length', 2)
  
   //selecting include flood protection and clicking on choose complete
   cy.get('.jss60').click()
   cy.get('.jss61 > .MuiButtonBase-root > .MuiButton-label').click()
   //would add validation for page URL for checkout next 
  })
})

describe('Failure tests', () => {
  it('Fail quote process at zip code page - invalid zip code', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

     //entering an invalid zip code, pressing get a quote, 
     cy.get('.MuiInputBase-input').click()
     .type('11111')

     cy.get('.MuiButton-label').click()

    // this should produce an error as 11111 is not a valid zip code, adding to defect log
  })

  it('Fail quote process at zip code page - less than 5 digits', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

     //entering an invalid zip code, seeing the invalid zip code text, pressing get a quote, seeing the text error turns red
     cy.get('.MuiInputBase-input').click()
     .type('111')

     cy.get('.MuiFormHelperText-root').should('have.text', "Invalid zip code")

     cy.get('.MuiButton-label').click()

     cy.get('p.MuiFormHelperText-root.Mui-error').should('have.css', 'color', 'rgb(244, 67, 54)')
  })

  it('Fail quote process at zip code page - no zip code entered', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

     // pressing get a quote, seeing the zip code is required, and the required error is red 
     cy.get('.MuiButton-label').click()

     cy.get('.MuiFormHelperText-root')
     .should('have.text', "Required")
     .should('have.css', 'color', 'rgb(244, 67, 54)')
  })

  it('Fail quote process at zip code page - more than 5 digits', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

     //entering an invalid zip code, seeing the invalid zip code text, pressing get a quote, seeing the text error turns red
     cy.get('.MuiInputBase-input').click()
     .type('123456')

     cy.get('.MuiButton-label').click()
     //this test should produce an error, adding to defect log
  })

  it('Fail quote process at "building-material" page - no selection', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

      //entering a valid zip code, pressing get a quote, and validating we land on "building-material" page
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    //clicking on next without selecting a building material option
    cy.get('.MuiButton-label').click()
   //This test should produce an error, adding to defect list
  })

  it('Fail quote process at "Water-proximity" page - no selection (Straw)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

   //entering a valid zip code, pressing get a quote, and validating we land on "building-material page"
   cy.get('.MuiInputBase-input').click()
   .type('29073')

   cy.get('.MuiButton-label').click()

   cy.url().should('include', '/building-material')

   // selecting building material straw, clicking next, and validating we land on "water-proximity" page
   cy.get('[data-testid="straw"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
   cy.get('.MuiButton-label').click()

   cy.url().should('include', '/water-proximity')
   // clicking on next without selecting yes/no
   cy.get('.MuiButton-label').click()
   //This test should produce an error, adding to defect list
  })

  it('Fail quote process at "Water-proximity" page - no selection (Sticks)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

   //entering a valid zip code, pressing get a quote, and validating we land on "building-material page"
   cy.get('.MuiInputBase-input').click()
   .type('29073')

   cy.get('.MuiButton-label').click()

   cy.url().should('include', '/building-material')

   // selecting building material sticks, clicking next, and validating we land on "water-proximity" page
   cy.get('[data-testid="sticks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
   cy.get('.MuiButton-label').click()

   cy.url().should('include', '/water-proximity')

   // clicking on next without selecting yes/no
   cy.get('.MuiButton-label').click()
   //This test should produce an error, adding to defect list
  })

  it('Fail quote process at "Water-proximity" page - no selection (bricks)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //entering a valid zip code, pressing get a quote, and validating we land on "buidling-material" page
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material bricks, clicking next, and validating we land on "water-proximity" page
    cy.get('[data-testid="bricks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')
    // clicking on next without selecting yes/no
   cy.get('.MuiButton-label').click()
   //This test should produce an error, adding to defect list
  })
}) 