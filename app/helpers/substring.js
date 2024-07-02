/**
 * @link https://guides.emberjs.com/v5.8.0/components/helper-functions/
 * @link https://api.emberjs.com/ember/4.5.0/classes/Ember.Templates.helpers/
 * We define global helper functions in the app/helpers folder.
 *  Once defined, they will be available to use
 *  inside all templates in your app.
 * @param {*} string
 * @param {*} start
 * @param {*} end
 * @returns a substring
 *
 * @example To be used as
 ```js
     <Message::Avatar
       @title="{{@username}}'s avatar"
       @initial={{substring @username 0 1}}
       class={{if @isCurrentUser "current-user"}}
     />
 ```
 */
export default function substring(string, start, end) {
  return string.substring(start, end);
}
// Sometimes, you may encounter helpers defined using the helper function:

// app/helpers/substring.js
// import { helper } from '@ember/component/helper';

// function substring(positional, { start, end }) {
//   const string = positional[0];
//   return string.substring(start || 0, end);
// }

// export default helper(substring);
