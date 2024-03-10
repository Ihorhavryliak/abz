import React from 'react'
import { Tooltip } from 'react-tooltip'
type TooltipGeneralType = {
  id: string | number
  text: string
  children: JSX.Element
}
const TooltipGeneral = ({ id, text, children }: TooltipGeneralType) => {
  return (
    <>
      <span data-tooltip-id={id.toString()}>
        {children}
        <Tooltip
          id={id.toString()}
          place="bottom"
          noArrow
          style={{
            borderRadius: '10px',
            backgroundColor: '#000000DE',
            padding: '3px 16px',
            fontSize: '16px',
            lineHeight: '162%',
            marginTop: '11px'
          }}
          className="max-w-[400px] w-full whitespace-pre-line font-nunito text-white"
          opacity={1}
        >
          {text}
        </Tooltip>
      </span>
    </>
  )
}

export default TooltipGeneral
