import { getTitle, getPage } from '../support/app.po';

describe('launches', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');
    // Function helper example, see `../support/app.po.ts` file
    getTitle().contains('SpaceX launches');
  });

  it('should display launch cards', () => {
    getPage()
      .get('spacex-launch-card')
      .should('have.length', 10);
  });

  it('should open detailed view', () => {
    getPage()
      .get('spacex-launch-card')
      .first()
      .click();
    
    getPage()
      .get('spacex-launch-card-detailed')
      .should('exist');
  });

  it('should display rocket and crew', () => {
    getPage()
      .get('spacex-launch-card')
      .first()
      .click();
    
    getPage()
      .get('spacex-rocket-card')
      .should('exist');
    
    getPage()
      .get('spacex-crew-card')
      .should('exist');
  });
});
