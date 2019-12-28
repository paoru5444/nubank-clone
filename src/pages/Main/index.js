import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'
import Header from '~/components/Header'

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation} from './styles'

function Main() {
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event([
    {nativeEvent: {
      translationY: translateY
    }}
  ],
  {
    useNativeDriver: true,
  })

  let offset = 0

  function onHandleStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY
      translateY.setOffset(offset)
      translateY.setValue(0)

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandleStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 305],
                extrapolate: 'clamp'
              })
            }]
          }}>
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
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  )
}

export default Main;
