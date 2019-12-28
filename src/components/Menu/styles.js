import styled from 'styled-components/native';
import { Animated, StyleSheet } from 'react-native'

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #FFF;
  padding: 10px;
  align-self: center;
`;

export const Nav = styled.View`
  padding: 5px
`

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.4);
`

export const NavText = styled.Text`
  font-size: 15px;
  color: #FFF;
  margin-left: 20px;
`

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
`

export const SignOutButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 13px;
`

