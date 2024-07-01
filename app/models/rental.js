/** ember generate model rental */
import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

/**
 * We used the @attr decorator to declare the attributes of a rental property.
 *  These attributes correspond directly to the ``attributes`` data
 * we expect the server to provide in its responses:
 * {
  "data": {
    "type": "rentals",
    "id": "grand-old-mansion",
    "attributes": {
      "title": "Grand Old Mansion",
      "owner": "Veruca Salt",
      "city": "San Francisco",
      "location": {
        "lat": 37.7749,
        "lng": -122.4194
      },
      "category": "Estate",
      "bedrooms": 15,
      "image": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
      "description": "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
    }
  }
}
  We can access these attributes for an instance of RentalModel
   using standard dot notation, such as model.title or model.location.lat.
   In addition to the attributes we declared here,
   there will always be an implicit id attribute as well,
   which is used to uniquely identify the model object
   and can be accessed using model.id
 */
export default class RentalModel extends Model {
  /**
   * Attributes declared with the @attr decorator
   * work with the auto-track feature
   */
  @attr title;
  @attr owner;
  @attr city;
  @attr location;
  @attr category;
  @attr image;
  @attr bedrooms;
  @attr description;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
