## What is this?

Angular 2 Boilerplate for use with Visual Studio Code

+ Uses [TypeScript](http://www.typescriptlang.org/) for Angular 2
+ [SCSS](http://sass-lang.com/) for "sassy" style sheets   
+ [Gulp](http://gulpjs.com/) for task running
+ [TSLint](https://palantir.github.io/tslint/) to keep us in line
+ [BrowserSync](https://browsersync.io/) to speed up the code/compile/test process
+ NPM is unavoidable in Angular 2
+ Follows Angular 2 defaults for things like [systemjs](https://github.com/systemjs/systemjs)
+ [VS Code](https://code.visualstudio.com/Download) as the IDE

### Some required steps

*Make sure you have NPM installed and are at least a little familiar with what it is.*

* Clone the repository to your machine
``` 
git clone https://github.com/ArcaneChaos/angular2-boilerplate.git 
```
* Initialize NPM and install some required software
From within your project directory, run these commands in a terminal ( <kbd>CTRL</kbd>+<kbd>`</kbd> in VSCode )
```
 npm init
 npm install -g gulp
 npm install -g tslint
```
* Install all the project dependencies, again from within your working directory. This will read the *package.json* file to find the required dependencies
```
npm install
```
* Start writing code within the src directory, paying attention to the Angular 2 [Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)


### Compiling and running your project

The preconfigured *tasks.json* task will trigger a Gulp watch that publishes stuff into /dist and starts BrowserSync. To activate this task from VS Code, press CTRL+SHIFT+B or use Command Palette (CTRL+SHIFT+P) then search 'build'.

**The outputs are:**

- Required Angular libs will be copied (once-off)
- Static files will be copied (once-off)
- All .ts files in /src will be transpiled then copied – and watched for updates
- The .scss files in /src/scss will be compiled then copied – and watched for updates

A browser window should open with your site loaded in it. Any changes you make to source code will automatically be compiled, and your browser reloaded when you save.


### Stopping the watch from VS Code

The task is long-running since it watches for source files. To stop the task, use the Command Palette (CTRL+SHIFT+P) then search 'terminate'.

