import React from 'react';

export default class NotificationPanel extends React.Component {
  render() {
    // console.log(`Inside NotificationPanel.js - currentCompliment: ${this.props.currentCompliment}`);
    return (
      <div className="wrapper wrapper--top-bottom notification-panel">
        <h1 className="notification-panel__message"><strong>{this.props.currentCompliment}</strong></h1>
      </div>
    );
  }
}
