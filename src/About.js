import React from 'react'

export default function About(props) {
    return(
        <div  style={{backgroundColor:(props.mode==='light')?'white':'#042743',color:(props.mode==='light')?'black':'white'}}>
       <h1 style={{fontSize:'3rem'}}>This is the about us component which gives the details of this text utils utility website</h1>
       <br/>
       <p style={{fontSize:'2rem'}}>This is the react app which is used to make or modify the text and incorporate the necessary changes in the text</p>
        </div>
      )
}
    