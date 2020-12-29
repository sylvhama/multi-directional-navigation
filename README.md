# Multi-Directional Navigation

[![Build Status](https://travis-ci.com/sylvhama/multi-directional-navigation.svg?branch=master)](https://travis-ci.com/sylvhama/multi-directional-navigation)

<a href="https://multi-directional-navigation.netlify.app"><img alt="Preview" src="https://i.imgur.com/Y3r0vT7.gif" /></a>

Navigate in any direction via your keyboard and its arrow keys ⇦ ⇧ ⇨ ⇩ (you can change keys via the query parameters).

You can also connect a gamepad ([partial support](https://github.com/sylvhama/multi-directional-navigation/issues/7)).

If you enable your microphone you will be able to use your voice as well!

- [Check the demo](https://multi-directional-navigation.netlify.app/)!
- [Read more](https://dev.to/sylvhama/multi-directional-navigation-31k2) about it;
- [See the slides](https://github.com/sylvhama/bringing-the-www-to-the-aaa) I've made for Montreal React meetup.

## Stack

- The project was bootstraped via [create-react-app](https://create-react-app.dev/), it uses webpack, Babel, ESLint and Jest under the hood. I also added TypeScript.
- Styling via [styled-components](https://styled-components.com/);
- Routing via [react-router](https://reacttraining.com/react-router/web/);
- Integration and snapshot tests via [React Testing Library](https://testing-library.com/docs/react-testing-library/intro);
- Hooks tests via [react-hooks-testing-library](https://react-hooks-testing-library.com/);
- Ent-to-end tests via [Cypress](https://www.cypress.io/).

## Concepts you might need to learn

- [Hooks](https://reactjs.org/docs/hooks-intro.html), especialy [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer);
- [Context](https://reactjs.org/docs/context.html);
- [Callback Refs](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs);
- Self promotion: I've also made a [guide to learn modern JS and React](https://github.com/sylvhama/modern-js).

## Others ressources used

- [Keyboard interactions](https://docs.microsoft.com/en-us/windows/uwp/design/input/keyboard-interactions);
- [Keyboard-navigable JavaScript widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets);
- [React speach recognition](https://github.com/JamesBrill/react-speech-recognition);
- [useHooks](https://usehooks.com/) is an amazing list of recipes;
- [use-sound](https://github.com/joshwcomeau/use-sound) to add sounds to you app (mine are from Final Fantasy VII);
- [Better Keyboard Buttons in CSS](https://shkspr.mobi/blog/2020/05/better-keyboard-buttons-in-html/);
- [Emojis as Favicons](https://css-tricks.com/emojis-as-favicons/);
- [CodeSandbox](https://codesandbox.io/) I first used this to create my project;
- [Testing Javascript](https://testingjavascript.com/) is a great course.

## More reading

- [Developing for TVs with React-TV](https://medium.com/@raphamorim/developing-for-tvs-with-react-tv-b5b5204964ef);
- [Crafting a high-performance TV user interface using React](https://netflixtechblog.com/crafting-a-high-performance-tv-user-interface-using-react-3350e5a6ad3b);
- [Navigating the web with a gamepad](https://www.voorhoede.nl/en/blog/navigating-the-web-with-a-gamepad/);
- [How Discord Implemented App-Wide Keyboard Navigation](https://blog.discord.com/how-discord-implemented-app-wide-keyboard-navigation-abf073fd71de).
