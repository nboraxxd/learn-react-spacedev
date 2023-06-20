import classNames from 'classnames'
import React from 'react'
import { styled } from 'styled-components'

const ContentWrap = styled.div`
  display: block !important;
`

export const Accordion = ({ date, title, children, active, onClick }) => {
  return (
    <div className="accordion">
      <div
        className={classNames('accordion__title', { 'after:rotate-90': active })}
        onClick={onClick}
      >
        {date && <div className="date">Ngày {date}</div>}
        <h3>{title}</h3>
      </div>
      {active && <ContentWrap className="content" dangerouslySetInnerHTML={{ __html: children }} />}
    </div>
  )
}
