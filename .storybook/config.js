import { configure } from '@storybook/react';

const r = require.context('../app', true, /\*.story\.js$/);

function loadStories () {
  r.keys().forEach((r));
}

configure(loadStories, module);
