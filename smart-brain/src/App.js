import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

const particlesOptions = {
    particles: {
      number: {
        value: 30,
        denisty: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
    

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',

    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("d81cf0fdb9cc4423b3767789f1157433", 'https://samples.clarifai.con/face-det.jpg')
    .then(
    function(response){
      console.log(response);
    },
    function(err){
      
    }
    );
}


  render(){
  return (
    <div className="App">
     <Particles className='particles'
              params={particlesOptions}
              />
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm onInputChange={this.onInputChange} onButoonSubmit={this.onButtonSubmit}
      />
     <FaceRecognition />  
    </div>
   );
 }
}

export default App;
