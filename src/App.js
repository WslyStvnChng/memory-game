import React, { Component } from "react";
import "./App.css";
import cardInfo from "./cardInfo.json";
import Card from "./components/Card/Card.js";
import Section from "./components/Section";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    cardInfo,
    score: 0,
    topScore: 0
  };

  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      cardInfo: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectGuess = data => {
    this.setState({
      cardInfo: this.resetData(cardInfo),
      score: 0
    });
  };

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  randomImages = () => {
    const cardInfo = this.state.cardInfo.sort(image => {
      return 0.5 - Math.random();
    });
    this.setState({ cardInfo });
  };

  handleItemClick = id => {
    let guessedCorrectly = false;
    // double check this
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if ((newItem.id = id)) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Section>
          {this.state.cardInfo.map(card => (
            <Card
              randomImages={this.randomImages}
              id={card.id}
              key={card.id}
              image={card.image}
              handleItemClick={this.handleIteClickx}
            />
          ))}
        </Section>
      </div>
    );
  }
}

export default App;