import React from 'react';

export default class TaskList React.Component {
  tasksArrToJSX() {
    if (this.props.tasks.length === 0) {
      return (
        <div className="item">
          <p className="item__message item__message-empty">
            You have no tasks. Submit a task to add it to that list.
          </p>
        </div>
      ) else {
        return this.props.tasks.map((task) => {
          return (
            <Task title={task.title}/>
          )
        });
      }
    }
  }
  render () {
    return (
      <div>
        {this.tasksArrToJSX(this.props.task)}
      </div>
    );
  }
}
