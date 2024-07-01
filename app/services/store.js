/**
 * It is worth pointing out that EmberData provides a store service,
 *  also known as the EmberData store.
 *  In our test, we used the this.owner.lookup('service:store') API
 *  to get access to the EmberData store.
 * The store provides a createRecord method to instantiate
 * our model object for us. To make this store service available:
 */
export { default } from 'ember-data/store';
