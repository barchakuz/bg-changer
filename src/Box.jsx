

function Box() {
    function test(e){
        e.preventDefault();
        const data = e.target.getAttribute('id');
        document.body.style.backgroundColor = data;
    }
    return (  
        <>
        <div id='container' >
            <button id='red' onClick={test} >Red</button>
            <button id='green' onClick={test} >Green</button>
            <button id='blue' onClick={test} >Blue</button>
            <button id='black' onClick={test} >Black</button>
            <button id='white' onClick={test} >White</button>
            <button id='yellow' onClick={test} >Yellow</button>
            <button id='gray' onClick={test} >Gray</button>
            <button id='purple' onClick={test} >Purple</button>
        </div>
        </>
    );
}

export default Box;