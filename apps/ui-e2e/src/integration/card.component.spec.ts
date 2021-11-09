describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary'));
  it('should render the component', () => {
    cy.get('spacex-card').should('exist');
  });
});