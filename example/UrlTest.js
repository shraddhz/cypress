describe('My Frist Try', function()
{
    it('My Frist Test', function()
    {
        cy.visit("https://truvadour:BoldnessBeMyFriend@marketplace-acceptance.vts.com/search/new_york_city");
        cy.get("#listing-cards-container").should('have.length',1)
        
    })
})