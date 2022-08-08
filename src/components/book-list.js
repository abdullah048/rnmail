import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { createBox } from '@shopify/restyle'
import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import BookListItem from '../components/book-list-item'
import BOOKS from '../fixtures/books'

const StyledFlatList = createBox(FlatList)
const StyledBottomSheetFlatList = createBox(BottomSheetFlatList)

const BookList = ({ onPressItem, headerComponent, color, inBottomSheet }) => {
  const renderItems = useCallback(
    ({ item }) => {
      return <BookListItem {...item} onPress={onPressItem} color={color} />
    },
    [onPressItem]
  )

  const ListComponent = inBottomSheet
    ? StyledBottomSheetFlatList
    : StyledFlatList

  return (
    <ListComponent
      contentInsetAdjustmentBehavior="automatic"
      scrollEventThrottle={16}
      data={BOOKS}
      renderItem={renderItems}
      keyExtractor={item => item.id}
      width="100%"
      pt="sm"
      ListHeaderComponent={headerComponent}
    />
  )
}

export default BookList
