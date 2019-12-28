import React from 'react';
import { View } from 'react-native';

import { Container, TabsContainer, TabItem, TabText } from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      }),
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp'
        })
      }]
    }}>
      <TabsContainer>
        <TabItem>
          <MaterialIcons name="person-add" size={20} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="chat-bubble-outline" size={20} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="arrow-downward" size={20} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="arrow-upward" size={20} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="lock" size={20} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
