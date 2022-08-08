import { createRestyleComponent, createVariant } from '@shopify/restyle'
import Box from '../atoms/box'

const Bar = createRestyleComponent(
  [createVariant({ themeKey: 'barVariants' })],
  Box
)

export default Bar
