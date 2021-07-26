import React, {Component} from 'react';
class ReadContents extends Component{
    render(){
      return (
        <ul>
          <h1><a href="/">{this.props.title}</a></h1>
          {this.props.desc}
        </ul>
      );
    }
}
export default ReadContents;
