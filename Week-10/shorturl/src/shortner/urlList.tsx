import React from 'react'
import        "./urlList.css"

const UrlList = (props: any) => {
  return (
    <li className="goal-item">
      {props.children}
    </li>
  )
}

export default UrlList