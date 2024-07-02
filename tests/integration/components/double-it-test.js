import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | double-it', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`<DoubleIt />`);
    assert.dom('p').exists({ count: 3 });
    assert.dom('p').hasText('0');
    // assert.dom('p').hasText('x');
    // assert.dom('p').hasText('=');
    assert.dom('button').exists({ count: 3 });
    assert.dom('button').hasText('+1');
    // assert.dom('button').hasText('-1');
    // assert.dom('button').hasText('Double It');
  });
});
