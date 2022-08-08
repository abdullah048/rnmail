import React from 'react'
import { SafeAreaView } from 'react-native'
import Text from '../atoms/text'
import Box from '../atoms/box'

const Sidebar = () => {
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg">
          RNMail
        </Text>
      </SafeAreaView>
    </Box>
  )
}

export default Sidebar
