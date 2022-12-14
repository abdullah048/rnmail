import React from 'react'
import AnimatedBox from '../atoms/animated-box'
import Bar from '../atoms/bar'

const HeaderBar = ({ children, ...rest }) => {
  return (
    <AnimatedBox position="absolute" top={0} left={0} right={0} {...rest}>
      <Bar
        variant="headerBar"
        flexDirection="row"
        alignItems="center"
        mx="lg"
        my="md"
        px="sm"
        minHeight={44}>
        {children}
      </Bar>
    </AnimatedBox>
  )
}

export default HeaderBar
