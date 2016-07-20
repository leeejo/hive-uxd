# UXD framework for Singapore GDS

This framework encompasses the entire UXD process we run at Hive.

## Getting started

First, fork this repo and clone it.

```
git clone https://github.com/edisonchee/hive-uxd.git hive-uxd
```

Go into the project directory and grab dependencies:
```
npm i
```
update them:
```
bower install
```

Start up the server:
```
foundation watch
```

View the site at [http://localhost:8000](http://localhost:8000).

## Deployment

There are three npm scripts in package.json:
```
"start": "gulp",
"build": "gulp build --production",
"deploy": "git subtree push --prefix dist origin gh-pages"
```

Build a compressed folder:
```
npm run build
```

We'll push the ```dist``` folder as a subtree onto the gh-pages branch
```
npm run deploy
```

## Coding Style Guide

None at the moment. We write SASS and [ES2015](https://babeljs.io/docs/learn-es2015/) using [gulp-babel](https://www.npmjs.com/package/gulp-babel). If you're going to do a PR, just make sure your code is clean, readable and well-commented.

## Contributing content

Feel free to work on any of the pages and make a pull request when you're done. Most content are written in [MarkDown](https://guides.github.com/features/mastering-markdown/). You should be able to get by with basic syntax for headers and bullet lists.