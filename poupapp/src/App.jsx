import { Container } from "./components/Container";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import { DailyBudget } from "./components/DailyBudget";

import  Card  from "./components/Card";


function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
         <Typography variant='h1'>Olá, Vini!</Typography>
         <Typography variant='body'>Veja como estão as suas finanças</Typography>
        </div>
        <section>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              <DailyBudget value={200} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$200
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$200
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$200
            </Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  );
}

export default App;
