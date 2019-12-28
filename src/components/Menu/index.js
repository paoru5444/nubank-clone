import React from 'react';

import { Animated } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
        opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
    }}>

      <Nav>
        <NavItem>
          <MaterialIcons name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <MaterialIcons name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <MaterialIcons name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <MaterialIcons name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
