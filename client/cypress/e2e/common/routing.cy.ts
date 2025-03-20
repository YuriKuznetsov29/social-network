import { selectByTestId } from 'cypress/helpers/selectByTestId'

describe('not authorized', () => {
    it('route to login form', () => {
        cy.visit('/')
        cy.get('[data-testid=login-form]').should('exist')
    })
    it('route to signUp form', () => {
        cy.visit('/signUp')
        cy.get('[data-testid=signUp-form]').should('exist')
    })
    it('not found page', () => {
        cy.visit('/signUsdap')
        cy.get(selectByTestId('not-found')).should('exist')
    })
})

describe('authorized', () => {
    beforeEach(() => {
        cy.login()
    })

    it('not found page', () => {
        cy.visit('/signUsdap')
        cy.get(selectByTestId('not-found')).should('exist')
    })

    it('route to profile', () => {
        cy.visit('/profile')
        cy.get(selectByTestId('profile')).should('exist')
    })

    it('route to messenger', () => {
        cy.visit('/messenger')
        cy.get(selectByTestId('dialogs')).should('exist')
    })

    it('route to friends', () => {
        cy.visit('/friends')
        cy.get(selectByTestId('friends')).should('exist')
    })

    it('route to news', () => {
        cy.visit('/news')
        cy.get(selectByTestId('news')).should('exist')
    })
})
