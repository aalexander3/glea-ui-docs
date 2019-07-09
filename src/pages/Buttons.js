import React from 'react';
import { Button, TextButton, Header, SubHeader, Divider } from 'gleam-ui-react';
import Highlight from 'react-highlight';

const highlightText = `
import React from 'react';
import { Button } from 'gleam-ui-react';

function MyComponent(){
  const handleClick = () => {
    console.log('hello')
  }

  return <Button handleClick={handleClick} color='default' />
}

`

const Buttons = () => {

  const handleClick = (e) => {
    const ele = e.target
    window.scrollTo({
      top: ele.offsetTop,
      left: ele.offsetLeft,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <Header text='Buttons' color='blue'/>
      <Divider />
      <SubHeader text='Buttons are a great way to let someone know what actions they can do on a page.' />

      <div>
        <Header id="text-button" text='<Button />' onClick={handleClick} />
        <Button label='DEFAULT' />
        <Button label='DISABLED' disabled={true} />
        <Button label='BLUE' color="blue" />
      </div>

      <Header text='Usage' highlight />
      <Highlight language='javascript'>
        { highlightText }
      </Highlight>

      <Header text='Variants' color='blue' />
      <p>Buttons come in many different sizes, variants, and colors. Be sure to pick the one that suits your needs!</p>

      <Header text='Button Sizes'/>
      <SubHeader text='Buttons come in three sizes: small, medium, or large' />
      <div>
        <Button label='SMALL' color="blue" size='small' />
        <Button label='MEDIUM' color="blue" size='medium' />
        <Button label='LARGE' color="blue" size='large' />
        <TextButton label='SMALL' color="red" size='small' />
        <TextButton label='MEDIUM' color="red" size='medium' />
        <TextButton label='LARGE' color="red" size='large' />
      </div>
      <Header text='Button Colors'/>
      <SubHeader text='Buttons come in three sizes: small, medium, or large' />
      <div>
        <Button label='DEFAULT' color="default" />
        <Button label='RED' color="red" />
        <Button label='ORANGE' color="orange" />
        <Button label='YELLOW' color="yellow" />
        <Button label='GREEN' color="green" />
        <Button label='BLUE' color="blue"/>
        <Button label='PURPLE' color="purple" />
        <Button label='PINK' color="pink" />
      </div>
      <div>
        <TextButton label='DEFAULT' color="default" />
        <TextButton label='RED' color="red" />
        <TextButton label='ORANGE' color="orange" />
        <TextButton label='YELLOW' color="yellow" />
        <TextButton label='GREEN' color="green" />
        <TextButton label='BLUE' color="blue"/>
        <TextButton label='PURPLE' color="purple" />
        <TextButton label='PINK' color="pink" />
      </div>

      <Header id="text-button" text='<TextButton />' color='default' onClick={handleClick} />
      <SubHeader text='Buttons have a few variations. Check out Text Buttons for a more subtle feel' color='primary' />
      <div>
        <TextButton handleClick={()=>console.log('default button')} label='DEFAULT' color="default" size='medium' />
        <TextButton handleClick={()=>console.log('primary button')} label='PRIMARY' color="blue" size='medium' />
        <TextButton handleClick={()=>console.log('secondary button')} label='SECONDARY' color="red" size='medium' />
        <TextButton handleClick={()=>console.log('disabled button')} label='DISABLED' color="default" size='medium' disabled={true}/>
      </div>


    </div>
  )
}

export default Buttons
