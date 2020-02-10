import React, { useState } from "react",

const ControlledForm = () => {
    const [input, setInput] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        if (input.length < 6) return;
        console.log(input);
        setInput("");
    };

    return (
        <>
            <h1>Controlled Form</h1>
            <form>
                <label>
                    Name:
                <input type="text"
                        OnChange={e => setInput(e.target.value)}
                        value={input}
                    ></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}

// export default ControlledForm