import { useState } from "react";
import { sculptureList } from "./SculptureList";

export default function EProjact() {
    const [ index,setIndex ] = useState (0);

    function handleClickNext(){
        if (index + 1 <= sculptureList.length) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleClickBack() {
        if (index - 1 >= 0) {
            setIndex(index - 1); 
        } else {
            setIndex(sculptureList.length - 1);
        }
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleClickNext}>
                Next
            </button>
            <button onClick={handleClickBack}>
                Back
            </button>
            <h2>
                <i>{sculpture.name}</i> โดย
                {sculpture.author}
            </h2>
            <h3>
                {index +1} จาก {sculptureList.length}
            </h3>
            <img
                src={sculpture.url}
                title={sculpture.name}
            />
            <p>
                {sculpture.description}
            </p>
            <a href={sculpture.paper} 
            target="_blank">ดูเว็บที่นี่ นะจ๊ะ !!!</a>
        </>
    )
}