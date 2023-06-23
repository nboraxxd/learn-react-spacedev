import React from 'react'

const Teacher = ({ avatar, title, position, description, website }) => {
  return (
    <div className="teaches">
      <div className="teacher">
        <div className="avatar">
          <img src={avatar} alt={title} />
        </div>
        <div className="info">
          <div className="name">{title}</div>
          <div className="title">{position}</div>
          <p className="intro" dangerouslySetInnerHTML={{ __html: description }} />
          {website && (
            <p>
              <strong>Website:</strong>{' '}
              <a href="https://dangthuyenvuong.github.io/" rel="noopener" target="_blank">
                https://dangthuyenvuong.github.io/
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Teacher
