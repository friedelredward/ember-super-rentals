# ember-super-rentals tutorial 
https://guides.emberjs.com/release/tutorial/part-1/orientation/

- Using Ember CLI
- Navigating the file and folder structure of an Ember app
- Building and linking between pages
- Templates and components
- Automated testing
- Working with server data
- The second part of the tutorial builds upon these concepts and takes things to the next level.
-----------------------------
- generate acceptance-test with qunit(integration)
´´´bash
npx ember generate acceptance-test super-rentals

npx ember t -s

npx ember generate component-test jumbo
´´´
- `npx ember generate component rental`-> namespaced component(organizing)
`npx ember generate component rental/image`: <Rental::Image>
-  class for component's behavior: `npx ember generate component-class rental/image`.
> @glimmer/component, or Glimmer component, is one of the several component classes available to use. They are a great starting point whenever you want to add behavior to your components. In this tutorial, we will be using Glimmer components exclusively.
> In general, Glimmer components should be used whenever possible. However, you may also see @ember/components, or classic components, used in older apps. You can tell them apart by looking at their import path (which is helpful for looking up the respective documentation, as they have different and incompatible APIs).

- `ember generate component map --with-component-class` to generate with class
- or `ember g component map -gc`

> check this.args magic and remember getters are @tracked === **AUTO-TRACK**

Completed ATM:
```
Installing Ember CLI
Creating a new Ember app with Ember CLI
Starting and stopping the development server
Editing files and live reload
Working with HTML, CSS and assets in an Ember app
Defining routes
Using route templates
Customizing URLs
Linking pages with the <LinkTo> component
Passing arguments and attributes to components
The purpose of automated testing
Writing acceptance tests
Using generators in Ember CLI
Testing with the QUnit test framework
Working with Ember's test helpers
Practicing the testing workflow
Extracting markup into components
Invoking components
Passing content to components
Yielding content with the {{yield}} keyword
Refactoring existing code
Writing component tests
Using the application template and {{outlet}}s
Generating components
Organizing code with namespaced components
Forwarding HTML attributes with ...attributes
Determining the appropriate amount of test coverage
Adding behavior to components with classes
Accessing instance states from templates
Managing state with tracked properties
Using conditionals syntaxes in templates
Responding to user interaction with actions
Invoking element modifiers
Testing user interactions
Managing application-level configurations
Parameterizing components with arguments
Accessing component arguments
Interpolating values in templates
Overriding HTML attributes in ...attributes
Refactoring with getters and auto-track
Getting JavaScript values into the test context
Working with route files
Returning local data from the model hook
Accessing route models from templates
Mocking server data with static JSON files
Fetching remote data from the model hook
Adapting server data
Loops and local variables in templates with {{#each}}
```
-------------------------------------
## emberData, adapters, serializers, route's model handlers
-  to create test for model `ember generate model-test rental`
- we have to teach EmberData to fetch data from the correct location.
EmberData uses an adapter and serializer architecture.Adapters deal with how and where and serializers are in charge of converting the data returned.default **JSON:API**
- moar about models and relationships(https://guides.emberjs.com/release/models/)

------------------------------
## Provider components pattern
- The provider component pattern
- Using block parameters when invoking components
- Yielding data to caller components
--------------------------------------
## Test cheatsheet

| type        | use                              | setup Func                   | example                                           |
|-------------|----------------------------------|------------------------------|---------------------------------------------------|
| acceptance  | app wise. visit(/)...            | setupApplicationTest(hooks); | visiting /                                        |
| integration | components testing in isolation. | setupRenderingTest (hooks);  | it renders all given rental properties by default |
| unittest    | models                           | ``setupTest (hooks);``       | it has the right type                             |

## Conditional content
-  There are 2 styles of if: block and inline.

```ember
{{#if this.thingIsTrue}}
  Content for the block form of "if"
{{/if}}

<div class={{if this.thingIsTrue "value-if-true" "value-if-false"}}>
  This div used the inline "if" to calculate the class to use.
</div>
```
- **block content** aka advanced `{{yield}}` :https://guides.emberjs.com/v5.8.0/components/block-content/
---------------------------
## helpers : template functions(like pipes almost) 
- https://api.emberjs.com/ember/4.5.0/classes/Ember.Templates.helpers/

We define global helper functions in the **app/helpers** folder. they will be available to use inside all templates.
- templating + nice global helpers: https://guides.emberjs.com/v5.8.0/components/helper-functions/
