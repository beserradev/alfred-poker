import {
  Title,
  Header,
  Button,
  InputEmail,
  InputPassword,
  Form,
  Slider,
  Checkbox,
  Switch,
} from "./style";
import { ThemeProvider } from "styled-components";
import { purple, green } from "../../theme/theme";
import { useState } from "react";

function Example() {
  const [selectedTheme, setSelectedTheme] = useState(green);
  const onChangeTheme = (isChecked) => {
    setSelectedTheme(isChecked ? purple : green);
  };

  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <Header>
          <Title>Styled Components</Title>
          <Switch>
            <Checkbox onChange={(e) => onChangeTheme(e.target.checked)} />
            <Slider />
          </Switch>
        </Header>
        <Form>
          <InputEmail />
          <InputPassword />
          <Button primary backgroundHover="blue">
            Cadastrar
          </Button>
          <Button
            backgroundHover="blue"
            as="a"
            href="https://www.google.com.br/"
            target="_blank"
          >
            Ir para o site
          </Button>
        </Form>
      </ThemeProvider>
    </>
  );
}

export default Example;
