it("should show beers on page load",() => {
    cy.visit("http://localhost:3000")
    cy.get("[data-cy=beer-card]").should("have.length",30)

})

it("should show one beer when searching for buzz",() => {
    cy.visit("http://localhost:3000")
    cy.get("[data-cy=beer_name-search]").type("buzz")
    cy.get("[data-cy=beer-card]").should("exist")
    cy.get("[data-cy=beer-card]").should("have.length",1)
})

