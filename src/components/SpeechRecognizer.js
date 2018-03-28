import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SpeechRecognizer extends Component {
  state = {
    results: [],
    error: false,
    isSpeaking: false,
    isListening: false,
    notSupported: false
  };

  static propTypes = {
    lang: PropTypes.string,
    continuous: PropTypes.bool,
    serviceURI: PropTypes.string,
    interimResults: PropTypes.bool,
    maxAlternatives: PropTypes.number,
    // funcs
    onResults: PropTypes.func,
    render: PropTypes.func.isRequired
  };

  static defaultProps = {
    lang: "en-US",
    continuous: false,
    maxAlternatives: 1,
    interimResults: false,
    // funcs
    onResults: () => {}
  };

  _stopRec = () => {
    this.recognizer.stop();
  };

  _startRec = () => {
    this.recognizer.start();
  };

  _abortRec = () => {
    this.recognizer.abort();
  };

  _handleSpeechStart = () => {
    this.setState({ results: [], isListening: true });
  };

  _handleSoundStart = () => {
    this.setState({ isSpeaking: true });
  };

  _handleSoundEnd = () => {
    this.setState({ isSpeaking: false });
  };

  _handleResults = ({ results }) => {
    this.setState(
      { results, isListening: false },
      this.props.onResults.bind(this, results)
    );
  };

  componentDidMount() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (typeof SpeechRecognition === "undefined") {
      return this.setState({ notSupported: true });
    }

    this.recognizer = new SpeechRecognition();

    const {
      // props
      lang,
      continuous,
      serviceURI,
      interimResults,
      maxAlternatives,
      // funcs
      onResults
    } = this.props;

    this.recognizer.lang = lang;
    this.recognizer.continuous = continuous;
    this.recognizer.serviceURI = serviceURI;
    this.recognizer.interimResults = interimResults;
    this.recognizer.maxAlternatives = maxAlternatives;

    this.recognizer.onaudiostart = this._handleSpeechStart;
    this.recognizer.onsoundstart = this._handleSoundStart;
    this.recognizer.onsoundend = this._handleSoundEnd;
    this.recognizer.onresult = this._handleResults;
  }

  render() {
    return this.props.render({
      ...this.state,
      stop: this._stopRec,
      start: this._startRec,
      abort: this._abortRec
    });
  }
}
