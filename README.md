# Free Code Camp Lab
Accelerate your environment and development

**Do the exercice and challenge with a nice tools**

###It's doing the follow tasks:
- reload the browser each time your save your file
- Jade compilation to index.html, with different option(you choice)
- check the syntax Javascript inlive with Browserefy (you can configure the level in a dot file)
- compile the javascript with Babel
- stylus compilation

###The prerequisites necessaries:
- You need to have Node, NPM and Gulp installed.
- NPM: [https://docs.npmjs.com/cli/install](Install NPM)
- NodeJs: [NodeJs](https://nodejs.org/en/download/)
- Gulp: [Installing Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

---


##Installation

**1. In your Terminal clone the repo(Github)**

`git clone https://github.com/xavierartot/workflow-fcc my-project`

**2. Go in the folder**

`cd my-project`

**3. Install the package NPM**

`npm install`

**4. Start gulp and Watch, to compile, Babel, etc.**

`gulp watch`

** the first Babel precompilation takes 1 min, then is 1 seconde**

the main files are:

| Files                  | Are                                        | destination
| :--------------------- |:-------------------------------------------|--------------------------|
| src/babel/script.js    | you add the Javascript here                | **folder** index.html/   |
| src/jade/index.jade    | you add the html here                      | **folder** index.html/   |
| src/stylus/style.styl  | the name for the SASS file (for the CSS)   | **folder** index.html/   |

---
##How I'm Using This Workflow With FCC
I clone the repo for each exercice or project.
Once I'm done I copy the code in FCC

If you have an issue use Github or this post http://forum.freecodecamp.com/t/workflow-with-grunt-for-campers/28804

Happy coding :grinning:

