import React from 'react';
// Install flip move.
// import FlipMove from 'react-flip-move';

import TitleBar from './components/TitleBar.js';
import TaskList from './components/TaskList.js';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <TitleBar />
        <TaskList />
      </div>
    );
  }
}
