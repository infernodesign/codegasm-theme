import { inferno } from '@infernodesign/eslint-config'

export default inferno(
  {
    type: 'app',
  },
  {
    rules: {
      'no-console': 'off',
      'perfectionist/sort-objects': 'off',
    },
  },
  {
    ignores: [
      'tests/**/*',
      'themes/**/*',
    ],
  },
)
