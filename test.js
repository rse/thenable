/*
**  Thenable -- Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
**  Copyright (c) 2013-2014 Ralf S. Engelschall <http://engelschall.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Source-Code distributed under <http://github.com/rse/thenable>
*/

/*  load Promises/A+ test-suite and our implementation  */
var TestSuite = require("promises-aplus-tests");
var Thenable  = require("./thenable.js");

/*  provide an adapter for our implementation  */
var adapter = {
    deferred: function () {
        var promise = new Thenable();
        return {
            promise: promise,
            resolve: function (value) {
                return promise.fulfill(value);                
            },
            reject: function (reason) {
                return promise.reject(reason);                
            }
        };
    }
};

/*  run the test-suite  */
TestSuite(adapter, { reporter: "spec" });

