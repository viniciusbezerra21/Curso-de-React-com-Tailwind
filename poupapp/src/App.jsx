import logo from "./assets/logo.svg"
import { Container } from "./components/Container"

function App() {


  return (
    <Container>
      <aside>
        <img src={logo}  alt="logo do Poupapp"/>
      </aside>
    </Container>
  )
}

export default App
