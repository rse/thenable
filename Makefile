##
##  Thenable -- Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
##  Copyright (c) 2013-2014 Ralf S. Engelschall <http://engelschall.com>
##  Licensed under The MIT License <http://opensource.org/licenses/MIT>
##  Source-Code distributed on <http://github.com/rse/thenable>
##

NODE  = node
NPM   = npm
GRUNT = ./node_modules/grunt-cli/bin/grunt

all: build

bootstrap:
	@if [ ! -x $(GRUNT) ]; then $(NPM) install; fi

build: bootstrap
	@$(GRUNT)

clean: bootstrap
	@$(GRUNT) clean:clean

distclean: bootstrap
	@$(GRUNT) clean:clean clean:distclean

test: build
	@$(NODE) test.js

update-package-json: bootstrap
	$(NPM) install npm-check-updates
	./node_modules/npm-check-updates/bin/npm-check-updates -u

