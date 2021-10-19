import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/SignIn/SignIn';

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
      imageUrl:'',
      box: {},
      route: 'SignIn'

    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_Col * width),
      bottomRow: height - (clarifaiFace.bottom_Row * height)
    }
  }

  displayFacebox = (box) =>{
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) => {

  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    console.log('click');
    app.models.predict(Clarifai.FACE_DECTECT_MODEL, this.state.input)
    .then(response => this.displayFacebox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
}


  render(){
  return (
    <div className="App">
     <Particles className='particles'
              params={particlesOptions}
              />
     <Navigation />
     {this.state.route === SignIn 
       ? <SignIn />
       : <div>
     <Logo />
     <Rank />
     <ImageLinkForm onInputChange={this.onInputChange} onButoonSubmit={this.onButtonSubmit}
      />
     <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} /> 
     </div>
     }
    </div>
   );
 }
}

export default App;
