# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

ng g c component_name
ng g c component_name --spec false

///////
data binding = communication between component and view
one way binding
two bind bind

differ betw string interpolation vs propety bind
{{}} takes only string value
[] takes any value

one way binding
string interpolation{{data}}
property binding [property]='data'
event bindig (event)='expression'

two way
both direction binding
[(ngModel)]='data'

/////////
see folder in side data binding
component-> view
iterpolation
property binding
class & style binind

view -> component
event binding

---
template referance variable(local refe valiable) 


-------------
two way data binding
component <--> view

-----------

Directive ---angular instruction  for changing behaviour
1)components(directive with oew component) 
--component

2)structual(manipulating the dom element)
ngIf,ngFor,ngSwitch

3Attribute(change the look and behavior of the dom)
ngStyle,ngClass



-------------------------------------------------

push() & splice()

-------------------------------
routings -page navigation
router redirection
nested route