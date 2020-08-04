import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import * as blackliveAPI from '../../services/blacklives-api'
import AddBlackLivePage from '../AddBlackLivePage/AddBlackLivePage';
import BlackLivePage from '../BlackLivePage/BlackLivePage'

class App extends Component {
  state = {
    blacklives: []
  }


  handleAddBlackLive = async newBlackLiveData => {
    const newBlackLive = await blackliveAPI.create(newBlackLiveData);
    this.setState(state => ({
      blacklives: [...state.blacklives, newBlackLive]
    }), ()=> this.props.history.push('/'));
  }

  handleDeleteLive = async id => {
    await blackliveAPI.deleteOne(id);
    this.setState(state => ({
      blacklives: state.blacklives.filter(black => black._id !== id)
    }), () => this.props.history.push('/'));
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
        <AddBlackLivePage
        handleAddBlackLive={this.handleAddBlackLive}
        />
      }>

      </Route>
      </>
    )
  }
  }

  export default App;
