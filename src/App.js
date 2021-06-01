import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state = {
    user: "Jeerawuth",
    password : "thisIsAbook",
    address:{
      houseNo:123,
      province: "กรุงเทพฯ"

    }
  };
  userClick = () => {
    this.setState({
      user:"Ronaldo",
      password: "IloveyouMoretoday123",
      address:{
        houseNo:123,
        province: "นนทบุรี"
      }
    });
  }
render(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 mx-auto mt-5">
          <div className="card ml-5 mr-5">
            <div className="card-header text-right">
              <button className="btn btn-success btn-sm" onClick = {this.userClick}>
                คลิกหน่อยนะ
              </button>
            </div>
            <div className="card-body">
              user: <span className = "ml-2">{this.state.user}</span><br/>
              password:<span className="ml-2">{this.state.password}</span><br/>
              address:<span className="ml-2">{this.state.address.province}</span>
              <span className="ml-1" >{this.state.address.houseNo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}
export default App;