import React,{Component} from 'react'
import Photo from './Photo'

class Photos extends Component{
    render(){
        console.log('getPhotosFromAlbum')
        const{match,albums,photos} = this.props
        const id = Number(match.params.id)
        const album = albums.find((album) => album.id === id)
        const albumPhotos = photos.filter((photo) => photo.albumId === album.id)
        return (
            <div>
                {
                    albumPhotos.map((photo, index) => 
                    <Photo photo={photo} key={index}></Photo>)
                }
            </div>
        )
    }
}

export default Photos