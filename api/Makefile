include .env
export $(shell sed 's/=.*//' .env)

# If the first argument is "install"...
ifeq (install,$(firstword $(MAKECMDGOALS)))
  # use the rest as arguments for "install"
  INSTALL_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  # ...and turn them into do-nothing targets
  $(eval $(INSTALL_ARGS):;@:)
endif

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

install: ## Install dependencies
	@docker-compose run --rm --entrypoint='npm i $(INSTALL_ARGS) --save' osmarket-api

clean: ## Clean the generated/compiles files
	@docker-compose run --rm --entrypoint='npm run clean' osmarket-api

up: ## Spin up the project
	@docker-compose up

down: ## Spin down the project
	@docker-compose down

shell: ## Drop to shell
	@docker-compose run --rm --entrypoint='/bin/bash' osmarket-api 

