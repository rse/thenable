
Thenable
========

Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable<br/>
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)<br/>
Licensed under The MIT License (http://opensource.org/licenses/MIT)

Abstract
--------

This is a strictly-compliant [Promises/A+](http://promisesaplus.com/)
1.1.1 implementation, which passes the [official Promises/A+
Test-Suite](https://github.com/promises-aplus/promises-tests). It just
provides a minimum Promise functionality, because it is intended to be
directly *embedded* into ECMAScript 5 based libraries and frameworks, in
order to internally already leverage from Promises and be able to return
"thenable" Promise objects to their consumers. As such, it only provides
Promise creation and resolving functionalities and no general Promise
management functionalities.

Features
--------

- provides Minimum Strictly-Compliant Promises/A+ 1.1.1 Implementation
- uses Universal Module Definition (UMD) for AMD, CommonJS and Browser support
- provides optional `noConflict` method for non-invasive use in Browser environments
- supports Static Constructor Function usage
- provides additional Promise Proxy support
- provides additional Constructor Executor support
- stays under permissive MIT license

