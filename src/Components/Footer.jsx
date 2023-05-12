import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.inputValue}
          onChange={this.props.handleChangeInputValue}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.props.handleonTodo();
            }
          }}
        />

        <button className="newtext" onClick={this.props.handleonTodo}>
          Add New Text
        </button>
        <div>
          <button className="deleteall" onClick={this.props.handleDeleteAll}>
            Delete All Tasks
          </button>{" "}
        </div>

        <button
          className="deletemark"
          onClick={this.props.handleDeleteCompleted}
        >
          Delete Completed Tasks
        </button>
      </div>
    );
  }
}

export default Footer;
