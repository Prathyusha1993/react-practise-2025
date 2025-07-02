import React, { useState } from 'react'
import './tooltip.css';

function ReusableTooltip({ children, content, position='top' }) {
    const [isVisble, setIsVisible] = useState(false);

    const handleMouseEnter = () => setIsVisible(true);
    const hanldeMouseLeave = () => setIsVisible(false);

   return (
    <div className="reusable-tooltip-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={hanldeMouseLeave}>
        {children}
        {isVisble && (
            <div ref={tooltipRef} >{content}</div>
        )}
    </div>
  )
}

export default ReusableTooltip;