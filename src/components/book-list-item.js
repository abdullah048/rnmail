import React, { useCallback } from 'react'
import { TouchableOpacity } from '../atoms/touchable'
import Text from '../atoms/text'

const BookListItem = ({ id, name, color, onPress }) => {
  const handlePress = useCallback(() => onPress(id), [id])

  return (
    <TouchableOpacity px="lg" py="sm" onPress={handlePress}>
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        mb="xs"
        color={color || '$sidebarForeground'}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default BookListItem
