ARGUMENTS = $(filter-out $@,$(MAKECMDGOALS))

WATCHEXEC_WRITTEN_PATH=true

watch-apis:
	@echo "Watching apis..."
	watchexec -i _temp* -w src/apis fustak apis

watch-deploy:
	@echo "Watching deploy..."
	watchexec -i _temp* -w src/ fustak deploy

watch-pages:
	@echo "Watching pages..."
	watchexec -i _temp* -w src/pages fustak pages
