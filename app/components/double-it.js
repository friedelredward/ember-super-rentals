import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DoubleItComponent extends Component {
  @tracked multiple = 1;

  /**
   * the Counter(child) calls the updateMultiple argument
   * (which we expect to be a function) with the new value for multiple,
   * and the parent component can update the multiple.
   * @param {number} newMultiple new multiple
   */
  @action updateMultiple(newMultiple) {
    this.multiple = newMultiple;
  }
}
