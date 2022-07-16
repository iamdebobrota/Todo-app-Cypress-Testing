
describe("testing todo app", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3001/");
    })
    it("visit", ()=>{
        cy.intercept("GET","http://localhost:3001/");

        // cy.focused().should("id", "new-todo");
        cy.get("[data-testid=todo-input-class]").type("hello")
    })

    it("should add element to list", ()=>{
        cy.visit("http://localhost:3001/");

let value="Hello There";
cy.get("[data-testid=todo-input-class]").type(value)


        cy.get("[data-testid=todo-btn]").click();

        cy.get("[data-testid=todo-value]").eq(-1).should("contain", value)
        cy.get("[data-testid=todo-checkbox]").eq(-1).should("not.be.checked")
   
   
   
    })

    it("it should post req", ()=>{
        let value= "Debu";
        cy.intercept("POST", "http://localhost:4004/todos", {
            fixture: "postTodo.json",
        }).as("postTodo");
        
        cy.get()
    })
})