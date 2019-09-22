import React from 'react';
import './App.css';
import logo from './logo.svg';

let marked = require('marked');

marked.setOptions({
  breaks: true,
});

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markdown: ''
    }
  }

  handleChange = (event) => {
    this.setState({markdown: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <div className='input-wrapper'>
            <textarea className='input-textarea' type='text' value={this.state.markdown} onChange={this.handleChange} placeholder='Type the Markdown text here..'/>
        </div>
  
        <div className='output-wrapper'>
            <div className='output-area' dangerouslySetInnerHTML = { { __html: this.state.markdown === '' ? "The output will display here.." : marked(this.state.markdown)}} />

        <div className='side-footer'><p id='side-text'>Designed by Sameer Ingavale</p><img id='side-image' src={logo} className="React-logo" alt="react-logo" /></div>
        </div>

        
       
      </div>
    );
  }
}

export default App;

