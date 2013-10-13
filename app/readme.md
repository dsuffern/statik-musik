ANGULAR.JS NOTES AND HELPFUL REMINDERS
============================================================
Very Basics 
------------
* Properties and Methods
* Properties are values associated with objects.
* Methods are actions that objects can perform.
* E is for ELEMENT
* A is for ATTRIBUTE
* C is for CLASS
* Binding involves two way communication, with each updating the other. Expressions need to be requested and called to respond.

- Models - 
Are JavaScript objects that represent the data your application can access. Models are also used to represent the application's current state.
 
- Views -
Play two important roles. First, they are responsible for presenting the data from your models to the user in a visual and useful format. 
Second, they intercept generic user interactions–including clicks and option list selections–and translate them into application-specific actions. 
Views in AngularJS are defined declaratively using HTML and CSS.

- Controllers -
Define the actual behavior of your application (also called "application logic") and play a key role in connecting the right models to the right views.

- Services -
Secialized objects that perform work on behalf of other objects. 
Services have many uses, from fetching remote data to providing an implementation of a useful algorithm. 
Services are intended to be highly reusable and are designed to be swapped easily with other similar services.


Two Way Databinding -
-----------------------
* Binding a DOM value to a model in a controller scope makes it truly linked to the scope variable. 
You probably know this from the docs and demos, but I just can’t help mentioning it. 
It’s one of the huge “wow” moments in the first impressions you get from Angular.

*DOM is not the model, Keep state out of the DOM. The DOM should only visually reflect the state of your app.

*This creates a level of separation between declaritive markup and imperative functions. 
Which, is a more productive way to write an app.


Anatomy of a Directive - 
-------------------------
Directives encapsulate templates and code in reusable components easily. They contain the link, controller and the directive definition object.

** Link **
Combines the directives with a scope and produce a live view. Any changes in the scope model are reflected in the view, 
and any user interactions with the view are reflected in the scope model. This makes the scope model the single source of truth.

** Controller **

** Directive Definition Object **

myModule.directive('sampleDirective',  function() {
    var linker = function(scope, element, attrs) {
        // FASHION/DESIGN GOES HERE 
    }
    var controller = function(scope, element, attrs) {
        // FUNCTIONALITY GOES HERE
    }
    
    // DIRECTIVE DEFINITION OBJECT
    return {
        restrict: 'A',
        link: linker,
        controller: controller
    }
})

To sum up key features of AngularJS :
----------------------------------------------
Templates : Your templates lives right in the DOM. Forget mustache, handlebars, hogan… They get compiled into views.
Two-way data-binding : Your javascript data automagically updates your DOM and vice-versa.
Routing : Define routes, associate templates and controller in just a few lines.
Forms : Many helpers to help dealing with forms, one of the worst webdevs nightmare.
Directives : Encapsulates templates and code in reusable components easily.
Testability : AngularJS was designed in a way your web app can be fully testable.
Animation : Easily animate elements and views.




scope - the glue between the view and the controller
directives - extend HTML vocabulary
filters - format the data in user locale
injector - assembles your application
module - configures the injector
$ - angular namespace




While the example above is simple, it will not scale to large applications. Instead we recommend that you break your application to multiple modules like this:

A service module, for service declaration
A directive module, for directive declaration
A filter module, for filter declaration
And an application level module which depends on the above modules, and which has initialization code.


What are Scopes?
scope is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. Scopes can watch expressions and propagate events.

Scope characteristics
Scopes provide APIs ($watch) to observe model mutations.

Scopes provide APIs ($apply) to propagate any model changes through the system into the view from outside of the "Angular realm" (controllers, services, Angular event handlers).

Scopes can be nested to isolate application components while providing access to shared model properties. A scope (prototypically) inherits properties from its parent scope.

Scopes provide context against which expressions are evaluated. For example {{username}} expression is meaningless, unless it is evaluated against a specific scope which defines the username property.

Scope as Data-Model
Scope is the glue between application controller and the view. During the template linking phase the directives set up $watch expressions on the scope. The $watch allows the directives to be notified of property changes, which allows the directive to render the updated value to the DOM.

Both controllers and directives have reference to the scope, but not to each other. This arrangement isolates the controller from the directive as well as from DOM. This is an important point since it makes the controllers view agnostic, which greatly improves the testing story of the applications.