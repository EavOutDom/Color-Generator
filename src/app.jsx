import React, { useState } from "react";
import SingleColor from "./single-color";
import Values from "values.js";
const App = () => {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#ffff00").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            // console.log(colors);
            setList(colors);
            // console.log(list);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };
    // console.log(list);
    return (
        <div className={"text-center"}>
            <div className={"my-8"}>
                <form
                    className={"flex items-center justify-center"}
                    onSubmit={handleSubmit}
                >
                    <h1 className={"text-lg font-bold"}>Color Generator</h1>
                    <input
                        type={"text"}
                        placeholder={"#ffffff"}
                        value={color}
                        onFocus={() => setError(false)}
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                handleSubmit(e);
                                e.target.blur();
                            }
                        }}
                        className={`border-black border-2 p-2 mx-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                        ${error && "border-red-500 border-2"}
                        `}
                    />
                    <button
                        type={"submit"}
                        className={
                            "p-2 ring-2 ring-black hover:text-white hover:bg-black"
                        }
                    >
                        Generate
                    </button>
                </form>
            </div>
            <div
                className={
                    "grid grid-cols-fill-column grid-rows-fill-row min-h-[calc(150vh-100px)] my-2 text-start"
                }
            >
                {list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            index={index}
                            alpha={color.alpha}
                            rgb={color.rgb}
                            type={color.type}
                            weight={color.weight}
                            hexColor={color.hex}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default App;
