import React from 'react';
import { Avatar, Header, SubHeader } from 'gleam-ui-react'

const Avatars = () => {

  return (
    <div>
      <Header text='Images and Avatars' />
      <SubHeader text='Avatars are great as little images connected to person' />
      <div>
        <Avatar src='https://arrenalexander.com/images/arren-cartoon.jpg' size='medium' shape='circle' />
        <Avatar src='https://arrenalexander.com/images/arren-cartoon.jpg' size='medium' shape='rounded' />
        <Avatar src='https://arrenalexander.com/images/arren-cartoon.jpg' size='medium' shape='square' />
      </div>
    </div>
  )
}

export default Avatars
