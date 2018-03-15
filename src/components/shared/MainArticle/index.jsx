import React from 'react'

import './styles.css'

const MainArticle = ({ children }) => {
  return (
    <article className="main-article">
      {children}
    </article>
  )
}

export default MainArticle
