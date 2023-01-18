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

---

two way data binding
component <--> view

---

## Directive ---angular instruction for changing behaviour

1)components(directive with oew component)
--component

2)structual(manipulating the dom element)
ngIf,ngFor,ngSwitch

3Attribute(change the appereace and behavior of the dom)
ngStyle,ngClass

---

push() & splice()

---

routings -page navigation
router redirection
nested route
router.navigate

ng-content
ng-container

---

component communication
import @input or @output decorator in chlid

parent to child -> @input
child to parent -> @output

@input and Custom Property
[]=''

@output and Custom Event
()=()

---

services -> reuseable type class (store any type of data)

---

## dependancy injection

## 28 29

excersise and solution

---

## 30_http & observable

## 31_fetch data json place holder

http client
httpClient module

---

## 32 Subject and Behaviour Subject('Initial value take')

## 33 lifecycle hooks

1)constructor
2)ngOnChange (@input bind value changes every time it call)
3)ngOnInit(component intialization)
4)ngDoCheck(any chnage or action in compopent detection)
5)ngAfterConentenInit(ng content intitailze )
6)ngAfterConentenChecked(ng content inside it change )
7)ngAfterViewInit(compoent initali completely done)
8)ngAfterViewChecked(compoent and child view all done initali completely done)
9)ngOnDestroy(component destroy(dom se remove hota hai tb))

## 34 component life cycle hooks

--view about page

## 35 view Child

@ViewChild("box") box: ElementRef;
@ViewChild(Comp2Component) child: Comp2Component;
-Changechildproperty
-callchildmethod

## 36 Renderer2 & content child

-dom element modify & manipulate
-we can add text with renderer
see home comonent

## 37 ViewChild with directive

--comp2

## 38 hostlistner //

-are concept of directives
-componet has self conent template
=host element - the element that we apply our directive on is the hostment of that directive
-that host our directive so that is hostelement
=hostlistence---hanlde event on host element,

host listener with component
host listener with directive
---see product page

## 39 host bindiing

## 40 Pipes

we can use pipes to transform our output in template

## 43 custom Pipes

we can use pipes to transform our output in template
-we can send parameter in pipe
-see about page

## 44 filter pipes

-created new pipe(filter)

## 45 pure & impure pipe

pure pipe -change detection of input
impure pipe -every change detection of component

## 48 forms

-template driven form
--------- simple basic form
----------easy to start
--------Based on templated(HTML)

-reactive forms
-----Complex form with Greator control
-----We defines struture of form in ts
-------based on typescript(.ts file)

## 49 50 template driven form view child access

setValue & patchValue
--forms page

## 51 52 reeactive form

--forms page

## 53 reeactive form array

--forms page

## 54 angular forms ---custom validator error codes

--reactive foem

# 55 angular forms ---custom async validator

--reactive form

# 56 anugular form --status & value change

--set ,patch value & reset reactive form

# 57 Module understading(1)

app.module.ts

components
directives
pipes
services

# 58 feature modules (2)

--multiple split module import in main module
--when we use
-easy to manage

# 58 feature modules (3)

AppModule
|
|-product module
|-service module

# 58 shared modules (4)

Duplication declaration
(Common issue)


