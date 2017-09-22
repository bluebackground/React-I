import React from 'react';
// Install
// import PropTypes from 'prop-types';
//TODO: Set class on list item based on the state of task.completed.
import FlipMove from 'react-flip-move';
import Task from './Task.js';

export default class TaskList extends React.Component {
  tasksArrToJSX() {
    // console.log(`Inside TaskList - tasksArr: ${this.props.tasksArr}`);
    // console.log(this.props.tasksArr);
    if (this.props.tasksArr.length === 0) {
      return (
        <div className="task">
          <p className="task__message">
            You have no tasks. Submit a task to add it to the list.
          </p>
        </div>
      );
    } else {
      return this.props.tasksArr.map((task, index) => {
        // console.log(`task: ${task}`);
        // console.log(task);
        return (
          // Maybe instead of sending functions as the actions object,
          // I can send 1 funtion that goes back up to a parent function
          // to call a particular function based on the string passed.
          // That way I'm not sending so much data down to each task in the list.
          // I'm sending only one generic function that get's interpreted up in the
          // parent APP component class.
          // This function passed simply sends a string, of what it wants to do.
          // Ie add remove delete... Etc. I'll implement that later.
          <Task key={index}
            actions={this.props.taskActions}
            description={task.description}
            title={task.title}
            index={index}
            completed={task.completed}/>
        );
      });
    }
  }
  render () {
    return (
      <div>
        <FlipMove maintainContainerHeight={true} easing="ease-in-out">
          {this.tasksArrToJSX()}
        </FlipMove>
      </div>
    );
  }
}

// TaskList.propTypes = {
//   tasks: PropTypes.array
// }
