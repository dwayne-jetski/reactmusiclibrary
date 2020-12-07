import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import CreateTable from "./MusicTable";
import createNavBar from "./NavigationBar";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'




class App extends React.Component{

 

  render(){
    return(
      <CreateTable/>
    )
  }

}

export default App;
