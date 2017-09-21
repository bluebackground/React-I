import React from 'react';

export default class Task extends React.Component {
  render() {
    return (
      <div key={this.props.index}>
        <div className="task">
          <h1 class>
            {this.props.title}
          </h1>
          <button className="button">+</button>
          <button className="button">x</button>
        </div>
      </div>
    );
  }
}
