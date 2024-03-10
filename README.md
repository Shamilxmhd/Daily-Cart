            ANGULAR -FRONT END
    -----------------------------------

    BASIC COMMANDS
    ---------------------

 1. Project creation : ng new app-name
 2. project run : ng s -o
 3. component creation : ng g c component-name
 4. service create : ng g s service-folder/service-name
 5. routing enabled user module creation : ng g m users-module --route users --users-module app.module
 6. creating pipe : ng g p pipe-folder/pipe-name
 7. generating pdf with table : npm i jspdf-autotable jspdf
 8. to add pagination : npm i ngx-pagination
 9. Install Angular Material : ng add @angular/material
 10. Install highcharts : npm install highcharts --save and npm install highcharts-angular --save
 11. Angular guards : ng g g guard-folder/guard

 
     BASIC CONCEPTS
---------------------

1. Module : root module - AppModule,used to hold components
2. Components : parts of UI , combination of ts file, html file, css file, Root component - AppComponent
3. Set up path for component - use routing-module.ts file
    - use Routes array, specify path of each component as an object in the array
    - router-outlet selector in the root component - used to switch component template according to the user requested path
4. Data Binding : Data sharing within a component
    - One way binding
       - ts(component) to html(view/template) 
           - String Interpolation : use {{class property}}
           - Property Binding : [attribute] 
       - html to ts
           - event Binding : (event-name) = "function-call"
           - event Binding using $event : (event-name) = "function-call($event)"
           - event binding using template reference variable : #variable-name
    - Two way binding : using ngModel Directive
       - Import FormsModule to Module file, then use [(ngModel)]="class-property"
5. Angular Directive : are classes that add additional behaviour to html elements
    - Prebuilt Directives
       - Component Directive : component selector used to display component template
       - ngModel Directive : used to manage form controls
       - ngForm Directive : used to manage form
       - Structural Directives : used to add/remove elements from angular application
           - *ngIf="condition" 
           - *ngFor="let array-item of array-name"
       - Attribute Directive : used to provide style to elements
           - ngClass : used to provide class of style to html elements
6. Dependency Injection : When two classes are dependent then one class can access other properties and functions
    - syntax : access-specifier variable-name:dependent-class-name
7. Angular Services : To share common logic with all component 
8. Angular Forms
    - Template driven Forms
    - Model driven Forms : Reactive Forms
       - Import ReactiveFormsModule in module file
       - Form Group : 
       - Form Array : 
       - Form Control : 
    
9. Handling Asynchronous function : RxJS Library
    - Observable : 
       - subscribe(callback/observer object) : resolves state
    - API Call : use hppt methods in httpClient class , 
       - Import HttpClentModule to your Module file
10. ActivatedRoute : Provides access to informationn about a route associated with a component
11. Angular Pipes : used to transform input to another data
12. Parent child communication
    - Input decorator : parent can share a property
    - Output decorator : child can share an event
13. Angular guards : protect route from unautherised access
14. Behaviour Subject : 