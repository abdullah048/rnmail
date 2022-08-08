import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import Text from '../atoms/text'
import Box from '../atoms/box'
import BookList from '../components/book-list'

const Sidebar = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg">
          RNMail
        </Text>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  )
}

export default Sidebar
