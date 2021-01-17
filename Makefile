build-local:
	cd ./infra/local/docker && docker-compose build

up-local:
	cd ./infra/local/docker && docker-compose up -d

up-local-dev:
	cd ./infra/local/docker && docker-compose up -d db-server cache-server

down-local:
	cd ./infra/local/docker && docker-compose down

down-local-rm:
	cd ./infra/local/docker && docker-compose down --rmi all

seed-local:
	cd ./infra/local/db/scripts && ./init-mysql.sh

up-local-k8s:
	cd ./infra/local/k8s && kubectl apply -f ./setup/ && kubectl apply -f ./config/ && kubectl apply -f ./sys/ && kubectl apply -f ./app/

down-local-k8s:
	cd ./infra/local/k8s && kubectl delete -f ./app/ && kubectl delete -f ./sys/ && kubectl delete -f ./config/ && kubectl delete -f ./setup/

up-local-k8s-vendor:
	cd ./infra/local/k8s && kubectl apply -f ./vendor/ -R

down-local-k8s-vendor:
	cd ./infra/local/k8s && kubectl delete -f ./vendor/ -R
