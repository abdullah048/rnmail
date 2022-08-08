import React from 'react'
import { useTheme } from '@shopify/restyle'
import { StatusBar as NativeStatusBar } from 'react-native'

export default function StatusBar() {
  const theme = useTheme()

  return (
    <NativeStatusBar
      animated={true}
      backgroundColor={theme.colors.$windowBackground || 'white'}
      barStyle={theme.statusBar?.barStyle}
    />
  )
}
