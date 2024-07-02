import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DoubleItCounterComponent extends Component {
  @tracked count = 0;
  // @tracked multiple = 1;
  /**!!!IMPortant
   * You might have been tempted to make total a @tracked property
   * and update it in the double and change actions.
   *  But this kind of "push-based" approach creates a lot of bugs.
   *  What happens if you create a new way to update
   * multiple or amount properties and forget to update total at the same time?
When you use getters and functions to derive the state you need,
 you're taking advantage of the benefits of declarative programming.
 In declarative programming,
 you describe what you need, not how to get it,
 which reduces the number of places where you can make mistakes.

Making a total getter that computed the total
 from the amount and multiple properties
  was more declarative than setting total
   in all of the places that could have affected it.
   If you had changed total directly,
    you would have taken the "imperative" approach).
   */
  /** **Remember** a getter will always **be computed** wen called!! */
  get total() {
    // return this.count * this.multiple; now it comes as args!!
    return this.count * this.args.multiple;
  }

  @action change(amount) {
    this.count = this.count + amount;
  }

  /**
   * Important Callback pattern!!
   * This calls the parrent passed function.
   */
  @action double() {
    this.args.updateMultiple(this.args.multiple * 2);
  }
}
