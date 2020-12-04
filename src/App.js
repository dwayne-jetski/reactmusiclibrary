import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import CreateTable from "./MusicTable";
import createNavBar from "./NavigationBar";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'




class App extends React.Component{



  buildTable() {
    return (
      <div>
        <h1>{createNavBar()}</h1>
        <Table striped bordered hover size="sm" variant="dark">
            <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Album</th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            <CreateTable/>
          </tbody>
        </Table>
      </div>
    );
  }

 

  render(){
    return(
      <CreateTable/>
    )
  }

}

export default App;
