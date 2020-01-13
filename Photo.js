import React,{Component} from 'react'
import { Link } from 'react-router-dom'

class Photo extends Component{
    render(){
        const photo = this.props.photo
        return(
            <div>
                <Link to={`/photos/${photo.id}`}><img src={photo.thumbnailUrl} alt='thumbnailUrl'></img></Link>
            </div>
        )
    }
}

export default Photo