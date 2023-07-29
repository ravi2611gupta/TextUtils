import React, { useState } from "react";

export default function About(props) {
  // state for color and backgroundColor
  const [myStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  // state for button text
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  // toggler function for mode
  let handelMode = () => {
    if (myStyle.color === "white") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dart Mode");
    } else {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    }
  };

  // giving style from react
  // let myStyle={
  //     color: 'white',
  //     backgroundColor: 'black'
  //   }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={{
                  color: props.mode === "dark" ? "white" : "#042743",
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {" "}
                {/* <----- style={myStyle} */}
                Analyze Your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              style={{
                color: props.mode === "dark" ? "white" : "#042743",
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
              }}
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {" "}
                {/* <----- style={myStyle} */}
                Experience the power of language with our advanced text analysis
                tool. Perfect for writers, students, and professionals, it goes
                beyond basic text formatting. Uncover valuable insights into
                text formatting, style, word count, letter count, removing extra
                spaces, convert to uppercase and lowercase. Elevate your
                content's clarity and impact with ease.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={{
                  color: props.mode === "dark" ? "white" : "#042743",
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {" "}
                {/* <----- style={myStyle} */}
                Free To Use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "dark" ? "white" : "#042743",
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                }}
              >
                {" "}
                {/* <----- style={myStyle} */}
                Discover the freedom of accessing a vast collection of resources
                and tools without any cost. Embrace unlimited opportunities with
                our free-to-use services, from software to educational
                materials. No subscriptions or hidden fees – just an array of
                valuable offerings at your fingertips.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={{
                  color: props.mode === "dark" ? "white" : "#042743",
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {" "}
                {/* <----- style={myStyle} */}
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "dark" ? "white" : "#042743",
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                }}
              >
                {" "}
                {/* <----- style={myStyle} */}
                Seamlessly access our software on any web browser. Whether you
                prefer Chrome, Firefox, Safari, or any other popular browser,
                our platform ensures full compatibility, granting you easy
                access to our services without any hassle.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        {/* <button type='button' className='btn btn-primary' onClick={handelMode}>{btnText}</button> */}
      </div>
    </>
  );
}
