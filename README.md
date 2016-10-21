#Storm Skip

[![Build Status](https://travis-ci.org/mjbp/storm-skip.svg?branch=master)](https://travis-ci.org/mjbp/storm-skip)
[![codecov.io](http://codecov.io/github/mjbp/storm-skip/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-skip?branch=master)
[![npm version](https://badge.fury.io/js/storm-skip.svg)](https://badge.fury.io/js/storm-skip)

Fixes the skip to content links focus problem

Credit: https://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/

##Usage
```
npm i -S storm-skip 
```
either using es6 import
```
import Skip from 'storm-skip';

```
or es5 commonjs (legacy)
```
require('storm-skip');
```

##Tests
```
npm run test
```  

##Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

ie9+ is supported out the box, ie8+ will work with addEventListener polyfill.

##Dependencies
None

##License
MIT