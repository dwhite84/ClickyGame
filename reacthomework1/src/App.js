import React, { Component } from 'react';
import './App.css';
import Card from "./Components/Card/card";
import NavBar from "./Components/NavBar";
import JumboTron from "./Components/jumboTron"
import players from  "./players.json";



class App extends Component {

  state = {
    Card,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore){
      this.setState({highscore: this.state.score}, function (){
        console.log(this.state.highscore)
      });
    }
    // alert("Game over:( score: ${this.state.score});
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    this.setState({score: 0})
    return true;
  }

  clickCounter = id => {
    this.state.players.find((f, i) => {
      if(f.id === id) {
        if(players[i].count === 0) {
          players[i].count = players[i].count + 1;
          this.setState({score: this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.players.sort(() => Math.random() - 0.5)
          return true;

        }
         else{
          this.gameOver();
        }
      }
    })
  }

  
  render() {
    return (
      <div>
      <NavBar  score={this.state.score} highscore={this.state.highscore}/> 
      
       <JumboTron>
         
       <Card />
         {/* {this.state.players.map(player => (
           <Card 
           clickCount={this.clickCounter}
           id={player.id}
           key={player.id}
           
           />
         ))} */}
       </JumboTron>
       </div>
      
    )
  }
}

export default App;
