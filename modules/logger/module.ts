import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'nuxt-logger',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const pluginPath = resolve('runtime/plugins/logger');

    addPlugin({
      src: pluginPath,
    });
  },
});
