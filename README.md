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
----------------------------------------

## Service injection for conditionally registered services
- (they might be not available when intatiating component for example)
- getOwner/setOwner injecting app context so
app service can be injected
```js
  @service('shopping-cart') cart;
  constructor(context) {
    setOwner(this, getOwner(context));
  }
  function addToCart() {
    this.cart.add(this);
  }
```

<details>
  <summary>Service Injection</summary>
  <p>
    In summary, setOwner ensures that the Item class has access to the shopping cart service, even if the service is conditionally registered. 😊
  </p>
  
  ```js

  import { service } from '@ember/service';
import { getOwner, setOwner } from '@ember/application';

class Item {
  @service('shopping-cart') cart;

  constructor(context) {
    setOwner(this, getOwner(context));
  }

  function addToCart() {
    this.cart.add(this);
  }
}

// On any framework object...
let item = new Item(this);
item.addToCart();
  ```
Sometimes a service may not exist (e.g., if it’s conditionally registered by an initializer).
``setOwner`` associates the owner (usually **the application**) with the current instance.::**gains access to services and other container-managed objects**.
In your example, this.cart (the shopping cart service) is injected into the Item class using setOwner.
Unlike traditional injection, which throws an error if the service doesn’t exist, setOwner allows more flexibility.
It lets you inject services even when they might not be available during component instantiation.
This approach is especially useful for cases where services are conditionally registered.
</details>

--------------------------------
## Component Must!s [here](https://guides.emberjs.com/v5.8.0/in-depth-topics/patterns-for-components/)
- Argument Defaults 
```js
  get icon() {    return this.args.icon ?? 'icon-info';  }
  get tooltipClass() {return this.args.tooltipClass + ' tooltip';  }
```
- Attribute Ordering 
The positioning of ...attributes **matters** Attributes that come before ...attributes can be overridden, but attributes that come **after cannot**.
class gets merged.
- Contextual Components : ``{{component 'blog-post'}}`` is the same as using`` <BlogPost />``. Please check : https://guides.emberjs.com/v5.8.0/in-depth-topics/patterns-for-components/#toc_contextual-components
- patterns for actions 
[here](https://guides.emberjs.com/v5.8.0/in-depth-topics/patterns-for-actions/)
ej: delete trigered from child component confirmation
```js
<ButtonWithConfirmation
  @text="Click OK to delete your account."
  @onConfirm={{this.deleteAccount}}
/>//where action is triggered in ButtonWithConfirmation:
/**
 * In our ButtonWithConfirmation component we want to leave the confirmation modal open until we know that the operation has completed successfully. This is accomplished by expecting a promise to be returned from onConfirm.*/
  @action async submitConfirm() {
    if (this.args.onConfirm) {
      await this.args.onConfirm();
    }

    this.isConfirming = false;
  }
```
- arguments passing [here](https://guides.emberjs.com/v5.8.0/in-depth-topics/patterns-for-actions/#toc_passing-arguments)
- invoke service from template:
```hbs
<ButtonWithConfirmation
  @text="Click to send your message."
  @onConfirm={{fn this.messaging.sendMessage "info"}}
as |confirmValue|>
  <Input @value={{confirmValue}} />
</ButtonWithConfirmation>
```
- passing up and down event handling :[user progfile example](https://guides.emberjs.com/v5.8.0/in-depth-topics/patterns-for-actions/#toc_calling-actions-up-multiple-component-layers)
