import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SpeechSynthesizer extends Component {
  state = {
    error: false,
    isPlaying: false,
    notSupported: false
  };

  static propTypes = {
    render: PropTypes.func.isRequired
  };

  _speak = subject => {
    let utterance = subject;

    if (typeof utterance !== "SpeechSynthesisUtterance") {
      utterance = new SpeechSynthesisUtterance();

      utterance.text = subject;
      utterance.lang = "en-US";
      utterance.onstart = this._handleStart;
      utterance.onpause = this._handlePause;
      utterance.onend = this._handlePause;
      utterance.onresume = this._handleStart;
    }

    this.synth.speak(utterance);
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
