import React,{Component} from 'react'

class Users extends Component{
     render(){
        const users = this.props.users
        const userId = this.props.userId
        const user = users.find(user => users && user.id === userId )
        if(user){
            return(                
                <div>
                    <h4>Album User : {user.name}</h4>
                </div>
            )
       } else{
           return(
               <div></div>
           )
        }
       
    }
}

export default Users