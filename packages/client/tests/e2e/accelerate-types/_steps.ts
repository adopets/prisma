import { $ } from 'zx'

import { executeSteps } from '../_utils/executeSteps'

void executeSteps({
  setup: async () => {
    // await $`pnpm install`
    // await $`pnpm prisma generate`
    await $`yarn install`
    await $`yarn prisma generate`
  },
  test: async () => {
    await $`yarn run \"tsc --noEmit\"`
    // await $`pnpm exec tsc --noEmit`
  },
  finish: async () => {
    await $`echo "done"`
  },
})
