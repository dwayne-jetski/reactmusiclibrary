import React from 'react';



function createTableRow(i){
 
    <div>
    <tr>
       <td>{this.state.musicData[i].title}</td>
       <td>{this.state.musicData[i].album}</td>
       <td>{this.state.musicData[i].artist}</td>
       <td>{this.state.musicData[i].genre}</td>
       <td>{this.state.musicData[i].releaseDate}</td> 
    </tr>
</div>
}


function createTable(musicData){
    let table;
        for(let i = 0; i < this.state.musicData.length(); i++){
            table += createTableRow(i)
        } 

    return table;
}

export default createTable