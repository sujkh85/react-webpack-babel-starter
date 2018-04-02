import React, { Component } from 'react';

class Main2 extends Component {
  onClickMoveMain=()=>{
    this.props.history.push('/?pagename=main')
  }
  render() {
    return (
      <div>
        Main2
        <div onClick={this.onClickMoveMain}>main move</div>
      </div>
    );
  }
}

export default Main2;