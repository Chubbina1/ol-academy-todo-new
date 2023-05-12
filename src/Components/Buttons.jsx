import React from "react";
import "../Styles/style.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return this.props.task ? (
      <div className="div">
        {this.props.task.text}
        <button
          className="box"
          onClick={() => this.props.handledelete(this.props.task.id)}
        >
          Delete
        </button>
        <button
          className="backgr"
          onClick={() => this.props.handleComplete(this.props.task.id)}
        >
          Mark as Complete
        </button>
        <button
          className="edit"
          onClick={() => this.props.handleEdit(this.props.task.id)}
        >
          Edit
        </button>
        <button
          className="up"
          onClick={() => this.props.handleMoveUp(this.props.index)}
          disabled={this.props.index === 0}
        >
          Move Up
        </button>
        <button
          className="down"
          onClick={() => this.props.handleMoveDown(this.props.index)}
          disabled={this.props.index === this.props.newtext.length - 1}
        >
          MOve Down
        </button>
      </div>
    ) : (
      <></>
    );
  }
}

export default Buttons;
