import sveltePreprocess from 'svelte-preprocess'

export default {
  kit: {
    amp: true
  },
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess()
}