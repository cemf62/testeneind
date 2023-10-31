describe('Maximale Hypotheek Calculator', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  
  it('toont de maximale lening zonder studischuld', () => {
    cy.get('#jaarinkomen').type('100000');
    cy.get('#partnerInkomen').type('50000');
    cy.get('#rentevastePeriode').select('5');
    cy.get('#heeftStudieschuld').select('false');
    
    cy.get('#berekenButton').click();
    
    cy.get('#maxTeLenenBedrag').should('contain', '637500');
    cy.get('#maandelijkseRente').should('contain', '1593.75');
    cy.get('#maandelijkseAflossing').should('contain', '1770.83'); 
    cy.get('#totaleMaandbedrag').should('contain', '3364.58'); 
    cy.get('#totaalBetaaldNa30Jaar').should('contain', '1211250.00'); 
  });
  
  it('toont de maximale lening met studischuld', () => {
    cy.get('#jaarinkomen').type('100000');
    cy.get('#partnerInkomen').type('50000');
    cy.get('#rentevastePeriode').select('5');
    cy.get('#heeftStudieschuld').select('true');
    
    cy.get('#berekenButton').click();
    
    cy.get('#maxTeLenenBedrag').should('contain', '478125');
    cy.get('#maandelijkseRente').should('contain', '1195.31');
    cy.get('#maandelijkseAflossing').should('contain', '1328.13');
    cy.get('#totaleMaandbedrag').should('contain', '2523.44');
    cy.get('#totaalBetaaldNa30Jaar').should('contain', '908437.50');
  });
});
