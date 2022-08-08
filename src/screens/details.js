import React from 'react'
import Box from '../atoms/box'
import Text from '../atoms/text'
import { TouchableOpacity } from '../atoms/touchable'

export default function DetailScreen({ navigation, route }) {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Detail Screen</Text>
      <Text m="lg">{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 12 }}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </Box>
  )
}
