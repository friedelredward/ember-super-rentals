import EmberRouter from '@ember/routing/router';
import config from 'ember-super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  /**Here, we added the contact route,
   * but explicitly specified a path for the route.
   * This allows us to keep the legacy URL, but use the new,
   * shorter name for the route, as well as the template filename. */
  this.route('contact', { path: '/getting-in-touch' });
  this.route('rental', { path: '/rentals/:rental_id' }); //dynamic route
  this.route('examples');
});
