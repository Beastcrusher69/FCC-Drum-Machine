import React,{ useEffect } from 'react';

const arr = [
  {
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    audioName:"Heater 1"
  },
  {
    keyCode: 87,
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    audioName:"Heater 2"
  },
  {
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    audioName:"Heater 3"
  },
  {
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    audioName:"Heater 4"
  },
  {
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    audioName:"Clap"
  },
  {
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    audioName:"Open-HH"
  },
  {
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    audioName:"Kick-n'-Hat"
  },
  {
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    audioName:"Kick"
  },
  {
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    audioName:"Closed-HH"
  }
];

class App extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      displayText:''
    }

    this.playSound=this.playSound.bind(this);
  }
  
    playSound = (s1,s2) => {
    const sound=document.getElementById(s1);
    sound.play();

    this.setState({
      displayText : s2
    });

    document.addEventListener('keydown', (event) => {
      const sound = document.getElementById(event.key.toUpperCase());
      sound.play();

      this.setState({
        displayText : document.getElementById(event.key.toUpperCase()).parentElement.id
      });
    })
  }

  render(){

    return(

      <div id="drum-machine">
        <div id="keys">
          {arr.map((obj) => 
            <div key={obj.text} onClick={() => { this.playSound(obj.text,obj.audioName)}}
                  className="drum-pad" 
                  id={obj.audioName}>
            {obj.text}
            <audio src={obj.src} 
                   className="clip" 
                   id={obj.text}>
            </audio>
            </div>)}
        </div> 
        <div id="display">
          {this.state.displayText}
        </div> 

      </div> 

    )
  }
}

export default App