import React from "react";
import onClickOutside from "react-onclickoutside";

class Dropdown extends React.Component {
  handleClickOutside() {
    this.setState({
      visible: false
    })
  };
}

export default onClickOutside(MyComponent);