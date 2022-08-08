import React from 'react'
import { useAnimatedStyle } from 'react-native-reanimated'

const NoteListItemActionView = ({ progress }) => {
  const iconStyle = useAnimatedStyle(() => {
    transform: [
      {
        scale: progress.value,
      },
    ]
  })
}

export default NoteListItemActionView
