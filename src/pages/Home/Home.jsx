import React from 'react'
import { Wrapper, Button } from './Home.styled'

const Home = () => {
  return (
    <Wrapper>
      <Button to={'/board'}>Go to events</Button>
    </Wrapper>
  )
}

export default Home
