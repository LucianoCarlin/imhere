import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray900};
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.pink500};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 36px;
  font-weight: bold;
`
