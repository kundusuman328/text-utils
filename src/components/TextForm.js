import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("this is the default text")

    const handelUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("all texts are uppercased!!!", "success");
    }

    const handelOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(" ");
        setText(newText);
        props.showAlert("all words are camelcased!!!", "success")

    }

    const handleBoB = () => {
        let newText = (text.split(" ").map((e) => e.charAt(0).toUpperCase() + e.slice(1, e.length - 1).toLowerCase() + e.charAt(e.length - 1).toUpperCase())).join(" ");
        setText(newText);
        props.showAlert("Surprise Surprise Surprise!!!all words are BoBcased!!!", "success")
    }
    const handleLowercase = () => {
        setText(text.toLowerCase());
        props.showAlert("all texts are lowercased!!!", "success")
    }
    return (
        <div >
            <h1 style={{ color: props.mode === "dark" ? "white" : "#343a40" }}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="TextBox" rows="8" onChange={handelOnChange} style={{ backgroundColor: props.mode === "dark" ? "#343a40" : "white", color: props.mode === "dark" ? "white" : "#343a40" }} value={text}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handelUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleCapitalize}>
                Each word capitalise
            </button>
            <button className="btn btn-primary mx-1" onClick={handleBoB}>
                make it BoB style
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLowercase}>
                Convert to LowerCase
            </button>
        </div>
    )
}
