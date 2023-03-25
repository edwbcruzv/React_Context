import React from 'react'

function Footer({ theme, texts}) {
  return (
      <footer className={theme}>{texts.footerTitle}</footer>
  )
}

export default Footer