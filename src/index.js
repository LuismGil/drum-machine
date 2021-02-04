import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const keySound = [
  {
    key: 'Q',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    name: 'Sound Q',
  },
  {
    key: 'W',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    name: 'Sound W',
  },
  {
    key: 'E',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    name: 'Sound E',
  },
  {
    key: 'A',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    name: 'Sound A',
  },
  {
    key: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    name: 'Sound S',
  },
  {
    key: 'D',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    name: 'Sound D',
  },
  {
    key: 'Z',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    name: 'Sound Z',
  },
  {
    key: 'X',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    name: 'Sound X',
  },
  {
    key: 'C',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    name: 'Sound C',
  },
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Drum Machine</h1>
        <h3>Click or press a key to play the audio</h3>
        <div className="container__display__message">
          <Display />
        </div>
        <div>
          <div id="drum-machine" className="container__display drum-pad">
            {keySound.map((sound, i) => (
              <DisplayContainer
                nameKey={sound.key}
                key={i}
                name={sound.name}
                audio={sound.src}
                codeKey={sound.code}
              />
            ))}
          </div>
          <footer>by LuismGil</footer>
        </div>
      </>
    );
  }
}

const Display = () => {
  return (
    <div className="display-container">
      <p className="container__display__message--text" id="display"></p>
    </div>
  );
};

class DisplayContainer extends React.Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();

    window.document.addEventListener('keydown', e => {
      if (e.key.toUpperCase() === props.nameKey) {
        document.getElementById('display').innerHTML =
          'Is playing ' + this.props.name;
        this.audio.current.play();
        console.log(e.key);
      }
    });
  }

  handlePlay = e => {
    this.audio.current.play();
    document.getElementById('display').innerHTML = this.props.name;
  };

  render() {
    const { nameKey, audio, name } = this.props;

    return (
      <>
        <div
          className="drum-pad container__display__keys"
          id={name}
          onClick={this.handlePlay}
          onKeyDown={this.handleKey}
        >
          {nameKey}
          <audio ref={this.audio} src={audio} className="clip" id={nameKey} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'));
