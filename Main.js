import React, {Component} from 'react'
import Title from './Title'
import Albums from './Albums'
import { Route } from 'react-router-dom'
import Photos from './Photos'
import SinglePhoto from './SinglePhoto'

class Main extends Component{
    constructor(){
        super()
        this.state = {
            albumsJson: [],
            photosJson: [],
            usersJson: []
        }
    } 

    componentDidMount() {
        this.getAllAlbumsFromJsonPlaceHolder()
        this.getAllPhotosFromJsonPlaceHolder()
        this.getAllUsersfromJsonPlaceHolder()
 }

    getAllAlbumsFromJsonPlaceHolder(){
          fetch('https://jsonplaceholder.typicode.com/albums')
          .then(response => response.json())
          .then(albumsJson => this.setState({albumsJson: albumsJson}))
          .catch(error => console.error())
    }
      
    getAllPhotosFromJsonPlaceHolder(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photosJson => this.setState({photosJson: photosJson}))
        .catch(error => console.error())
    }

    getAllUsersfromJsonPlaceHolder(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersJson => this.setState({usersJson: usersJson}))
        .catch(error => console.error())
    }

    render(){
        return(
            <div>
                <Title title={'Albums from JSON Place Holder'}></Title>
                
                <Route exact path='/' render={ () => 
                    <Albums albumsJson={this.state.albumsJson} usersJson={this.state.usersJson}></Albums>
                }></Route>
                
                <Route exact path='/album/:id' render = {(params) =>
                    <Photos albums={this.state.albumsJson} photos={this.state.photosJson}  {...params}></Photos>
                }></Route>

                <Route exact path='/photos/:id' render = {(params) =>
                    <SinglePhoto photos={this.state.photosJson}{...params}></SinglePhoto>
                }></Route>
            </div>
            
        )
    }
}

export default Main