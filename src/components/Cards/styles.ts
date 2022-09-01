import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TypeProps {
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.pink200 : theme.colors.gray200};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(22)}px;
  font-weight: 400;
`

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) =>
    type === 'up'
      ? css`
          color: ${({ theme }) => theme.colors.green400};
        `
      : type === 'down'
      ? css`
          color: ${({ theme }) => theme.colors.red400};
        `
      : css`
          color: ${({ theme }) => theme.colors.gray600};
        `}
`

export const Footer = styled.View``

export const Amount = styled.Text`
  font-weight: 600;
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: 38px;
`

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.gray600 : theme.colors.gray500};
`
