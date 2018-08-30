# Free Code Camp Lab

[![Greenkeeper badge](https://badges.greenkeeper.io/xavierartot/tic-tac-toe.svg)](https://greenkeeper.io/)

Work faster with an environment for web developer

###tasks
- Reload your browser
- Jade compilation
- Lhint the syntax Javascript
- Compile es2015 with [Babel](https://babeljs.io/) 
- Stylus compilation

###Prerequisites:
1 Node, NPM and Gulp.
  1 NPM: [https://docs.npmjs.com/cli/install](Install NPM)
  2 NodeJs: [NodeJs](https://nodejs.org/en/download/)
  3 Gulp: [Installing Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

---

##Installation

**1. In your Terminal clone the repo(Github)**

`git clone https://github.com/xavierartot/workflow-fcc my-project`

**2. Go to the folder**

`cd my-project`

**3. Install the package NPM in your project**

`npm install`

**4. Start gulp**

`gulp watch`

** the first Babel precompilation takes 30 secs, this is normal, then it's takes 1 seconde**

the main files are:

| Files                  | Are                                        | destination
| :--------------------- |:-------------------------------------------|--------------------------|
| src/babel/script.js    | you add the Javascript here                | **folder** index.html/   |
| src/jade/index.jade    | you add the html here                      | **folder** index.html/   |
| src/stylus/style.styl  | the name for the SASS file (for the CSS)   | **folder** index.html/   |

---
##How I Am Using This Workflow With FCC
I clone the repo for each exercice or project.
Once I'm done I copy the code in FCC you can use es6 with Freecocamp or copy the script in index.html/script.js

