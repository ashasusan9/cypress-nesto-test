describe('Login Page tests ', () => {
  beforeEach(() => {
    cy.visit('/login', { timeout: 5000 });
    cy.url({ timeout: 6000 }).should('include', '/login');
  });
  
  it('Login Page rendered correctly  ',() => {
    cy.get(Login.elements.app).should('be.visible');
  })

  it('if correct username / password is provided , user is able to login ',() => {
    Login.actions.assertLoginSuccessful();
  })

  it('if incorrect username / password is provided , user receives error message ',() => {
    Login.actions.assertInvalidLogin();
  })

  it('Login Page rendered correctly for French users',() => {
    Login.actions.assertFrenchLoginComponent();
  })
})
