import {createApp} from './app';

export default context => {
  return new Promise((resolve, reject) => {
    const {app, router} = createApp();
    router
      .push(context.url)
      .then(() => {
        router.onReady(() => {
          const matchedComponents = router.getMatchedComponents();
          if (!matchedComponents.length) {
            return reject({code: 404})
          }
          resolve(app)
        }, reject)
      }).catch(reject)
  })
}
