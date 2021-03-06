import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
