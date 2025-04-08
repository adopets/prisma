import { $ } from 'zx'

import { executeSteps } from '../_utils/executeSteps'

void executeSteps({
  setup: async () => {
    // await $`pnpm install`
    await $`yarn install`
    // await $`pnpm prisma generate`
    await $`yarn prisma generate`
  },
  test: async () => {
    const timeBefore = Math.round(performance.now())
    // await $`pnpm exec tsc`
    await $`yarn run \"tsc\"`
    const timeAfter = Math.round(performance.now())

    const timeDiff = timeAfter - timeBefore
    console.log(`timeDiff: ${timeDiff}`)

    if (timeDiff > 1000 * 60) {
      throw new Error('Compilation took more than 1 minute')
    }
  },
  finish: async () => {
    await $`echo "done"`
  },
  // keep: true, // keep docker open to debug it
})
