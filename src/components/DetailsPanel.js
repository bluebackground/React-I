import React from 'react';

export default class DetailsPanel extends React.Component {
  renderTags() {
    // console.log(`Inside DetailsPanel.js`);
    // console.log(this.props.currentTask);
    const result = this.props.currentTask.tags.map((tag) => {
      return `#${tag}`;
    });
    return (
      <p>Tags: {result.toString()}</p>
    );
  }

  renderCategories() {
    const result = this.props.currentTask.classCategories.map((cc) => {
      return `.${cc}`;
    });
    return (
      <p>Categories: {result.toString()}</p>
    );
  }

  renderReferences() {
    const result = this.props.currentTask.references.map((ref) => {
      return `@${ref}`;
    });
    return (
      <p>References: {result.toString()}</p>
    );
  }

  renderPriorities() {
    const result = this.props.currentTask.priorities.map((priorities) => {
      return `+${priorities}`;
    });
    return (
      <p>Priorities: {result.toString()}</p>
    );
  }

  renderRequirements() {
    const result = this.props.currentTask.requirements.map((re) => {
      return `*${re}`;
    });
    return (
      <p>Requirements: {result.toString()}</p>
    );
  }
  conditionalJSX() {
    let panelClassName = `details-panel wrapper--top-bottom task-panel__current-task-panel`;
    if(this.props.currentTask) {
      if(this.props.currentTask.completed){
        panelClassName += " details-panel--completed";
      }
      return (
        <div className={panelClassName}>
          <h2>Current Task:</h2>
          <div>
            <h3>{this.props.currentTask.title}</h3>
            <p>Created by {this.props.currentTask.owner} on DateConfigError.</p>
          </div>
          <p>{this.props.currentTask.description}</p>
          {this.renderCategories()}
          {this.renderTags()}
          {this.renderPriorities()}
          {this.renderRequirements()}
          {this.renderReferences()}
        </div>
      );
    } else {
      return (
        <div className={panelClassName}>
          <p>Select a task to set as your current task</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.conditionalJSX()}
      </div>
    );
  }
}
