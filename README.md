# 👁️ gpuu

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

A set of tools to help you detect WebGPU support in the current environment.

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

[npm-version-src]: https://img.shields.io/npm/v/gpuu?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/gpuu
[npm-downloads-src]: https://img.shields.io/npm/dm/gpuu?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/gpuu
[bundle-src]: https://img.shields.io/bundlephobia/minzip/gpuu?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=gpuu
[license-src]: https://img.shields.io/github/license/moeru-ai/gpuu.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/moeru-ai/gpuu/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/gpuu
