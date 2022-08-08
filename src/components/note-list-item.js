import React, { useCallback } from 'react'
import Text from '../atoms/text'
import Box from '../atoms/box'
import NoteListItemActionView from './note-list-item-action-view'
import SwipeableView from './swipable-view'
import { TouchableOpacity } from '../atoms/touchable'

const NoteListItem = props => {
  const { onPress, onSwipeLeft, id } = props
  const handlePress = useCallback(() => {
    onPress(id)
  }, [onPress, id])

  const handleSwipeLeft = useCallback(
    done => {
      onSwipeLeft && onSwipeLeft(id, done)
    },
    [id, onSwipeLeft]
  )

  const renderBackView = useCallback(
    ({ progress }) => <NoteListItemActionView progress={progress} />,
    []
  )
  return (
    <SwipeableView
      bg="yellow"
      onSwipeLeft={handleSwipeLeft}
      backView={renderBackView}>
      <Box bg="$background">
        <TouchableOpacity
          bg="$background"
          px="lg"
          py="sm"
          onPress={handlePress}>
          <Text
            fontWeight="bold"
            ellipsizeMode="tail"
            numberOfLines={1}
            mb="xs">
            {props.title}
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            fontSize={14}
            opacity={0.7}>
            {props.body}
          </Text>
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  )
}

export default NoteListItem
