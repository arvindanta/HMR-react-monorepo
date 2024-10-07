# POC to enable HMR in monorepo across packages in dev mode

1. Components from react-16 package gets used in react-18 package.
2. In Dev mode, any change in the components of react-16 will immediately reflect in react-18 as HMR.
3. In build mode, this works as usual. 


## Setup - both uses vite as bundler.

1. In react-18 project . add the below in vite.config.ts
```
const isDev = process.env.NODE_ENV === "development";
resolve: {
    alias: {
     "@lib": resolve(__dirname, "./lib"),
      // do this in dev mode to avoid the need to build the package
      ...(isDev && { "react-16-app": resolve(__dirname, "../react-16/lib") }), // Use source file in dev mode
    },
  },

```
In react 16 project - the entry point is the `lib` directory.

2. Ensure in the root package.json the below is present
```
"workspaces": [
    "packages/*"
]
```


## Dev mode:
1. cd to react-16 - yarn dev
2. cd to react-18 - yarn && yarn dev - this will install react-16 as dependency inside react-18. in dev, aliasing is used to point to the source folder of react-16.
3. Change the code in the react-16 and see that it automatically reflects in react-18.

## TODO: 
1. Try with vite as component bundler and webpack as main project bundler.

