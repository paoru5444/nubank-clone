import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Container, Top, Logo, Title } from './styles';

import logo from '~/assets/Nubank_Logo.png'

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Paulo</Title>
      </Top>

      <MaterialIcons name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}
