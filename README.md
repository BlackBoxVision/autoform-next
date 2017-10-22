## AutoForm next

AutoForm next is the newer redux-autoform API, it's a fully rewrite of redux-autoform. We've fully remove the metadata processor. Our API is more declarative now!

### Benefits of AutoForm-Next over Redux-AutoForm? 

Because it's a fully rewrite, we're working on making everything better. We want redux-autoform to provide a better experience on mobile-devices, avoid innecesary re-renders that produce lags, provide more ui-libraries, etc. 

The **autoform-next** project benefits are the following ones: 
- Works with both react v15/v16 (If you've switched to react v16, you'll see a perf diff on mobile-devices)
- Works on top of redux-form v6/v7 (This is a really good progress! Avoid re-render the form on every change!)
- It has a newer way to use, we expose a declarative API, and also let you pass a json schema.
- Provides i18n support through i18next and i18next-react.
- It will provide a wider range of ui-libraries.
- It will provide support for react-native!
- Provides ErrorBoundary support! (Because you don't have to break your app anymore!)
- Smaller bundle sizes! (Because size matters!)

### How to get started? 

For now, the project is in development. The first release will be achieved when the package of bootstrap 4 components is finished and some APIs in the core have a well coverage! 

Anyway, if you want to test it, the steps are the following ones:

- Fork the repository and clone it. 
- Enable yarn workspaces by editing `.yarnrc` file.
- Go to the project root and run `yarn install`.
- Then access `autoform-core` and run `yarn build`.
- Then access `autoform-ui-bootstrap4` and run `yarn build`.
- After that go to the project root and remove `node_modules`
- Run a `yarn install` at the project root.
- Enter inside of `example-web` folder and run a `yarn start`.

If everything goes okay, you should see the app running and showing you a responsive form!

### Issues

If you're testing the repository code and found any issue, please let me know!

### License

This project will be distributed under `MIT License`.
