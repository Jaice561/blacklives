import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import * as blackliveAPI from '../../services/blacklives-api'
import AddBlackLivePage from '../AddBlackLivePage/AddBlackLivePage';
import BlackLivePage from '../BlackLivePage/BlackLivePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';

class App extends Component {
  state = {
    blacklives: [],
    user: userService.getUser()
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }


  handleAddBlackLive = async newBlackLiveData => {
    const newBlackLive = await blackliveAPI.create(newBlackLiveData);
    this.setState(state => ({
      blacklives: [...state.blacklives, newBlackLive]
    }), ()=> this.props.history.push('/'));
  }

  handleDeleteLive = async id => {
    if(userService.getUser()){
    await blackliveAPI.deleteOne(id);
    this.setState(state => ({
      blacklives: state.blacklives.filter(black => black._id !== id)
    }), () => this.props.history.push('/'));
  }
  else {
    this.props.history.push('/login')
  }
}

  async componentDidMount() {
    const blacklives = await blackliveAPI.getAll();
    this.setState({blacklives})
  }

  render() {
    return (
      <>
      <Route exact path='/' render={() =>
      <>
        <NavBar
        user={this.state.user}
        handleLogout={this.handleLogout}
        pageName={"Your Life Matter This Week!"}
        />
        <BlackLivePage
        blacklives={this.state.blacklives}
        handleDeleteLive={this.handleDeleteLive}
        />
        </>
      }>
      </Route>

      <Route exact path='/yourlife/add' render={() =>
      userService.getUser() ?
        <AddBlackLivePage
        handleAddBlackLive={this.handleAddBlackLive}
        user={this.state.user}
        />
        :
        <Redirect to='/login' />
      }>
      </Route>

      <Route exact path='/signup' render={({ history }) => 
        <SignupPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
      }/>
      <Route exact path='/login' render={({ history }) => 
        <LoginPage
          history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
        />
      }/>
      </>
    );
  }
  }

  export default App;
