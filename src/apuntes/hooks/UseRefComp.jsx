import { useRef } from 'react'

export default function UseRefComp() {
    const inputRef = useRef(0);

    const printLog = () => {
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={printLog}>Print</button>
        </div>
    );
}