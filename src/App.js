import React, { useState, useCallback, Component } from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './user/pages/Home'
import AdminHome from './admin/pages/AdminHome'
import Users from './admin/pages/Users'
import WithdrawDeposit from './admin/pages/WithdrawDeposit'
import Transaction from './user/pages/Transaction'
import Transfer from './user/pages/Transfer'
import Uhome from './user/pages/Home'
import AddUser from './admin/pages/AddUser';
import Auth from './shared/Auth/Auth';


const App = () => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [userId, setUserId] = useState(false);

  //   const login = useCallback(uid => {
  //     setIsLoggedIn(true);
  //     setUserId(uid);
  //   }, []);

  //   const logout = useCallback(() => {
  //     setIsLoggedIn(false);
  //     setUserId(null);
  //   }, []);

  //   let routes;
  //   if (isLoggedIn) {
  //     routes = (
  //       <Switch>
  //         <Route path="/" exact>
  //           <Home />
  //         </Route>
  //         <Route path="/admin/users" exact>
  //           <Users />
  //         </Route>
  //         <Route path="/admin/home" exact>
  //           <AdminHome />
  //         </Route>
  //         <Route path="/admin/credit-debit">
  //           <WithdrawDeposit />
  //         </Route>
  //         <Route path="/admin/users/addUser">
  //           <AddUser />
  //         </Route>
  //         <Redirect to="" />
  //       </Switch>
  //     );
  //   } else {
  //     routes = (
  //       <Switch>
  //         <Route path="/user/home" exact>
  //           <Uhome />
  //         </Route>
  //         <Route path="/user/transactions" exact>
  //           <Transaction />
  //         </Route>
  //         <Route path="/user/transfer">
  //           <Transfer />
  //         </Route>
  //         <Redirect to="/" />
  //       </Switch>
  //     );
  //   }

  return (

    <Router>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/">Salt.Pe</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.NavDropdown title="Admin" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="/admin/home">Admin Home</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/admin/users">Users</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/admin/credit-debit">Deposit/ Withdraw</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.NavDropdown title="User" id="collasible-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="/user/home">User Home</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/user/transactions">Transactions histrory</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/user/transfer">Transfer</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

      <Switch>
        <Route path='/' exact={true}> <Home /> </Route>
        <Route path='/admin/users' exact={true} > <Users /></Route>
        <Route path='/admin/home' exact={true} > <AdminHome /></Route>
        <Route path='/admin/credit-debit' exact={true} > <WithdrawDeposit /></Route>
        <Route path='/admin/users/addUser' exact={true} > <AddUser /></Route>
        <Route path='/user/home' exact={true} > <Uhome /></Route>
        <Route path='/user/transactions' exact={true} > <Transaction /></Route>
        <Route path='/user/transfer' exact={true} > <Transfer /></Route>
        <Route path='/login' exact={true} > <Auth /></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}



export default App;
