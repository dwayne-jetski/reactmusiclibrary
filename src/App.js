import React from 'react';
import './App.css';
import createTableRow from "./MusicTable";
import createNavBar from "./NavigationBar"

const axios = require('axios').default;

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      musicData: [],
      loading: true
    }
  }
/* 
  getUserData(){ 
    axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(function(response){
    this.setState({loading:false, musicData: response})
    console.log(response)
  })
  } */

  async getData(){
    try{
      const {data} = await axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(function(response)
      {this.setState({musicData: response, loading: false})})
    } catch (error) {
      console.log(error);
    }
  }



  buildTable() {
    return (
      <div>
        <h1>{createNavBar()}</h1>
        <table striped border hover size = "sm" variant="dark">
          <tr>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
          {/* {this.createTable()} */}
        </table>
      </div>
    );
  }

  
 /*  createTable(){
    this.getUserData();
    let table;
        for(let i = 0; i < this.state.musicData.length; i++){
            table += createTableRow(i)
        } 

    return table;
  } */


  render(){
    this.getData()
    console.log(this.state.musicData)
    return(
      this.buildTable()
    )
  }

}

    


export default App;
