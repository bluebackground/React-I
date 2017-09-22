import React from 'react';
// Install
// import PropTypes from 'prop-types';
import Icon from 'antd/lib/icon';

export default class Task extends React.Component {
  render() {
    let taskClassName = "task-card";

    if (this.props.completed) {
      taskClassName += " task-card--completed";
    }

    return (
      <div key={this.props.index} className={taskClassName}>
        <div className="task">
          <div className="wrapper--top-bottom">
            <h3 className="task__title">
              {this.props.title}
            </h3>
            <p className="task__description">
              {this.props.description}
            </p>
          </div>
          {/* function - edit the current task */}
          <div className="task__actions">
            {/* <button className="button button--round">E</button> */}
            <button
              onClick={() => this.props.actions.moveUp(this.props.index)}
              className="button button--round">U
            </button>
            <button
              onClick={() => this.props.actions.moveDown(this.props.index)}
              className="button button--round">D
            </button>
            <button
              onClick={() => this.props.actions.setCurrent(this.props.index)}
              className="button button--round">C
            </button>
            <button
              onClick={() => this.props.actions.setCompleted(this.props.index)}
              className="button button--round">F
            </button>
            <button
              onClick={() => this.props.actions.removeTask(this.props.index)}
              className="button button--round">X
            </button>
            {/* <Icon onClick={() => this.props.actions.moveUp(this.props.index)} type="up-circle"  />
            <Icon onClick={() => this.props.actions.moveDown(this.props.index)} type="down-circle"  />
            <Icon onClick={() => this.props.actions.setCurrent(this.props.index)} type="info-circle"  />
            <Icon onClick={() => this.props.actions.setCompleted(this.props.index, true)} type="check-circle"  />
            <Icon onClick={() => this.props.actions.removeTask(this.props.index)} type="close-circle"  /> */}
          </div>

          {/* function - set the task to be currentTask in <App/> state */}
          {/* <button onClick={this.props.actions.setCurrent(this.props.index)} className="button">C</button> */}
          {/* function - set the task to be complete in <App/> state */}
          {/* <button onClick={this.props.actions.setCompleted(this.props.index, true)} className="button">+</button> */}
          {/* function - remove task from the <App/> state */}
          {/* <button onClick={this.props.actions.removeTask(this.props.index)} className="button">x</button> */}
          {/* function - Move Up or down*/}
          {/* <button onClick={() => this.props.actions.moveUp(this.props.index)} className="button button--round">Move up</button> */}
          {/* function - Move up or down */}
          {/* <button onClick={() => this.props.actions.moveDown(this.props.index)} className="button button--round">Move down</button> */}
        </div>
      </div>
    );
  }
}

// Task.propTypes = {
//   title: PropTypes.string.isRequired;
// }
//
// Task.defaultProps = {
//   title: 'untitled'
// }
