build-local:
	cd ./infra/local && docker-compose build

up-local:
	cd ./infra/local && docker-compose up -d

up-local-dev:
	cd ./infra/local && docker-compose up -d db-server cache-server

down-local:
	cd ./infra/local && docker-compose down

seed-local:
	cd ./infra/local/db/scripts && ./init-mysql.sh
