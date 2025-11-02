import { defineConfig } from 'taze'

export default defineConfig( {
  concurrency: 10,
  depFields: {
    overrides: false,
  },
  exclude: [
    '@types/vscode',
  ],
  force: true,
  ignoreOtherWorkspaces: true,
  ignorePaths: [
    '**/node_modules/**',
    '**/test/**',
  ],
  includeLocked: true,
  install: true,
  interactive: true,
  mode: 'major',
  peer: true,
  recursive: true,
  write: true,
} )
