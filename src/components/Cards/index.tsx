import React from 'react'

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles'

interface CardsProps {
  title: string
  amount: string
  lastTransaction: string
  type: 'up' | 'down' | 'total'
}

export function Cards({ title, amount, lastTransaction, type }: CardsProps) {
  const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
  }
  return (
    <Container type={type}>
      <Header>
        <Title>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}
