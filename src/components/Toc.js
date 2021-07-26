import React, {Component} from 'react';

class Toc extends Component{
  //이것은 이전데이터와 비교를 통해 변경점이 있을시에만
  //렌더함수를 실행시켜 값을 변경시킨다.
  //이것을 push방식으로 값을 변경시키면 원본을 변경시키기 때문에
  //무조건적으로 렌더함수가 실행된다. 따라서
  //concat함수를 실행시키는것이 더이득이다.
    shouldComponentUpdate(newProps,newState){
      if (newProps.data===this.props.data){
        return false;
      }else{
        return true;
      }
    }
    render(){
        var lists=[];
        var data=this.props.data;
        var i=0;
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id} data-id={data[i].id} onClick={function(e){
              
              e.preventDefault();
              //debugger;
              
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}>{data[i].title}</a></li>)
            i +=1;
        }
        return(
        <nav>
            {lists}
        </nav>
      ) 
    }
  }
  export default Toc;