describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=imagecomponent--primary'));
  it('should render the component', () => {
    cy.get('spacex-image').should('exist');
  });
});