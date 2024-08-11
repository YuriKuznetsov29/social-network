let userId: string

describe('edit profile', () => {
    beforeEach(() => {
        cy.login().then((response) => {
            userId = response.user.userId
        })
    })

    afterEach(() => {
        cy.resetProfile(userId)
    })

    // it('load edit profile page', () => {
    //     cy.visit('changeProfile')
    //     cy.getByTestId('edit-profile').should('exist')
    // })

    it('user edit profile', () => {
        cy.visit('changeProfile')
        cy.getByTestId('firstName').clear().type('newName')
        cy.getByTestId('firstName').should('have.value', 'newName')
        cy.getByTestId('submit').click()
    })
})
