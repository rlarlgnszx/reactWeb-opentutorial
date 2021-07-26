import React, {Component} from 'react';
class CreateContents extends Component{
    render(){
      return (
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
          onSubmit={function(e){
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
            e.preventDefault();//page변경 불가능하게 하는것(기본동작 실행 X)
          }.bind(this)}>
            <p><input type="text" name="title"
            placeholder="title"></input></p>
            {/* placeholder =입력상자안의 표시될 텍스트 */}
            <textarea name="desc" placeholder="description">
            </textarea>
            <p>
              <input type="submit"></input>
            </p>
          </form>

        </article>
      );
    }
}
export default CreateContents;
