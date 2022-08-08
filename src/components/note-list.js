import React, { useCallback } from 'react'
import { createBox } from '@shopify/restyle'
import NoteListItem from './note-list-item'
import NOTES from '../fixtures/notes'
import Animated from 'react-native-reanimated'
import Box from '../atoms/box'

const StyledFlatList = createBox(Animated.FlatList)

const NoteList = ({ onScroll, contentInsetTop }) => {
  const renderItem = useCallback(({ item }) => {
    return <NoteListItem {...item} />
  }, [])

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop} />}
    />
  )
}

export default NoteList
