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

