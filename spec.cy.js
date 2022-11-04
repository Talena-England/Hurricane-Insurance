describe('Successful tests', () => {
  it('Successfully get two quotes for hurricane insurance. (straw, yes)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //entering a valid zip code, pressing get a quote, and validating the page we land on
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material straw, clicking next, and validating the page we land on
    cy.get('[data-testid="straw"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting Yes, clicking next, and validating the page we land on. 
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

    //entering a valid zip code, pressing get a quote, and validating the page we land on
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material sticks, clicking next, and validating the page we land on
    cy.get('[data-testid="sticks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting Yes, clicking next, and validating the page we land on. 
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

  it('Successfully get two quotes for hurricane insurance. (brickss, yes)', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //entering a valid zip code, pressing get a quote, and validating the page we land on
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material bricks, clicking next, and validating the page we land on
    cy.get('[data-testid="bricks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting Yes, clicking next, and validating the page we land on. 
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

    //entering a valid zip code, pressing get a quote, and validating the page we land on
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material straw, clicking next, and validating the page we land on
    cy.get('[data-testid="straw"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting no, clicking next, and validating the page we land on. 
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

    //entering a valid zip code, pressing get a quote, and validating the page we land on
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material sticks, clicking next, and validating the page we land on
    cy.get('[data-testid="sticks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting no, clicking next, and validating the page we land on. 
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

    //entering a valid zip code, pressing get a quote, and validating the page we land on
    cy.get('.MuiInputBase-input').click()
    .type('29073')

    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/building-material')

    // selecting building material bricks, clicking next, and validating the page we land on
    cy.get('[data-testid="bricks"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22').click()
    cy.get('.MuiButton-label').click()

    cy.url().should('include', '/water-proximity')

    //selecting no, clicking next, and validating the page we land on. 
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

    // this should fail as 11111 is not a valid zip code 
  })

  it('Fail quote process at zip code page - not 5 digits', () => {
    cy.visit('https://sure-qa-challenge.vercel.app/')

     //entering an invalid zip code, seeing the invalid zip code text, pressing get a quote, seeing the text turns red
     cy.get('.MuiInputBase-input').click()
     .type('111')

     cy.get('.MuiFormHelperText-root').should('have.text', "Invalid zip code")

     cy.get('.MuiButton-label').click()

     cy.get('p.MuiFormHelperText-root.Mui-error').should('have.css', 'color', 'rgb(244, 67, 54)')
  })
})