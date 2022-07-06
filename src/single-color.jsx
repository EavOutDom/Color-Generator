import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";
// console.log(rgbToHex(255, 0, 0));
const SingleColor = ({ index, hexColor, alpha, rgb, type, weight }) => {
    const [alert, setAlert] = useState(false);
    const RGB = rgb.join(",");
    const HEX = `#${hexColor}`;
    // console.log(HEX);
    useEffect(() => {
        const time = setTimeout(() => {
            setAlert(false);
        }, [3000]);
        return () => clearTimeout(time);
    }, [alert]);
    return (
        <div
            className={`px-5 py-8 ${index > 10 && "text-white"}`}
            style={{ backgroundColor: `rgb(${RGB})` }}
        >
            <p>{weight}%</p>
            <p
                className={"text-center cursor-pointer"}
                onClick={() => {
                    setAlert(true);
                    navigator.clipboard.writeText(HEX);
                }}
            >
                {HEX}
            </p>
            {alert && (
                <div className={"text-center text-sm"}>Copy to clipboard</div>
            )}
        </div>
    );
};

export default SingleColor;
