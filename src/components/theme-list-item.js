import React, { useCallback, useMemo } from 'react'
import { useAtom } from 'jotai'
import { selectAtom } from 'jotai/utils'
import activeThemeId from '../states/theme'
import { TouchableOpacity } from '../atoms/touchable'
import Box from '../atoms/box'
import Text from '../atoms/text'
import FeatherIcon from '../components/icons'

const ThemeListItem = ({ theme, onPress }) => {
  const [isActive] = useAtom(
    useMemo(() => selectAtom(activeThemeId, v => v === theme.id), [theme])
  )

  const handlePress = useCallback(() => {
    onPress(theme.id)
  }, [onPress])

  return (
    <TouchableOpacity
      minHeight={44}
      flexDirection="row"
      alignItems="center"
      px="lg"
      onPress={handlePress}>
      <Box alignItems="center" justifyContent="center" width={32}>
        {isActive ? (
          <FeatherIcon size={20} name="check" color="$primary" />
        ) : null}
      </Box>
      <Text>{theme.name}</Text>
    </TouchableOpacity>
  )
}

export default ThemeListItem
