//컨트롤 k f ->정렬
import React, { Component } from "react";
class UpdateContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this)
  }
  inputFormHandler(e) {
    this.setState({[e.target.name]: e.target.value });
  }
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(this.state.id,this.state.title,this.state.desc);
            //page변경 불가능하게 하는것(기본동작 실행 X)
          }.bind(this)}
        >
          <p>
            <input type="hidden" name="id" value={this.state.id}></input>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
          </p>
          {/* placeholder =입력상자안의 표시될 텍스트 */}
          <textarea
            onChange={this.inputFormHandler}
            name="desc"
            placeholder="description"
            value={this.state.desc}
          ></textarea>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}
export default UpdateContents;
