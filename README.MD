# Basic Crestron CH5 Example

This example shows very basic usage of the Crestron Com Package with Vanilla JS.
Its designed to help those just starting out learn some of the basics of taking HTML, CSS,
and Javascript files communicate via a TSW touch panel to a processor.
I've tried to put as many comments as possible in these files. As I add more examples I will be putting them into different branches
and will update this readme on which branch shows what example.

# Youtube WalkThrough Link

(https://youtu.be/RphhQH5DOYo)

# Initial Setup

1. If you don't have Node.js installed please install it prior to the steps below
   (https://nodejs.org/en/)

2. Verify you have node installed: `node -v`

3. Install dependancies: `npm install` this will install the Crestron Com Library

4. Install dev dependancy: `npm i parcel-bundler --save-dev`
   I'm using Parcel for running the dev server as well as building the project in preparation for archiving to ch5z file.

5. Open the project in VSCode
   [Make sure you have at least the Crestron Components extension installed in VSCode. I've notated some additional suggestions below] - Prettier - npm intellisense - path intellisense - html snippets

6. Fix issue with Crestron's Com Library that prevents importing direct into index.js file

   - Open the following file: node_modules/@crestron/ch5-crcomlib/package.json
   - Replate
     `"types": "build_bundles/umd/@types/index.d.ts"`
   - With
     `"types": "build_bundles/cjs/@types/index.d.ts",`
     `"main": "build_bundles/cjs/cr-com-lib.js",`

7. To start the project run `npm run start`
   Parcel will start and build the project for testing the html, css, and javascript

8. Open "http://localhost:1234" in your browser
   Parcel provides hot reloading so you never have to refresh your browser. Whenever you make a change in your code it
   automatically rebuild and update in the browser

9. Creating TSW file
   - run `npm run build` This will build the project so its ready for archiving
   - run `npm run build:archive` This will create the tsw file and put in the dist folder

Folder Structure of Project

```
├── assets
│   ├── css
           └── styles.css
│  └── js
          └── index.js
├── index.html
├── package.json
```
