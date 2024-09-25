import React, { Component } from 'react';

class InfiniteLoop extends Component {


  state = {
    users : []
  }

  componentDidMount = () => {
    
    const getDatas = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const datas = await response.json()
      console.log("리랜더링")
      return datas;
    }
    getDatas().then((datas) => this.setState({users : datas}));
  }

  render() {
    const{users} = this.state;


    return (
      <div>
        {users.map((user,i) => <li key ={i} >{user.name}</li> )}
      </div>
    );
  }
}

export default InfiniteLoop;