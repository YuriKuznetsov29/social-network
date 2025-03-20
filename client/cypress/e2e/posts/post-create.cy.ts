describe('post create', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
    })

    it('user create post', () => {
        cy.getByTestId('post-input').clear().type('test post')
        cy.getByTestId('post-input').should('have.text', 'test post')
        cy.getByTestId('send').click()

        cy.get('[data-testid="post-text"]:first').should('have.text', 'test post')
    })

    it('user write comment', () => {
        cy.get('[data-testid="post"]:first')
            .find('[data-testid="comment-btn"]')
            .should('exist')
            .click()

        cy.get('[data-testid="post"]:first')
            .find('[data-testid="comment-input"]')
            .should('exist')
            .clear()
            .type('test comment')

        cy.get('[data-testid="post"]:first').find('[data-testid="send-comment-btn"]').click()

        cy.get('[data-testid="comment-text"]:first').should('have.text', 'test comment')
    })

    it('user remove post', () => {
        cy.get('[data-testid="post-btn"]:first').click()
        cy.get('[data-testid="remove-post"]:first').should('be.visible').click()
    })
})
