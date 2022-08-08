import React from 'react'
import Pressable from './pressable'
import { Platform } from 'react-native'
import {
  backgroundColor,
  backgroundColorShorthand,
  border,
  composeRestyleFunctions,
  opacity,
  useResponsiveProp,
  useRestyle,
  useTheme,
} from '@shopify/restyle'

const restyleFunctions = composeRestyleFunctions([
  backgroundColorShorthand,
  backgroundColor,
  border,
  opacity,
])

const Touchable = ({
  pressed,
  rippleColor,
  rippleBorderless,
  style,
  ...rest
}) => {
  const { style: pressedStyle } = pressed
    ? useRestyle(restyleFunctions, pressed)
    : {
        style: undefined,
      }
  const theme = useTheme()
  const rippleColorProps = rippleColor && useResponsiveProp(rippleColor)
  const rippleColorValue = rippleColorProps && theme.colors[rippleColorProps]

  return (
    <Pressable
      {...rest}
      android_ripple={{
        color: rippleColorValue,
        borderless: rippleBorderless,
      }}
      style={({ pressed: isPressed }) =>
        isPressed ? [style, pressedStyle] : style
      }
    />
  )
}

export const TouchableOpacity = props => {
  return (
    <Touchable
      rippleColor="$foreground"
      {...props}
      pressed={{
        opacity: Platform.select({ ios: 0.6 }),
      }}
    />
  )
}

export default Touchable
