import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    'index': './src/index.ts',
    'webgpu/index': './src/webgpu/index.ts',
  },
  sourcemap: true,
  unused: true,
  fixedExtension: true,
})
