import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import Box from '../atoms/box'
import Text from '../atoms/text'
import BookList from '../components/book-list'

const MoveNoteSheet = forwardRef(({ onClose }, ref) => {
  const refBottomSheet = useRef(null)
  const snapPoints = useMemo(() => ['60%', '90%'], [])

  useImperativeHandle(ref, () => ({
    show: () => {
      const { current: bottomSheet } = refBottomSheet
      if (bottomSheet) {
        bottomSheet.snapToIndex(0)
      }
    },
  }))

  const handlePressItem = useCallback(_bookId => {
    const { current: bottomSheet } = refBottomSheet
    if (bottomSheet) {
      bottomSheet.close()
    }
  }, [])

  return (
    <BottomSheet
      ref={refBottomSheet}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      detached={true}
      bottomInset={46}
      enablePanDownToClose={true}
      style={{
        marginHorizontal: 12,
      }}
      onClose={onClose}>
      <BookList
        headerComponent={() => (
          <Box justifyContent="center" alignItems="center">
            <Text fontWeight="bold">Move</Text>
          </Box>
        )}
        inBottomSheet
        onPressItem={handlePressItem}
        color="$foreground"
      />
    </BottomSheet>
  )
})

export default MoveNoteSheet
