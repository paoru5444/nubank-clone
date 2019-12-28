import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Tabs from '~/components/Tabs'
import Header from '~/components/Header'

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation} from './styles'

function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <MaterialIcons name="attach-money" size={28} color="#666" />
            <MaterialIcons name="visibility-off" size={28} color="#666" />
          </CardHeader>

          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 200.611,65</Description>
          </CardContent>

          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Paulo Roberto hoje as 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  )
}

export default Main;
