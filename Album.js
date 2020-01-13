import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Users from './Users'

class Album extends Component{
    render(){
        const album = this.props.album
        const users = this.props.users
        return(
            <div>
                <Link to={`/album/${album.id}`}><h3>Album Title : {album.title}</h3></Link>
                <Users userId={album.userId} users={users}></Users>
            </div>
        )
    }
}

export default Album