
Thenable
========

<a href="http://promisesaplus.com/" style="float: right;">
    <img src="http://promisesaplus.com/assets/logo-small.png" alt="Promises/A+ logo"
        title="Promises/A+ 1.1 compliant" align="right"/>
</a>

Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable<br/>
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)<br/>
Licensed under The MIT License (http://opensource.org/licenses/MIT)

Abstract
--------

This is a strictly-compliant [Promises/A+](http://promisesaplus.com/)
1.1.1 implementation in just 2KB of (compressed) code, which passes the [official Promises/A+
Test-Suite](https://github.com/promises-aplus/promises-tests)
and includes [back-references to the relevant specification statements](https://github.com/rse/thenable/blob/master/thenable.js).
It just provides a minimum Promise functionality, because it is intended
to be directly *embedded* into ECMAScript 5 based libraries and
frameworks, in order to dependency-free leverage from Promises and be
able to return "thenable" Promise objects to applications. As such, it
only provides the bare Promise creation and resolving functionalities
and no general Promise management functionalities. For applications (and
similar contexts where extra dependencies do not matter), please use a
full-featured Promise library like [Bluebird](https://github.com/petkaantonov/bluebird)
or any of the [other Promise/A+ compliant
implementations](https://github.com/promises-aplus/promises-spec/blob/master/implementations.md) 
instead.

Usage
-----

Although (thanks to UMD) also usable in a stand-alone fashion in
AMD, CommonJS and Browser environments, **Thenable** is primarily
intended for embedding into dependency-free libraries and
frameworks. Hence, it intentionally is neither published to the Node NPM registry
nor to the Bower registry. Instead, please download the raw
[thenable.min.js](https://raw.githubusercontent.com/rse/thenable/master/thenable.min.js)
and include it verbatim into your library/framework.
The usual approach for this is to temporarily emulate a CommonJS
environment within your library/framework to get its `Thenable` object:

```js
var Thenable = (function () {
    var module = { exports: {} };
    /* --- START VERBATIM EMBEDDING ---- */
/*!
**  Thenable -- Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
**  Copyright (c) 2013-2014 Ralf S. Engelschall <http://engelschall.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Source-Code distributed on <http://github.com/rse/thenable>
*/
!function[...]
    /* --- END VERBATIM EMBEDDING ---- */
    return module.exports;
})();
```

Then to use `Thenable` you can do either...


```js
myAsyncMethod = function () {
    var promise = new Thenable();
    doAsyncOperation(function onResult (result) {
        promise.fulfill(result);
    }, function onError (error) {
        promise.reject(result);
    })
    return promise.proxy();
};
```

...or the EMCAScript 6 style...

```js
myAsyncMethod = function () {
    return new Thenable(function (fulfill, reject) {
        doAsyncOperation(function onResult (result) {
            fulfill(result);
        }, function onError (error) {
            reject(result);
        })
    }).proxy();
};
```

Features
--------

- strictly-compliant to Promises/A+ 1.1.1
- source-code includes back-references to the relevant specification statements
- bare Promise creation and resolving functionality
- Universal Module Definition (UMD) for AMD, CommonJS and Browser support
- optional `noConflict` method for non-invasive use in Browser environments
- Static Constructor Function support
- additional Promise Proxy support
- additional Constructor Executor support
- permissive MIT license
- just 2KB of (compressed) code

