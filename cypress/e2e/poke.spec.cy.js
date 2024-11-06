describe('Prueba e2e de React PokeAPI', () => {
  it('Carga la pagina y busca un pokemon', () => {
    cy.visit('http://localhost:3000');

    cy.wait(9000);

    cy.get('input[placeholder="Search Pokemon..."]').type('p');
    cy.wait(2000);
    cy.get('input[placeholder="Search Pokemon..."]').type('i');
    cy.wait(2000);
    cy.get('input[placeholder="Search Pokemon..."]').type('k');
    cy.wait(2000);
    cy.get('input[placeholder="Search Pokemon..."]').type('a');

  })
})