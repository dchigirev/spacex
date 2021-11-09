describe('entities', () => {
  beforeEach(() => cy.visit('/iframe.html?id=crewcomponent--primary'));
  it('should render the component', () => {
    cy.get('spacex-crew').should('exist');
  });
});