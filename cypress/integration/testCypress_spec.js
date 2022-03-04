describe("App Test", () => {

    // OK
    it("Test Btn panier redirect ", () => {
        cy.visit("http://localhost:3000");
        cy.contains("Aller sur panier").click();
        cy.location('pathname').should('eq', '/')

    });

    it("Test click cards list ", () => {
        cy.visit("http://localhost:3000");
        // cy.get(".cardSize").click();
        cy.title('Nolwenn')
    });

    // it("Test addProduct ", () => {
    //     cy.visit("http://localhost:3000");
    //     cy.contains("Ajouter au panier").click();
    //     cy.get(".addProduct").contains("2");

    // });

    // it("ajout au panier", () => {
    //     cy.visit("http://localhost:3000");
    //     // cy.get("Ajouter au panier").click();
    //     cy.get(".addProduct").first();
    //     cy.find("button");
    //     cy.click();
    // });
});
