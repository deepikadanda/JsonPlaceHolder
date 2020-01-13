import React,{Component} from 'react'

class SinglePhoto extends Component{
    render(){
        const{match,photos} = this.props
        const id = Number(match.params.id)
        const photo = photos.find(photo => photo.id === id)
        return(
            <div>
                <img src={photo.url} alt="photoUrl"></img>
            </div>
        )
    }
}

export default SinglePhoto