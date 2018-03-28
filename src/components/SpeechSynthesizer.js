import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SpeechSynthesizer extends Component {
  state = {
    error: false,
    isPlaying: false,
    notSupported: false
  };

  static propTypes = {
    lang: PropTypes.string,
    render: PropTypes.func.isRequired
  };

  static defaultProps = {
    lang: "en-US"
  };

  _speak = text => {
    this.utterance.text = text;
    this.synth.speak(this.utterance);
  };

  _handleStart = () => {
    this.setState({ isPlaying: true });
  };

  _pause = () => {
    this.synth.pause();
  };

  _handlePause = () => {
    this.setState({ isPlaying: false });
  };

  _cancel = () => {
    this.synth.cancel();
  };

  _resume = () => {
    this.synth.resume();
  };

  _getVoices = () => {
    window.speechSynthesis.getVoices();
  };

  componentDidMount() {
    const speechSynthesis = window.speechSynthesis;
    const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;

    if (
      typeof speechSynthesis === "undefined" ||
      typeof SpeechSynthesisUtterance === "undefined"
    ) {
      return this.setState({ notSupported: true });
    }

    this.synth = speechSynthesis;
    this.utterance = new SpeechSynthesisUtterance();
    this.utterance.lang = this.props.lang;
    this.utterance.onstart = this._handleStart;
    this.utterance.onpause = this._handlePause;
    this.utterance.onend = this._handlePause;
    this.utterance.onresume = this._handleStart;
  }

  render() {
    return this.props.render({
      ...this.state,
      speak: this._speak,
      pause: this._pause,
      cancel: this._cancel,
      resume: this._resume,
      getVoices: this._getVoices
    });
  }
}
