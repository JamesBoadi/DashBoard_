import React, { Component } from 'react';
import { Button, Tab, Tabs, Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import OrderForm from './OrderForm';
import Stocks from './Stocks';
import DropZoneOne from './DropZoneOne';
import DropZoneTwo from './DropZoneTwo';
import StockChart from './StockChart';
import { withRouter } from "react-router";
import HistoryTable from './HistoryTable';
import { Box } from '@chakra-ui/core';

import './App.css';

class Main extends Component {
   constructor(props) {
      super(props);



      this.currentState = null;
      this.form = null;

      this.startedMoving = false;
      this.renderForm = this.renderForm.bind(this);

      this.setPos = this.setPos.bind(this);
      this.getPos = this.getPos.bind(this);


      this.currPosX = null;
      this.currPosY = null;

      this.observe = { currPosX: this.currPosX, currPosY: this.currPosY };

      this.state = {
         isDragging: false,
         sideNavLeft: false,
         form: null


      };
   }


   //     https://stackoverflow.com/questions/55227106/css-animation-text-sliding-left-to-right

   /*
      sidenavToggle = sidenavId => () => {
         const sidenavNr = `sideNav${sidenavId}`
         this.setState({
            [sidenavNr]: !this.state[sidenavNr]
         });
      }; 
      show={() => (state && form)}> (dropzoneOne(state, form), (dropzoneTwo(state, form)))
,
                                 <DropZoneTwo show={() => !state && form}> </DropZoneTwo>

                                

      */


   setPos(pos) // Called in trade class
   {
      this.position = pos;
   }

   getPos(pos) {
      return this.position;
   }





   renderForm(state, form) {

      this.setForm(form);

      this.currentState = state;
      this.form = form;
   }


   render() {
      const router =

         <div class="wrapper">
            <div class="sidenav">
               <a href="#">My Account</a>
               <a href="#">Market</a>
               <a href="#">History</a>
               <a href="#">About</a>
            </div>
         </div>


      return (
         <div className="App">
            <div class="container">
               <div class="row">

                  {router}
                  <header className="App-header">
                     <h2 style={{ position: "relative", top: 0, left: 0, color: "white" }}>My DashBoard</h2>

                     <Box
                        bg="rgb(60,60,60)"
                        style={{ position: "relative", top: 30, left: 15 }}
                        boxShadow='sm'
                        textAlign='center'
                        height='2rem'
                        width='81.5rem'
                        rounded="lg"
                        borderWidth="1px">

                        <div style={{ color: "white"}}>
                           <h4 style={{ position: "absolute", left: 0}}>AAPL (Apple) $48</h4>
                           <h4 style={{ position: "absolute", left: 260}}>AAPL (Apple) $48</h4>
                           <h4 style={{ position: "absolute", left: 520}}>AAPL (Apple) $48</h4>
                           <h4 style={{ position: "absolute", left: 780}}>AAPL (Apple) $48</h4>
                           <h4 style={{ position: "absolute", left: 1040}}>AAPL (Apple) $48</h4>
                           </div>
                     </Box>

                     <div style={{ position: "relative", top: 120, overflow: "visible" }}>
                        <div class="col">
                           <div class="trade">
                              <OrderForm show={(formState, form) =>
                                 <StockChart show={(chartState, chart) =>

                                    <div>
                                       <DropZoneOne show={() => ((chartState && chart) || (!formState && form))}> </DropZoneOne>
                                       <DropZoneTwo show={() => ((formState && form) || (!chartState && chart))}> </DropZoneTwo>
                                    </div>

                                 }
                                 >
                                 </StockChart>
                              }> </OrderForm>
                           </div>
                        </div>
                        <div class="col">
                           <div class="stock">
                              <Stocks></Stocks>
                           </div>
                           <div class="history">
                              <HistoryTable></HistoryTable>
                           </div>
                        </div>
                     </div>

                  </header>
               </div>
            </div>
         </div>
      );
   }
}

export default Main;