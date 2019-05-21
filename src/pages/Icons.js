import React from 'react'
import { Header, SubHeader } from 'gleam-ui-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Icons = () => {

  return (
    <div>
      <Header text='Icons' />
      <SubHeader text='Icons are a great for representing an action or a brand' />
      <p>We're using Font Awesome Icons library, but you can choose any icon library that you'd like!</p>
      <p>Check out Font Awesome's docs <a href='https://fontawesome.com/how-to-use/on-the-web/using-with/react' target="_blank" rel="noopener noreferrer">here</a></p>
      <p>To start using Font Awesome in your project, follow these simple steps</p>

      <ol>
        <li>
          <p>Install font awesome in your project:</p>
          <code>
            <p>npm i --save @fortawesome/fontawesome-svg-core</p>
            <p>npm i --save @fortawesome/free-solid-svg-icons</p>
            <p>npm i --save @fortawesome/react-fontawesome</p>
          </code>
        </li>
        <li>
          <p>Import their React Component wherever you need it. Import the icons you want to use: </p>
          <code>
            <p>{"import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'"}</p>
            <p>{"import { faCoffee } from '@fortawesome/free-solid-svg-icons'"}</p>
            <p></p>
            <p>{"const CoolComponent = () => {"}</p>
            <p>{"  return <FontAwesomeIcon  icon={faCoffee} />"}</p>
            <p>{"}"}</p>
          </code>
        </li>
      </ol>
      <SubHeader text="Here's the result:" />
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  )
}

export default Icons
