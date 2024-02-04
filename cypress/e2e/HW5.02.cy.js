describe("Domashka 5.02", () => {
  let testData = [
    {
      emailSelector: "#inputEmail1",
      emailInputValue: "d.vader@starwars.com",
      passwordSelector: "#inputPassword2",
      passwordInputValue: "DarT4S1@i0u$",
      radioSelector: "Option 1",
      buttonSelector: "Sign in",
    },
    {
      emailSelector: "#inputEmail1",
      emailInputValue: "l.skywalker@starwars.com",
      passwordSelector: "#inputPassword2",
      passwordInputValue: "L1g4tSaber",
      radioSelector: "Option 2",
      buttonSelector: "Sign in",
    },
  ];

  testData.forEach((testData) => {
    it("Test the Grid form", () => {
      cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");

      cy.get('[alt="Material Dark Theme"]').click();
  
      cy.contains("Forms").click();
      cy.get('[title="Form Layouts"]').click();
      cy.wait(1000);
      cy.url().should("include", "/forms/layouts");

      cy.get(testData.emailSelector).type(`${testData.emailInputValue}`);
      cy.get(testData.passwordSelector).type(`${testData.passwordInputValue}`);
      cy.contains(`${testData.radioSelector}`).click();
      cy.get('[status="primary"]').contains(`${testData.buttonSelector}`).click();
    });
  });
});