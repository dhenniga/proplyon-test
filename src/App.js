import logo from './logo.svg'
import { map } from 'ramda'
import {
  Container,
  Button
} from './App.styled'

function App() {
  return (
    <Container className="App">
      <Button
        onClick={() => {
          console.log('click')
        }}>fetch from server</Button>
    </Container>
  )
}

export default App
