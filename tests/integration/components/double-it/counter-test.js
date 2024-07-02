import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | double-it/counter', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DoubleIt::Counter />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DoubleIt::Counter>
        template block text
      </DoubleIt::Counter>
    `);

    assert.dom().hasText('template block text');
  });
});
