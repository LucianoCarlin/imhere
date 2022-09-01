import React from 'react'
import { Header } from '@components/Header'
import { Cards } from '@components/Cards'
import {
  Container,
  CardList,
  Transactions,
  Title,
  ListTransaction,
} from './styles'
import {
  TransactionCard,
  TransactionCardProps,
} from '@components/TransactionCard'

export interface DataListProps extends TransactionCardProps {
  id: string
}

export function Home() {
  const data = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      date: '14/05/2022',
      category: { name: 'Vendas', icon: 'dollar-sign' },
    },
    {
      id: '2',
      type: 'negative',
      title: 'Padaria',
      amount: 'R$ 1.000,00',
      date: '15/05/2022',
      category: { name: 'Alimentação', icon: 'coffee' },
    },
    {
      id: '3',
      type: 'negative',
      title: 'Padaria pao quente',
      amount: 'R$ 1.300,00',
      date: '15/06/2022',
      category: { name: 'Alimentação', icon: 'coffee' },
    },
  ]
  return (
    <Container>
      <Header />

      <CardList>
        <Cards
          title="Entradas"
          amount="R$ 5.000,00"
          lastTransaction="Última entrada dia 14 de maio"
          type="up"
        />
        <Cards
          title="Saídas"
          amount="R$ 3.000,00"
          lastTransaction="Última saída dia 14 de maio"
          type="down"
        />
        <Cards
          title="Total"
          amount="R$ 2.000,00"
          lastTransaction="01 à 14 de maio"
          type="total"
        />
      </CardList>

      <Transactions>
        <Title>Listagem</Title>
        <ListTransaction
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}
