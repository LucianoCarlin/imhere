import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TypeProps {
  type: 'positive' | 'negative'
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.pink200};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
`

export const Amount = styled.Text<TypeProps>`
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
  color: ${({ theme, type }) =>
    type === 'positive' ? theme.colors.green500 : theme.colors.red500};
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray600};
`

export const CategoryName = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray600};
  margin-left: 17px;
`

export const Date = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray600};
`
