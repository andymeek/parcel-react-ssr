# ParcelJS with React SSR example

This repo is forked from the amazing https://github.com/parcel-bundler/parcel by https://github.com/exon. Having never used ParcelJS before I was intreged as to how it worked, and how it would work with React SSR.

I've made a few changes to the code as I wanted to produce a project scalfold but with the following changes:

* Includes SCSS - node-sass has been added - supports SCSS files
* Remove Apollo Client - I felt adding Apollo was over-kill with the example
* Removed communication with GitHub GraphQL API as an example
* Dependency upgrades - I upgraded to the latest package versions, especially `parcel-bunder`
* Updates to the scripts in `package.json`

## Development

In development, you don't have server-side rendering. All you need to do is `npm run dev`.

## Production

To run into production, you need to build first and then you can run the app using the express server.

* `npm run build`
* `npm start`

## How is this working?

There is two build: one for the browser using Parcel.js and one for Node.js using BabelJS.

The parcel build is in dist/client and is a regular build just like you would do without server-side rendering.

The Node.js build is in dist/client and is only transformed through BabelJS. It uses a babel plugin to ignore the file extensions that should not be executed through the server. You can add your own!
