export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:error', (err) => {
    console.error(err);
    // throw err;
  });
});
