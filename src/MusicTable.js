import React from 'react';
import axios from 'axios';
import CreateSearchBar from './SearchBar'
import createNavBar from "./NavigationBar";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'


class CreateTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          musicData: [],
          loading: true
        }
      }
    
      axios = require('axios').default;
    
      componentDidMount(){
        
        axios.get('http://www.devcodecampmusiclibrary.com/api/music').then((res) => {
        const music = res.data;
        console.log(music)
        this.setState({
          musicData: music,
          loading: false
        })
        }).catch((err) =>{
          console.log(err);
        });
      }

      buildTable(filteredData) {
        return (
          <div>
            <h1>{createNavBar()}</h1>
            <h2><CreateSearchBar/></h2>
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
                            <td>{id}</td>
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
    

    
    render(){
        let filteredData = this.state.musicData;
        return( 
            this.buildTable(filteredData)
        )

    }
}


export default CreateTable