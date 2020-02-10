import react, { useRef } from "react",

const UncontrolledForm = () => {
    const input = useRef(null);
    const handleSubmit = event => {
        event.preventDefault();
        console.log(input.current.value)
    };

    return (
        <>
            <h1>Uncontrolled Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
        <input type="text" ref={input}>
                    </input>
                </label>
                <input type="submit" value="button"></input>
            </form>
        </>
    );
} 