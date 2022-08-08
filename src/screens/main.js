import React, { useCallback, useRef, useState } from 'react'
import Container from '../atoms/container'
import NoteList from '../components/note-list'
import HeaderBar from '../components/header-bar'
import FeatherIcon from '../components/icons'
import { TouchableOpacity } from '../atoms/touchable'
import Box from '../atoms/box'
import Text from '../atoms/text'
import useStickyHeader from '../hooks/use-sticky-header'
import MoveNoteSheet from '../components/move-note-sheet'

export default function MainScreen({ navigation }) {
  const refMoveNoteSheet = useRef(null)
  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight,
  } = useStickyHeader()
  const [concealNoteListItem, setConcealNoteListItem] = useState(null)
  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])

  const handleNoteListItemPress = useCallback(noteId => {
    navigation.navigate('Detail', {
      noteId,
    })
  }, [])

  const handleNoteListItemSwipeLeft = useCallback((_noteId, _conceal) => {
    const { current: menu } = refMoveNoteSheet
    if (menu) {
      menu.show()
      setConcealNoteListItem(() => _conceal)
    }
  }, [])

  const handleMoveNoteSheetClose = useCallback(() => {
    concealNoteListItem && concealNoteListItem()
    setConcealNoteListItem(null)
  }, [concealNoteListItem])

  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
        onItemPress={handleNoteListItemPress}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
      />
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
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
    </Container>
  )
}
