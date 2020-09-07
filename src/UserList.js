import React, { Component } from 'react';
import axios from 'axios';
const List = () =>{

    state = {
        users = [],
    };

    return (


    componentDidmount() {
        axios.get (`https://jsonplaceholder.typicode.com/users`)
        console.log (res);
        .then (res => {
            this.setstate( {users: res.data});
        })
    }
            
        
    );

}

render () {

    return(
        <ul>
            {this.state.users.map(user=> <li>{user.name}</li>)}
        </ul>

    )
}
export default List;
