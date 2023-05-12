import React from "react";

class InputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="div">
        <input
          className="input"
          type="text"
          value={this.props.editValue}
          onChange={this.props.handleEditChange}
        />
        <button className="buttonsave" onClick={this.props.handleSaveEdit}>
          Save
        </button>
      </div>
    );
  }
}

export default InputComponent;
