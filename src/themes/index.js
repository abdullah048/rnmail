import light from './light'
import dark from './dark'
import nord from './nord'
import solarized_dark from './solarized-dark'

export const themes = [
  {
    id: 'light',
    name: 'Default Light',
    theme: light,
  },
  {
    id: 'dark',
    name: 'Default Dark',
    theme: dark,
  },
  {
    id: 'nord',
    name: 'Nord',
    theme: nord,
  },
  {
    id: 'solarized-dark',
    name: 'Solarized Dark',
    theme: solarized_dark,
  },
]
