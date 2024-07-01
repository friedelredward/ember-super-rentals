import JSONAPISerializer from '@ember-data/serializer/json-api';

/**does nothing since our response is JSON:API compliant,
 *  but we need it  for the adapter
 * */
export default class ApplicationSerializer extends JSONAPISerializer {}
