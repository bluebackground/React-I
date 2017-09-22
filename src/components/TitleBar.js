import React from 'react';
// Install
// import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>;
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1 className="title-bar__title">{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

// TitleBar.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string
// }
//
// TitleBar.defaultProps = {
//   title: 'Tasks Tracker Pro',
//   subtitle: 'Keep up the good work'
// }
