import React, { Component } from 'react';
import Generator from './Components/Generator/Generator';
import 'tachyons';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : null,
      author : null,
      isLoading: false,
    }
    this.requestNewButton = this.requestNewButton.bind(this);
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    .then(response => response.json())
    .then(data => this.setState({
      quote: data[0].quote,
      author: data[0].author,
      isLoading: false
    }))
  }
  requestNewButton() {
    fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    .then(response => response.json())
    .then(data => this.setState({
      quote: data[0].quote,
      author: data[0].author,
      isLoading: false
    }))
  }
  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }
    return (
      <div className="App">
        <Generator requestNewButton={this.requestNewButton} quote={this.state.quote} author={this.state.author}/>
      </div>
    );
  }
}

export default App;
