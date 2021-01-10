build-local:
	cd ./infra/local && docker-compose build

up-local:
	cd ./infra/local && docker-compose up -d

down-local:
	cd ./infra/local && docker-compose down

seed-local:
	cd ./infra/local/db/scripts && ./init-mysql.sh
