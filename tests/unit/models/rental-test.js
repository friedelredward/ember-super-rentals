import { setupTest } from 'ember-super-rentals/tests/helpers';
import { module, test } from 'qunit';
/**
 * This model test is also known as a unit test.
 * Unlike any of the other tests that we've written thus far,
 * this test doesn't actually render anything.
 * It just instantiates the rental model object and
 * tests the model object directly,
 *  manipulating its attributes and asserting their value.

It is worth pointing out that EmberData provides a store service,
 also known as the EmberData store.
 In our test, we used the this.owner.lookup('service:store') API
 to get access to the EmberData store.
 The store provides a createRecord method to instantiate
 our model object for us. To make this store service available,
  we must add the following file:
export { default } from 'ember-data/store';

 */
module('Unit | Model | rental', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it has the right type', function (assert) {
    const store = this.owner.lookup('service:store');
    let rental = store.createRecord('rental', {
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: 'Estate',
      bedrooms: 15,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description:
        'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
    });

    assert.strictEqual(rental.type, 'Standalone');

    rental.category = 'Condo';
    assert.strictEqual(rental.type, 'Community');

    rental.category = 'Townhouse';
    assert.strictEqual(rental.type, 'Community');

    rental.category = 'Apartment';
    assert.strictEqual(rental.type, 'Community');

    rental.category = 'Estate';
    assert.strictEqual(rental.type, 'Standalone');
  });
});
