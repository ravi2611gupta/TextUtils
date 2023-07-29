import React, { useState } from "react";
// use for this --> rfc

export default function TextForm(props) {
  // crating state
  const [text, setText] = useState("Enter text here");
  // text = "new text"; //Wrong way to change the state
  // setText("new text"); //Correct way to change the state.

  // creating function
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText("you have changed on handleUpClick");
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to lowercase!", "success");
  };

  const readText = () => {
    if ("speechSynthesis" in window) {
      const speechUtterance = new SpeechSynthesisUtterance();
      speechUtterance.text = text;
      speechUtterance.voice = speechSynthesis.getVoices()[0];
      speechSynthesis.speak(speechUtterance);
    } else {
      alert("Sorry, your browser doesn't support the Web Speech API.");
    }
  };

  const handleClearClick = () => {
    let newtext2 = "";
    setText(newtext2);
    props.showAlert("Nothing to display, please enter some text", "danger");
  };

  const handleCopy = () => {
    // console.log("I am copy")
    let text = document.getElementById("mybox");
    // it will select all the text from textarea
    // text.select(0, 9999);
    text.select();
    // text.setSelectionRange(0,9999);

    // it will write the text into the clipboard.
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //after coping the data text will be unselected.
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpace = () => {
    let newText3 = text.split(/[ ]+/);
    setText(newText3.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  // creating function
  const handleOnChange = (event) => {
    // console.log("On Change");
    // if we don't do this, we can't be able to write any thing in textbox.
    // because we are changeing the value of textarea with state. and if we want to change the value again by writing in the textarea we have to use setText funtion (which is a state function).
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
          {/* <label htmlFor="mybox" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={readText}
        >
          Read it
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summery</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
