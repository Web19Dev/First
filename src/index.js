import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CakeIcon from '@material-ui/icons/Cake';
import './animation.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <>
  <CakeIcon style={{
    color:"blue",
    fontSize:"5vw",
    position: 'absolute',
    left: '1vw'
  }}/>
  <CakeIcon style={{
    color:"blue",
    fontSize:"5vw",
    position:'absolute',
    right:'1vw'
  }}/>
    <h1 className="wish">Happy Birthday 'Name' </h1>
    <App />
  <FavoriteIcon className="heart" 
  style={{
    fontSize:"5vw"
  }}/>
  <FavoriteIcon className="heart3" 
  style={{
    fontSize:"5vw",
  }}/>
  <FavoriteIcon className="heart2" 
  style={{
    fontSize:"5vw",
  }}/>
  <FavoriteIcon className="heart4" 
  style={{
    fontSize:"5vw",
  }}/>
  </>,
  document.getElementById('root')
);


