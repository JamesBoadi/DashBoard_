import React, { Component } from 'react';
import { Button, Tab, Tabs, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';

class App extends Component {
   constructor(props) {
      super(props);

      //    this.logout = this.logout.bind(this);
      this.tradName = React.createRef();
      this.historicalData = [8];
      this.realTimeData = 0;

      this.TICKINTERVAL = 120;// Changed to every 2 minutes
      this.XAXISRANGE = 777600000;
      var finalData = [8];
      global.finalData = finalData;
      this.currentDate = new Date();
      this.navigate = this.navigate.bind(this);
      this.time = this.currentDate.getDay() + "/" + this.currentDate.getMonth() + "/" +
         this.currentDate.getFullYear()// + "  " + this.currentDate.getHours()+":"+this.currentDate.getSeconds()


      this.state = {
         stock: "SNAP",
         homepage: false,
         series: [
            {
               name: "Graph", // stock name
               data: [250, 260, 261.2, 284.1]
            }
         ],
         options: {
            title: {
               text: this.time,
               align: 'center'
            },

            stroke: {
               curve: 'smooth'
            },
            markers: {
               size: 0
            },

            legend: {
               show: false
            }
         }
      };
   }



   navigate(event) {
      //const node = ReactDOM.findDOMNode(e);

      if (this.divElement) {
         this.divElement.tab('show');
         //this.setState({ value: this.divElement.getAttribute("data-value") });
      }

      event.preventDefault();
   }

   render() {
      // const timer = <h4>{this.state.time}</h4>;
      const info = <h5>  {this.state.number} {this.state.prevTime}</h5>

      return (
         /*   <div class="form-check" >
                              <input type="checkbox" class="form-check-input" id="checkbox" ></input>
                              <label class="form-check-label" for="exampleCheck1">Hide password</label>
                          </div>  timer,

                     <nav>
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist" >
                           <a class="nav-item nav-link active" id="nav-home-tab"  data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" onClick={this.navigate}>Home</a>
                           <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"  href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={this.navigate}>Profile</a>
                        </div>
                     </nav>

  <div class="tab-content" id="nav-tabContent" >
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="home-tab">
  </div>

                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                          <p>Et et consecteturpor incididunt tempor dolor ipsn adipisicing reprehenderit. </p>
https://stackoverflow.com/questions/9709125/how-do-i-stop-a-css-layout-from-distorting-when-zooming-in-out

https://demos.creative-tim.com/light-bootstrap-dashboard-pro-react/?_ga=2.91585759.473493738.1601038548-1277754966.1601038548#/admin/buttons

   */
         <div className="App">
            <header className="App-header">
               <p class="logo">My Mini Trader</p>
               <div class="adjust">
                  <form class="mainForm">

                     <Tabs defaultActiveKey="profile" class="nav nav-fill bg-secondary" id="nav-tab" >
                        <Tab eventKey="home" title="Login" class="tab">

                           <div class="form-group">
                              <label class="text-email">Email</label>
                              <input type="text" id="emailBox" class="form-control" aria-describedby="walletIDHelp" placeholder="Enter your walletID here"
                              ></input>
                           </div>

                           <div class="form-group">
                              <label class="text-password">Password</label>
                              <input type="password" id="passwordBox" class="form-control" placeholder="Enter your password here"></input>
                           </div>

                           <div class="loginButton">
                              <button type="button" class="btn btn-outline-secondary btn-block" >Login</button>
                           </div>
                        </Tab>

                        <Tab eventKey="profile" title="Register" class="tab">
                           
                        <div class="form-group">
                              <label class="text-email">Name </label>
                              <input type="text" id="emailBox" class="form-control" aria-describedby="walletIDHelp" placeholder="Enter your walletID here"
                              ></input>
                           </div>

                           <div class="form-group">
                              <label class="text-password">Email </label>
                              <input type="password" id="passwordBox" class="form-control" placeholder="Enter your password here"></input>
                           </div>

                           <div class="form-group">
                              <label class="text-password">Password</label>
                              <input type="password" id="passwordBox" class="form-control" placeholder="Enter your password here"></input>
                           </div>

                           <div class="loginButton">
                              <button type="button" class="btn btn-outline-secondary btn-block" >Register</button>
                           </div>
                        </Tab>
                     </Tabs>
                  </form>

               </div>
               {info}
            </header>
         </div>
      );
   }
}

export default App;
