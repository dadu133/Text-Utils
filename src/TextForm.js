
import React,{useState} from "react"
function TextForm(props) {
    const[text,setText]=useState('');
    function clear() {

        setText('');
        props.alert("Success: Clear the text");    
    }
    let change=(event)=>{
        setText(event.target.value)
    }
    function upper() {
    setText(text.toUpperCase());
    props.alert("Success: Converted to Uppercase");
    }
    function lower() {
        setText(text.toLowerCase());
        props.alert("Success: Converted to Lowercase");
    }
    function CopyText()
    {
        var str=document.getElementsByTagName('textarea')[0]
        str.select();
        navigator.clipboard.writeText(str.value);
        props.alert("Success: Copies the text");
    
    }
    return(
        <>
        <div className="textclass" style={{backgroundColor:(props.mode==='light')?'white':'#042743',color:(props.mode==='light')?'black':'white'}}>

            <h1>Enter the text that you want to analyze</h1>
            <textarea rows={10} cols={10} id="cont" value={text} onChange={change} placeholder="Enter the text" style={{backgroundColor:(props.mode==='light')?'white':'#042743',color:(props.mode==='light')?'black':'white',border:(props.mode==='light')?'2px solid black':'2px solid white'}}></textarea>
            <br/>
            <input type="button" onClick={clear} value="Clear"/>
           <input type="button" onClick={upper} value="Convert to Uppercase"/>
           <input type="button" onClick={lower} value="Convert to Lowercase"/>
           <input type="button" onClick={CopyText} value="Copy Text"/>
           <h2>
            Your text Summary
           </h2>
           <p>It conains {text.split(' ').length-1} words and {text.length} characters</p>
           <p>It takes {0.008*(text.split(' ').length-1)} minutes to read</p>
            <h1>
                Preview of text
          </h1>
            <p>{text}</p>
        
        </div>
        </>
    
    )
}
export default TextForm;