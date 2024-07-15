.PHONY: help
help: ## Display help for a command
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

.PHONY: start
start: ## Start Vite dev server
	npm run start

.PHONY: build
build: ## Build for production
	npm run build

.PHONY: preview
preview: ## Locally preview the production build
	npm run preview

.PHONY: lint
lint: ## Parse all files in `src` folder
	npm run lint

.PHONY: lint-fix
lint-fix: ## Automatically fix problems in `src` folder
	npm run lint:fix

.PHONY: prettier
prettier: ## Apply prettier to all files
	npm run prettier

.PHONY: pre-commit
pc: prettier lint ## Check prettier and parse pre-commit
