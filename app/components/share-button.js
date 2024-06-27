import Component from '@glimmer/component';
import { service } from '@ember/service';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
    /**By default, Ember infers the name of an injected service
     *  from the name of the property.
     *  If you would like the router service to be available at, say,
     *  this.emberRouter, you can specify @service('router') emberRouter;
     *  instead. @service router; is simply
     *  a shorthand for @service('router') router;. */
    @service router;

    get currentURL() {
        return new URL(this.router.currentURL, window.location.origin);
    }

    get shareURL() {
        let url = new URL(TWEET_INTENT);

        url.searchParams.set('url', this.currentURL);

        if (this.args.text) {
            url.searchParams.set('text', this.args.text);
        }

        if (this.args.hashtags) {
            url.searchParams.set('hashtags', this.args.hashtags);
        }

        if (this.args.via) {
            url.searchParams.set('via', this.args.via);
        }

        return url;
    }
}
