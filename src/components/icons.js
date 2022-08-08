import { useResponsiveProp, useTheme } from '@shopify/restyle'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const FeatherIcon = ({ color = '$foreground', ...rest }) => {
  const theme = useTheme()
  const colorProp = useResponsiveProp(color)
  const vColor = theme.colors[colorProp || '$foreground']
  return <Feather {...rest} color={vColor} />
}

export default FeatherIcon
