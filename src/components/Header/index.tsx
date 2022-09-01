import React from 'react'
import {
  Container,
  UserWrapper,
  UserInfo,
  Avatar,
  User,
  UserGreeting,
  UserName,
  Icon,
} from './styles'

export function Header() {
  return (
    <Container>
      <UserWrapper>
        <UserInfo>
          <Avatar
            source={{
              uri: 'https://avatars.githubusercontent.com/u/63309947?v=4',
            }}
          />
          <User>
            <UserGreeting>Ola,</UserGreeting>
            <UserName>Luciano</UserName>
          </User>
        </UserInfo>
        <Icon name="power" />
      </UserWrapper>
    </Container>
  )
}
