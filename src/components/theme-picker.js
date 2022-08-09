import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'
import { useAtom } from 'jotai'
import activeThemeId from '../states/theme'
import ThemeListItem from './theme-list-item'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet'
import Box from '../atoms/box'
import Text from '../atoms/text'
import { themes } from '../themes/index'

const ThemePicker = forwardRef((_props, ref) => {
  const [, setActiveTheme] = useAtom(activeThemeId)
  const refBottomSheet = useRef(null)
  const snapPoints = useMemo(() => ['40%', '90%'], [])

  useImperativeHandle(ref, () => ({
    show: () => {
      const { current: bottomSheet } = refBottomSheet
      if (bottomSheet) {
        bottomSheet.snapToIndex(0)
      }
    },
  }))

  const renderThemeItem = useCallback(({ item }) => {
    return <ThemeListItem theme={item} onPress={setActiveTheme} />
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
      }}>
      <BottomSheetFlatList
        ListHeaderComponent={() => (
          <Box p="lg" alignItems="center">
            <Text fontWeight="bold">Change Theme</Text>
          </Box>
        )}
        data={themes}
        keyExtractor={t => t.id}
        renderItem={renderThemeItem}
      />
    </BottomSheet>
  )
})

export default ThemePicker
