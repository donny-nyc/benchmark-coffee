# docker-compose run _will not_ expose ports by default
# must pass the --service-ports flag
dev:
	docker-compose run --service-ports client-dev npm run serve
