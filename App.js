import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header.js';
import SideDrawer from './component/SideDrawer/SideDrawer.js';
import BackDrop from './component/BackDrop/BackDrop.js';
import LoginForm from './component/LoginForm/LoginForm.js';
import CarouselRender from './component/Carousel/Carousel.js';
import Footer from './component/Footer/Footer.js';
import MenuBar from './component/MenuBar/MenuBar.js';
class App extends Component {
  state={
    sideDrawerOpen:false,
    loginFormOpen:false
  };
  constructor(props){
    super(props);
    this.drawerToggleClickHandler=this.drawerToggleClickHandler.bind(this);
    this.loginFormHandler=this.loginFormHandler.bind(this);
    this.backDropClickHandler=this.backDropClickHandler.bind(this);
     this.state = { modalShow: false };
  }
  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
loginFormHandler=()=>{
 console.log("if block of login form");
  this.setState((prevState)=>{
    return {loginFormOpen: !prevState.loginFormOpen};});
  console.log("loginFormState ",this.state.loginForm);
}

  backDropClickHandler=()=>{
    this.setState({sideDrawerOpen :false});
  }
  render() {
    let backDrop;
    let loginForm;
    let modalClose = () => this.setState({ modalShow: false });
    if(this.state.sideDrawerOpen){
      backDrop=<BackDrop click={this.backDropClickHandler}/>;
    }

    return (
      <div style={{height:'100%' }}>

      <Header drawerToggleClickHandler={this.drawerToggleClickHandler} loginFormOpen={()=>{this.state.modelShow=true}}/>
      <SideDrawer show={this.state.sideDrawerOpen} loginFormOpen={this.loginFormHandler}/>
      <div className="menuBar">
      <MenuBar />
      </div>
      {loginForm}
      <div className="carousel">
      <CarouselRender/>
      </div>

      {backDrop}
      <LoginForm show={this.state.modalShow} onHide={modalClose} />

      <div className="footer">
      <Footer />
      </div>
      </div>

    );
  }
}

export default App;
