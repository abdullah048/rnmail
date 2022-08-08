import { atom } from 'jotai'
import { themes } from '../themes/index'

const activeThemeId = atom('dark')

export const activeThemeAtom = atom(get => {
  const themeId = get(activeThemeId)
  const themeIndex = themes.findIndex(t => t.id === themeId)
  if (themeIndex >= 0) {
    return themes[themeIndex].theme
  } else {
    return themes[0].theme
  }
})

export default activeThemeId
