import JSONAPIAdapter from '@ember-data/adapter/json-api';

/**
 * Our resource URLs have an extra /api namespace prefix.
Our resource URLs have a .json extension at the end.
 */
export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
