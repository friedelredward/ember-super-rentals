import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AudioPlayerComponent extends Component {
  @tracked isPlaying = false;

  @action  play() {
    // TODO
    this.isPlaying = true;
    console.log('is PLaying!!::', this.isPlaying);
  }

  @action pause() {
    // TODO
    this.isPlaying = false;
    console.log('is PLaying!!::', this.isPlaying);
  }
}
