/// <reference types="cypress" />

describe('agiTeste', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('validar que ao clicar no botão, o campo de digitação é exibido', () => {
        cy.pesquisar()            
    })
    
    it('garantir que o que está sendo digitado é o que será exibido no resultado', () => {
        cy.pesquisar()
            .clear()
                .should('have.value', '')
            .type('aaa')
                .should('have.value', 'aaa')
        cy.get('.desktop-search > .search-form > .search-submit')
            .click()
        cy.get('.archive-title')
            .should('have.text', 'Resultados da busca por: aaa')
    })

    it('validar mensagem quando não é encontrado nenhum resultado', () => {
        cy.pesquisar()
            .clear()
                .should('have.value', '')
            .type('dolar')
                .should('have.value', 'dolar')
        cy.get('.desktop-search > .search-form > .search-submit')
            .click()
        cy.contains('h1', 'Nenhum resultado')
            .should('have.text', 'Nenhum resultado')
    })
    
    it('executar a pesquisa apertando "Enter"', () => {
        cy.pesquisar()
            .clear()
                .should('have.value', '')
            .type('teste{Enter}')
        cy.get('.archive-title')
            .should('have.text', 'Resultados da busca por: teste')
    })
})