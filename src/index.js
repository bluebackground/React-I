/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';

require('!style-loader!css-loader!sass-loader!./index.scss');

import App from './components/App.js';

ReactDom.render(<App />, document.getElementById('root'));
