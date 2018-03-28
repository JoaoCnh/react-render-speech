import React, { Component } from "react";
import { render } from "react-dom";

import { SpeechRecognizer } from "../../src";

import "./index.css";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-speech Demo</h1>
        <SpeechRecognizer
          lang="pt-PT"
          continuous={true}
          render={({ results, isSpeaking, isListening, stop, start }) => {
            console.log(results);
            if (isListening) {
              return (
                <div>
                  A ouvir...
                  <button
                    className={isSpeaking ? "pulse" : ""}
                    type="button"
                    onClick={stop}
                  >
                    stop
                  </button>
                </div>
              );
            }

            return (
              <div>
                Começa a ouvir
                <button type="button" onClick={start}>
                  start
                </button>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
