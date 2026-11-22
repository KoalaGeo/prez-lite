import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'PrezLite',
      fileName: () => 'prez-lite.js',
      formats: ['es']
    },
    rolldownOptions: {
      external: [],
      output: {
        codeSplitting: false,
        keepNames: true
      }
    },
    target: 'es2022'
  }
})
