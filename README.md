<h1 align="center">👁️ gpuu</h1>

<p align="center">
  A tools to help you detect WebGPU support in the current environment.
</p>

## Features

- 🌐 WebGPU Support Detection
  - Easily check if WebGPU is supported in the current environment
  - Detect FP16 support for better performance
  - Handles both browser and Node.js environments
- 🔍 Detailed Diagnostics
  - Get comprehensive information about WebGPU availability
  - Clear error messages when WebGPU is not supported
  - Type-safe results with TypeScript support
- 🛠️ Developer Friendly
  - Simple API with both detailed and simplified checks
  - Zero dependencies
  - Lightweight and tree-shakeable

## Installation

Pick the package manager of your choice:

```shell
ni gpuu -D # from @antfu/ni, can be installed via `npm i -g @antfu/ni`
pnpm i gpuu -D
yarn i gpuu -D
npm i gpuu -D
```

## Usage

```ts
import { check, isWebGPUSupported } from 'gpuu'

// Check if WebGPU is supported
const result = await check()
if (result.supported) {
  console.log('WebGPU is supported!')
  console.log('FP16 support:', result.fp16Supported)
}
else {
  console.log('WebGPU is not supported:', result.reason)
}

// Or use the simplified version
if (await isWebGPUSupported())
  console.log('WebGPU is supported!')
```
