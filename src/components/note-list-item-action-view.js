import React from 'react'
import { useAnimatedStyle } from 'react-native-reanimated'
import Box from '../atoms/box'
import AnimatedBox from '../atoms/animated-box'
import FeatherIcon from '../components/icons'

const NoteListItemActionView = ({ progress }) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: progress.value,
      },
    ],
  }))

  return (
    <Box
      flex={1}
      bg="$primary"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-end"
      pr="xl">
      <AnimatedBox
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={iconStyle}>
        <FeatherIcon name="folder" color="white" size={18} />
        <FeatherIcon name="arrow-right" color="white" size={12} />
      </AnimatedBox>
    </Box>
  )
}

export default NoteListItemActionView
