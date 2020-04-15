import React from 'react';

import { Container } from './styles';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <Container>
      <h1>{props.title}</h1>
    </Container>
  );
}
