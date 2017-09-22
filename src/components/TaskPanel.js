import React from 'react';

import TaskList from './TaskList.js';
import DetailsPanel from './DetailsPanel.js';

export default class TaskPanel extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    const inputString = e.target.taskTitleInput.value;
    if (inputString) {
      e.target.taskTitleInput.value = '';
      this.props.actions.parseInputToAddTaskAndTags(inputString);
    }
  }

  // Old Submit
  // handleSubmit(e) {
  //   e.preventDefault();
  //   let title = e.target.taskTitleInput.value;
  //
  //   if (title) {
  //     let taskInfo = {
  //       title: title,
  //       owner: 'currentUser'
  //     }
  //     this.props.actions.addT(taskInfo);
  //     e.target.taskTitleInput.value = '';
  //   }
  // }
  render () {
    const taskActions = {
      moveUp: this.props.actions.mUp,
      moveDown: this.props.actions.mDown,
      removeTask: this.props.actions.removeT,
      setCompleted: this.props.actions.setTCompletedByIndex,
      setCurrent: this.props.actions.setCurrentT
    }
    // console.log(`Inside TaskPanel.js - taskArr: ${this.props.tasksArr}`);
    // console.log(this.props.tasksArr);
    return (
      <div className="task-panel wrapper--left-right task">
        <DetailsPanel currentTask={this.props.currentTask}/>
        <div className="task-list task-panel__task-list wrapper--top-bottom">
          <TaskList
            tasksArr={this.props.tasksArr}
            taskActions={taskActions}/>
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <input className="form__input" name="taskTitleInput" placeholder="Add task" type="text"/>
            <button className="add-task-button side-button__message">Add Task</button>
          </form>
        </div>
        <div className="task-panel__actions wrapper--top-bottom">
          <button className="side-button" onClick={() => this.props.actions.shuf()}>SH</button>
          <button className="side-button" onClick={() => this.props.actions.rshuf()}>RSH</button>
          {/* <button className="button">SH</button>
          <button className="button">RSH</button> */}
          <button className="side-button" onClick={() => this.props.actions.updateCTRandom()}>RAND</button>
          <button className="side-button" onClick={() => this.props.actions.updateCC()}>UPD-CC</button>
          <button className="side-button" onClick={() => this.props.actions.saveToLocal()}>Save</button>
          <button className="side-button" onClick={() => this.props.actions.restoreFromLocal()}>Restore</button>
        </div>
      </div>
    );
  }
}
