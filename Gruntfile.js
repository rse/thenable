/*
**  Thenable -- Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
**  Copyright (c) 2013-2014 Ralf S. Engelschall <http://engelschall.com>
**  Licensed under The MIT License <http://opensource.org/licenses/MIT>
**  Source-Code distributed under <http://github.com/rse/thenable>
*/

/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-eslint");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            options: {
                jshintrc: "jshint.json"
            },
            "gruntfile": [ "Gruntfile.js" ],
            "prince":    [ "thenable.js" ]
        },
        eslint: {
            options: {
                config: "eslint.json"
            },
            target: [ "thenable.js" ],
        },
        uglify: {
            options: {
                preserveComments: "some",
                report: "min"
            },
            "thenable": {
                src:  "thenable.js",
                dest: "thenable.min.js"
            }
        },
        clean: {
            distclean: [ "node_modules" ]
        }
    });

    grunt.registerTask("default", [ "jshint", "eslint", "uglify" ]);
};

