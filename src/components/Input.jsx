import "bootstrap/dist/css/bootstrap.css";
import "./Input.css";
import { useState } from "react";
import QRCode from "qrcode.react";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const [isValidURL, setIsValidURL] = useState(false);
  function isURL(text) {
    // Regular expression for a basic URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    // Test the input text against the regular expression
    return urlRegex.test(text);
  }

  const handleInput = (e) => {
    if (isValidURL) {
      setIsValidURL(false);
    }
    setInputValue(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (isURL(inputValue)) {
      setIsValidURL(true);
    } else {
      alert("Enter a valid URL!");
    }
  };
  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="main mt-5">
          <h1 className="heading text-center mt-5">QR Code Generator</h1>
          <div className="form row">
            <div className="center col-12 text-center">
              <form onSubmit={handleClick}>
                <div className="form-group">
                  <input
                    name="url"
                    id="url"
                    type="text"
                    value={inputValue}
                    onChange={handleInput}
                    className="form-control mb-3"
                    placeholder="Enter url"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-3 mb-5">
                  Submit
                </button>
              </form>
            </div>
            <div className="row ">
              <div className="center col-12 text-center">
                {isValidURL && (
                  <div className="center col-12 text-center">
                    <h2 className="text-dark">Scan QR</h2>
                    <QRCode className="result" value={inputValue} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
