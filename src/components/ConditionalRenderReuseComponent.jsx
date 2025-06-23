import React from 'react'

function ConditionalRenderReuseComponent({message, type='info', closable=false, onClose}) {
  return (
    <div className={`alert alert-${type}`}>
        {message}
        {closable && <button onClick={onClose}>Close</button>}
    </div>
  )
}

export default ConditionalRenderReuseComponent;