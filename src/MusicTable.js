import React from 'react';
import axios from 'axios';
import createNavBar from "./NavigationBar";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'


class CreateTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          musicData: [],
          loading: true,
          userInput: '',
        }
      }
    
      axios = require('axios').default;
    
      componentDidMount(){
        
        axios.get('http://www.devcodecampmusiclibrary.com/api/music').then((res) => {
        const music = res.data;
        console.log(music)
        this.setState({
          musicData: music,
          loading: false,
        })
        }).catch((err) =>{
          console.log(err);
        });
      }

      buildTable(filteredData) {
        return (
          <div>
            <h1>{createNavBar()}</h1>
            <h2>{this.createSearchBar()}</h2>
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
                    {this.createTableRows(filteredData)}
                </tbody>
            </Table>
          </div>
        );
      }

      createTableRows(filteredData){
        return( this.state.loading ? <tr><td>Loading...</td></tr> :
            
            filteredData.map((musicData, index)=>{
                const {id, title, album, artist, genre, releaseDate} = musicData
                return(
                    <tr key={id}>
                        <td>{title}</td>
                        <td>{album}</td>
                        <td>{artist}</td>
                        <td>{genre}</td>
                        <td>{releaseDate}</td> 
                    </tr>
                )
            })
        )
      }

    updateSearch(event){
        this.setState({userInput: event.target.value});
        console.log(this.state.userInput);
    }

    
    createSearchBar(){
          return(
            <div>
                <input type="text" id="search-bar" placeholder="Search..." defaultValue={this.state.userInput} onKeyUp={this.updateSearch.bind(this)}></input>
            </div>)
    }
    
      filterResults(){
        let value = this.state.userInput.toLowerCase();
        console.log("value: ", value)
        console.log(this.state.musicData);
        let result = [];
        let title = "";
        let album = "";
        let artist = "";
        let genre = "";
        let releaseDate = "";
  
          
        if(this.state.userInput === ''){
              return result = this.state.musicData;
              
        }
        for (let i=0; i<this.state.musicData.length; i++){
          console.log("Data: ", this.state.musicData[i])
            title = this.state.musicData[i].title.toLowerCase();
            album = this.state.musicData[i].album.toLowerCase();
            artist = this.state.musicData[i].artist.toLowerCase();
            genre = this.state.musicData[i].genre.toLowerCase();
            releaseDate = this.state.musicData[i].releaseDate;
            if (title.includes(value) || 
                album.toLowerCase().includes(value) || artist.toLowerCase().includes(value) || 
                genre.toLowerCase().includes(value) || releaseDate.includes(value)){

              result.push(this.state.musicData[i]);
              console.log(result);
            }
        }
        return result;
      }


    
    render(){
        let filteredData = this.filterResults();
        console.log(filteredData)
        return( 
            this.buildTable(filteredData)
        )

    }
}


export default CreateTable