import React from 'react'

function CardReuseComponent({ header, footer, children}) {
  return (
    <div className='card'>
        {header && <div className='card-header'>{header}</div>}
        <div className='card-body'>{children}</div>
        {footer && <div className='card-footer'>{footer}</div>}
    </div>
  )
}

export default CardReuseComponent;


// usage example:

import React from 'react'

function CardUse() {
  return (
    <div>
        <CardReuseComponent 
        header= {<h3>User Info</h3>} 
        footer={<button>Close</button>}>
            <p>This is the content inside the card.</p>
        </CardReuseComponent>
    </div>
  )
}

// export default CardUse;