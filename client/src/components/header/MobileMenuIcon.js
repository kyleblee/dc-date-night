import React from 'react';

export default class MobileMenuIcon extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false
    }
  }

  openCloseMenu = () => {
    if (this.state.open) {
      this.setState({
        open: false
      })
    } else {
      this.setState({
        open: true
      })
    }
  }

  displayMenuTop() {
    return this.state.open ? "strip top-rotate" : "strip";
  }

  displayMenuBottom() {
    return this.state.open ? "strip bottom-rotate" : "strip";
  }

  render() {
    return (
      <div id="hamburger" onClick={this.openCloseMenu}>
        <div id="top" className={this.displayMenuTop()}></div>
        <div id="bottom" className={this.displayMenuBottom()}></div>
      </div>
    )
  }
}
