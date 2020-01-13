import React,{Component} from 'react'
import Album from './Album'

class Albums extends Component{
    render() {
        const users = this.props.usersJson
        return(
            <div>
                {this.props.albumsJson.map((album, index) => 
                    <Album key={index} album={album} users={users} index={index}></Album>
                )}
            </div>
        )
    }
}

export default Albums