

describe("App Test", () => {

    // OK
    it("Test Btn panier redirect ", () => {
        cy.visit("http://localhost:3000");
        cy.contains("Aller sur panier").click();
        cy.location('pathname').should('eq', '/')

    });

    it("Test title ", () => {
        cy.visit("http://localhost:3000");
        // cy.get(".cardSize").click();
        cy.title('Nolwenn');
    });

    it('click sur la card de la figurine avec id 1', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid=1]').click();
    });

    it("ajout au panier", () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid=1]').click();
        cy.get('[data-testid=input-add-to-cart]').type('3');
        cy.get('[data-testid=button-add]').click();
        cy.contains("Enregistré dans le panier");
    });

    it("Ajouter un élement au panier puis aller dans le panier", () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid=1]').click();
        cy.get('[data-testid=input-add-to-cart]').type('3');
        cy.get('[data-testid=button-add]').click();
        cy.get('.go-back').click();
        cy.get('.go-cart').click();
        // cy.get('[data-testid=1]').click();
    });

    it("Mot figurine sur le détail produit ", () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid=2]').click();
        cy.contains('Figurine');
    });



});
