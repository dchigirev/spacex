describe('entities', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rocketcomponent--primary'));
  it('should render the component', () => {
    cy.get('spacex-rocket').should('exist');
  });
});