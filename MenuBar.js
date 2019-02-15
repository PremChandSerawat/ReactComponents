import React from 'react';
import './MenuBar.css';
import { IoIosArrowUp } from "react-icons/io";
export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      hoverClass1:"",
      hoverClass2:"",
      hoverClass3:"",
      hoverClass4:""
    };
  }
onHover=(id)=>{
  if(id==='menu1')
  {
this.setState({
  hoverClass:"arrowIcon"+id
});}
else if(id==='menu2')
{
this.setState({
hoverClass2:"arrowIcon"+id
});}
else if(id==='menu3')
{
this.setState({
hoverClass3:"arrowIcon"+id
});}
else if(id==='menu4')
{
this.setState({
hoverClass4:"arrowIcon"+id
});}

console.log("id :",id);
}
removeHover=(id)=>{
if(id===1){
this.setState({
  hoverClass:""
});
}
else if(id===2){
this.setState({
  hoverClass2:""
});
}
else if(id===3){
this.setState({
  hoverClass3:""
});
}
else if(id===4){
this.setState({
  hoverClass4:""
});
}

}
render(){
  let submenu=<h1>submenu 1</h1>;
  return(
    <div className="menuBar">
   <ul>
   <lable for="menu1">
   <li><a id="menu1" onMouseOver={()=>this.onHover("menu1")} onMouseOut={()=>this.removeHover(1)}>Menu 1<span><IoIosArrowUp className={this.state.hoverClass}/></span></a></li>
   </lable>
<lable for="menu2">
<li><a id="menu2" onMouseOver={()=>this.onHover("menu2")} onMouseOut={()=>this.removeHover(2)}>Menu 2<span><IoIosArrowUp className={this.state.hoverClass2}/></span></a></li>
</lable>
<lable for="menu3">
<li><a id="menu3" onMouseOver={()=>this.onHover("menu3")} onMouseOut={()=>this.removeHover(3)}>Menu 3<span><IoIosArrowUp  className={this.state.hoverClass3}/></span></a></li>
</lable>
<lable for="menu4">
<li><a id="menu4" onMouseOver={()=>this.onHover("menu4")} onMouseOut={()=>this.removeHover(4)}>Menu 4<span><IoIosArrowUp className={this.state.hoverClass4}/></span></a></li>
</lable>
   </ul>
<div className="subMenu">
{submenu}
</div>
    </div>
  );
}
}
