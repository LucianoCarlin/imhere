import { FlatList } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { DataListProps } from '.'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray900};
`

export const CardList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
`
export const ListTransaction = styled(
  FlatList as new () => FlatList<DataListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
})``
