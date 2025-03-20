/// <reference types="cypress" />

import { selectByTestId } from 'cypress/helpers/selectByTestId'
import { AuthResponse } from '../../src/features/AuthByEmail/model/types/response/AuthResponse'

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('login', (email: string = 't1@t.ru', password: string = '12345678') => {
    cy.log(`Logging in as ${email}`)

    cy.request({
        method: 'POST',
        url: `http://localhost:8082/api/auth/signInWithPassword`,
        body: {
            email,
            password,
        },
    }).then((response) => {
        window.localStorage.setItem('token', response.body.accessToken)
        return response.body
    })
})

const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId))
}

Cypress.Commands.add('getByTestId', getByTestId)

Cypress.Commands.add('resetProfile', (userId: string) => {
    cy.request({
        method: 'PATCH',
        url: `http://localhost:8082/api/user/${userId}/update`,
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        body: {
            firstName: 'user1',
            lastName: 'test',
            email: 't1@t.ru',
            gender: 'male',
            birthDay: '2000-02-12',
            city: 'Архангельск',
        },
    })
})

declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<AuthResponse>
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
            resetProfile(userId: string): Chainable<void>
        }
    }
}

export {}
