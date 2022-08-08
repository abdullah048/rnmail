import React, { forwardRef, useCallback, useImperativeHandle } from 'react'
import { Dimensions } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import AnimatedBox from '../atoms/animated-box'
import Box from '../atoms/box'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const SWIPE_THRESHOLD = -0.2

const SwipeableView = forwardRef((props, ref) => {
  const { children, backView, onSwipeLeft, simultaneousHandlers, ...boxProps } =
    props
  const translateX = useSharedValue(0)
  const invokeSwipeLeft = useCallback(() => {
    if (onSwipeLeft) {
      onSwipeLeft(() => {
        translateX.value = withTiming(0)
      })
    }
  }, [onSwipeLeft])

  const panGesture = useAnimatedGestureHandler({
    onActive: event => {
      const x = interpolate(event.translationX, [-SCREEN_WIDTH, 0], [-1, 0])
      translateX.value = Math.max(-1, Math.min(0, x))
    },
    onEnd: () => {
      const shouldbeDismissed = translateX.value < SWIPE_THRESHOLD
      if (shouldbeDismissed) {
        translateX.value = withTiming(-1)
        runOnJS(invokeSwipeLeft)()
      } else {
        translateX.value = withTiming(0)
      }
    },
  })

  const facadeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(translateX.value, [-1, 0], [-SCREEN_WIDTH, 0]),
      },
    ],
  }))

  const progress = useDerivedValue(() => {
    return interpolate(
      Math.max(translateX.value, SWIPE_THRESHOLD),
      [-0.2, 0],
      [1, 0]
    )
  })

  useImperativeHandle(ref, () => ({
    conceal: () => {
      translateX.value = withTiming(0)
    },
  }))

  return (
    <AnimatedBox {...boxProps}>
      {backView && (
        <Box position="absolute" left={0} right={0} top={0} bottom={0}>
          {typeof backView === 'function' ? backView({ progress }) : backView}
        </Box>
      )}
      <PanGestureHandler
        activeOffsetX={[-5, 1000]}
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}>
        <AnimatedBox style={facadeStyle}>{children}</AnimatedBox>
      </PanGestureHandler>
    </AnimatedBox>
  )
})

export default SwipeableView
