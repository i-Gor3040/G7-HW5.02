/// <reference types="Cypress" />

describe("Domashka 7.02", () => {
 let testData = [
        {
        titleInput:'QA Light',
        toastTitleSelector: '[class="title subtitle"]',
        contentSelector: '[name="content"]',
        contentInput: 'Cypress',
        toastContentSelector:'.message',
        toastIconSelector: '.cdk-overlay-pane g[data-name="Layer 2"] > g[data-name]',
        toastTypeSelector: '[ng-reflect-value="info"]',
        toastPosition: '[ng-reflect-value="top-right"]',

        expectedResult: {
          
            toastIconAttr: 'data-name',
            toastIconValue: 'question-mark',
            toastTitle: 'QA Light',
            toastContent: 'Cypress',
            toastColor: 'rgb(4, 149, 238)',
            toastStyle: "justify-content: flex-end; align-items: flex-start;"
            }
        },

        {
          titleInput:'Grove Street',
          toastTitleSelector: '[class="title subtitle"]',
          contentSelector: '[name="content"]',
          contentInput: '4Life',
          toastContentSelector:'.message',
          toastIconSelector: '.cdk-overlay-pane g[data-name="Layer 2"] > g[data-name]',
          toastTypeSelector: '[ng-reflect-value="primary"]',
          toastPosition: '[ng-reflect-value="top-left"]',
  
          expectedResult: {
            
              toastIconAttr: 'data-name',
              toastIconValue: 'email',
              toastTitle: 'Grove Street',
              toastContent: '4Life',
              toastColor: 'rgb(233, 29, 99)',
              toastStyle: "justify-content: flex-start; align-items: flex-start;"
              }
          }, 

          {
            titleInput:'No Pain',
            toastTitleSelector: '[class="title subtitle"]',
            contentSelector: '[name="content"]',
            contentInput: 'No Gain',
            toastContentSelector:'.message',
            toastIconSelector: '.cdk-overlay-pane g[data-name="Layer 2"] > g[data-name]',
            toastTypeSelector: '[ng-reflect-value="success"]',
            toastPosition: '[ng-reflect-value="bottom-left"]',
    
            expectedResult: {
              
                toastIconAttr: 'data-name',
                toastIconValue: 'checkmark',
                toastTitle: 'No Pain',
                toastContent: 'No Gain',
                toastColor: 'rgb(96, 175, 32)',
                toastStyle: "justify-content: flex-start; align-items: flex-end;"
                }
            }, 

            {
              titleInput:'Patience you must have',
              toastTitleSelector: '[class="title subtitle"]',
              contentSelector: '[name="content"]',
              contentInput: 'my young Padawan',
              toastContentSelector:'.message',
              toastIconSelector: '.cdk-overlay-pane g[data-name="Layer 2"] > g[data-name]',
              toastTypeSelector: '[ng-reflect-value="warning"]',
              toastPosition: '[ng-reflect-value="bottom-right"]',
      
              expectedResult: {
                
                  toastIconAttr: 'data-name',
                  toastIconValue: 'alert-triangle',
                  toastTitle: 'Patience you must have',
                  toastContent: 'my young Padawan',
                  toastColor: 'rgb(255, 159, 5)',
                  toastStyle: "justify-content: flex-end; align-items: flex-end;"
                  }
              }, 
    ];
  
    testData.forEach((testData) => {
      it("Parameterized test", () => {
        cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");
  
        cy.get('[alt="Material Dark Theme"]').click();
    
        cy.get('[title="Modal \\& Overlays"]').click();
        cy.get('[title="Toastr"]').click();
        cy.wait(3000);
        cy.url().should("include", "/modal-overlays/toastr");

        cy.get('.form-group .select-button').first().click();
        cy.get(testData.toastPosition).click();

        cy.get('[name="title"]').clear().type(testData.titleInput);

        cy.get('[name="content"]').clear().type(testData.contentInput);

        cy.get('.form-group .select-button').last().click();
        cy.get(testData.toastTypeSelector).click();

        cy.contains('button','Show toast').click();

        cy.get('.toastr-overlay-container').then(($el) => {
          expect($el).to.have.attr('style', testData.expectedResult.toastStyle);
        });
        cy.get('nb-toast').then(($el) => {
          expect($el).to.have.css('background-color', testData.expectedResult.toastColor);
        })
        cy.get(testData.toastIconSelector).then(($el) => {
          expect($el).to.have.attr(testData.expectedResult.toastIconAttr, testData.expectedResult.toastIconValue);
        })  
        cy.get(testData.toastContentSelector).then(($el) => {
          expect($el).to.have.text(testData.expectedResult.toastContent);
        })
        cy.get(testData.toastTitleSelector).then(($el) => {
          expect($el).to.include.text(testData.expectedResult.toastTitle);
        })
      });
    });
  });
  