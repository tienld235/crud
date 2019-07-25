import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import GamesPage from './GamesPage';
import GameForm from './GameForm';

function App() {
  return (
    <div className='ui container'>
      <div className= 'ui three item menu'>
        <Link className='item' activeOnlyWhenExact to='/'>Home</Link>
        <Link className='item' activeOnlyWhenExact to={'/games'}>Games</Link>
        <Link className='item' activeOnlyWhenExact to='/games/new'>Add New Game</Link>
      </div>

      <Route exact path={'/games'} component={GamesPage} />
      <Route path={'/games/new'} component={GameForm} />
    </div>
  );
}

export default App;
