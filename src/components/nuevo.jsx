import Typed from 'typed.js';
import React, { useRef } from 'react';

const TypedReactHooksDemo = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    
  // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
        strings: [
        'Si puedes \nimaginarlo,\npuedes \nprogramarlo',
        '<div>\nBienvenidos a</div>mi pagina web'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      // loop: true,
      
      // cursorChar: '**',
      //contentType: 'html',
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (


      <div className="type-wrap">
        <span  style={{ whiteSpace: 'pre',  }} ref={el} />
      </div>


  );
}

export default TypedReactHooksDemo;