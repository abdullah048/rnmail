import React, { useCallback } from 'react'
import Container from '../atoms/container'
import NoteList from '../components/note-list'
import HeaderBar from '../components/header-bar'
import FeatherIcon from '../components/icons'
import { TouchableOpacity } from '../atoms/touchable'
import Box from '../atoms/box'
import Text from '../atoms/text'
import useStickyHeader from '../hooks/use-sticky-header'

export default function MainScreen({ navigation }) {
  const { handleNoteListLayout, handleScroll, headerBarStyle, headerBarHeight } = useStickyHeader()
  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList contentInsetTop={headerBarHeight} onScroll={handleScroll} />
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
        <TouchableOpacity
          m="xs"
          p="xs"
          rippleBorderless
          onPress={handleSidebarToggle}>
          <FeatherIcon name="menu" size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems="center" justifyContent="center">
          <Text fontWeight="bold">All Notes</Text>
        </Box>
        <TouchableOpacity m="xs" p="xs" rippleBorderless>
          <FeatherIcon name="more-vertical" size={22} />
        </TouchableOpacity>
      </HeaderBar>
    </Container>
  )
}
