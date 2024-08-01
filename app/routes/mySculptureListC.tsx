import { useState } from "react";
import { sculptureList } from "./SculptureList";

export default function EProjact() {
    const [ index,setIndex ] = useState (0);
    const [ sctList, setSctList ] = useState ( sculptureList );

    let sculpture = sculptureList[index];

    return (
        <>
        <h1> รายการทั้งหมด </h1>
            {
            sctList.map(sculpture => (
                <div key={sculpture.id}>
                    <button onClick={() => {
                        setSctList(
                            sctList.filter(tmp =>
                                tmp.id !== sculpture.id
                            )
                        )}}>
                            Delete
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
                </div>
                ))
            }
        </>
    )
}