import React, {Component} from 'react';
import './App.css';
import Toc from "./components/Toc";
import Subject from "./components/Subject";
import ReadContents from "./components/ReadContents";
import Control from "./components/Control";
import CreateContents from "./components/CreateContents";
import UpdateContents from "./components/UpdateContents";


class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "create",
      selected_content_id: 0,
      subject: { title: "Web", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello React!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "JAVA", desc: "CSS is for information" },
        { id: 3, title: "CSS", desc: "JAVA is for information" },
      ],
    };
  }
  getReadContents(){
    var data = this.state.contents[this.state.selected_content_id]
    return data;
  }
  getContents(){
    var _title,_desc,_article = null;
    if(this.state.mode==="welcome"){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<ReadContents title={_title} desc ={_desc}></ReadContents>
    }else if(this.state.mode==="read"){
      var _content=this.getReadContents();
      _article=<ReadContents title={_content.title} desc ={_content.desc}></ReadContents>
    }else if(this.state.mode==="create"){
      _article=<CreateContents onSubmit ={function(_title,_desc){
        //add Contents to setState
        this.max_content_id +=1;
        // this.state.contents.push(
        //   {id:this.max_content_id,title:_title,desc:_desc}
        // )
        var _contents=this.state.contents.concat(
          {id:this.max_content_id,title:_title,desc:_desc}
        )//concat 과 push가 있지만 성능개선에 concat이 유용하다.
        this.setState({
          contents:_contents
        })
      }.bind(this)} title={_title} desc ={_desc}></CreateContents>

    }else if(this.state.mode==="update"){
      _content = this.getReadContents();
      _article=<UpdateContents data={this.getReadContents()} onSubmit ={function(_id,_title,_desc){
        console.log(this.state.contents.selected_content_id)
        var _content =Array.from(this.state.contents)//원본바꾸지 않는 규칙 복사해서 따로만든다.
        _content[this.state.selected_content_id]={id:_id,title:_title,desc:_desc}
        this.setState({
          contents:_content
        })
      }.bind(this)} title={_title} desc ={_desc}></UpdateContents>
      

    }
    return _article;
  }
  render(){
    return (
      <div>
        <div className="App">
          <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            onChangePage={function(){
              this.setState({mode:"welcome"})
            }.bind(this)}
            >
          </Subject>
          <Toc onChangePage={function(id){
            this.setState({mode:"read",
                          selected_content_id:id-1
          })
          }.bind(this)}
          data={this.state.contents}></Toc>
          <Control onChangeMode={function(_mode){
            if(this.state.mode==="delete"){
              if(window.confirm("delete it?")){
                var _content=Array.from(this.state.contents)
                  _content.splice(this.state.selected_content_id,1);
              }
              this.setState({
                mode:"welcome",
                contents:_content
              })
            }else{
              this.setState({mode:_mode})}
            }.bind(this)}>
          </Control>
          {this.getContents()}
        </div>
      </div>
    );
  }
}

export default App;
