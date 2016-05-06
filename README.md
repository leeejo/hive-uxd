# UXD framework for Singapore GDS

This framework encompasses the entire UXD process we run at Hive.

## Getting started

First, fork this repo and clone it.

```
git clone https://github.com/edisonchee/hive-uxd.git hive-uxd
```

Go into the project directory and install gems:
```
bundle install
```
and grab all the Node dependencies:
```
npm i
```

Start up the server:
```
gulp
```

View the site at [http://localhost:3000](http://localhost:3000).

## Dev Environment
```
Ruby 2.3.0
Node 5.11.0
```
I recommend using [chruby](https://github.com/postmodern/chruby) and [n](https://github.com/tj/n) for managing versions.

[Gulp](http://gulpjs.com) is our choice of a task runner for running a [Browsersync](https://www.browsersync.io) server (as a child process) and compiling the site.

## Coding Style Guide

None at the moment. We write SASS and [ES2015](https://babeljs.io/docs/learn-es2015/) using [gulp-babel](https://www.npmjs.com/package/gulp-babel). If you're going to do a PR, just make sure your code is clean, readable and well-commented.

## Contributing content

Feel free to work on any of the pages and make a pull request when you're done. Most content are written in [MarkDown](https://guides.github.com/features/mastering-markdown/). You should be able to get by with basic syntax for headers and bullet lists.