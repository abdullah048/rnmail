import React from 'react'
import Box from './box'

const Container = props => (
  <Box {...props} flex={1} backgroundColor="$background">
    {props.children}
  </Box>
)

export default Container
