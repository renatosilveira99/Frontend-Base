import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Faça seu logon</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="/forgot">Esqueci minha senha</a>
      </form>

      <a href="/createAccount">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
  </Container>
);

export default SignIn;
