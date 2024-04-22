import React from 'react';

function ImageComponent(props){
   return( <>
    <img src={props.src} alt={props.alt} className={props.className}/>
</>
)
}
export default ImageComponent