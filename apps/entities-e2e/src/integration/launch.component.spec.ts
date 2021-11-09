describe('entities', () => {
  beforeEach(() => cy.visit('/iframe.html?id=launchcomponent--primary'));
  it('should render the component', () => {
    cy.get('spacex-launch').should('exist');
  });
});