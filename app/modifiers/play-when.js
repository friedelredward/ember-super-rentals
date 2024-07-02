import { modifier } from 'ember-modifier';
/**
 * The modifier that we made for the audio player
 *  component can be reused on any element
 * that implements play and pause methods.
 *  In particular, we can reuse the modifier on any HTMLMediaElement,
 * which includes audio and video elements.
 */
export default modifier((element, [isPlaying]) => {
  if (isPlaying) {
    alert("playing element!! with modifier");
    element.play();
  } else {
    element.pause();
  }
});
