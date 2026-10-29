'use client'

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: '#2D6A30' },
        secondary: { value: '#3F9243' },
        tertiary: { value: '#f3f0ee' },
      },
    },
  },
})

const system = createSystem(defaultConfig, theme)

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
