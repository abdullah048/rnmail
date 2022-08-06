import React from 'react'
import { Box, Text } from '../atoms'

const NoteListItem = props => {
  return (
    <Box bg="$background">
      <Box bg="$background" px="lg" py="sm">
        <Text>{props.body}</Text>
      </Box>
    </Box>
  )
}
