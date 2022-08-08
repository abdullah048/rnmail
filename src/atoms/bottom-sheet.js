import React, { forwardRef } from 'react'
import { useTheme } from '@shopify/restyle'
import RNBottomSheet from '@gorhom/bottom-sheet'

const BottomSheet = forwardRef(({ ...rest }, ref) => {
  const theme = useTheme()
  const bgColor = theme.colors['$background']
  const handleColor = theme.colors['$foreground']

  return (
    <RNBottomSheet
      {...rest}
      ref={ref}
      handleIndicatorStyle={{
        backgroundColor: handleColor,
        opacity: 0.8,
      }}
      backgroundStyle={{
        backgroundColor: bgColor,
      }}
    />
  )
})

export default BottomSheet
