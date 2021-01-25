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
	cd ./infra/local/k8s && kubectl apply -f ./setup/namespace.yml && kubectl apply -f ./setup -R

down-local-k8s:
	cd ./infra/local/k8s && kubectl delete -f ./setup/namespace.yml

up-local-k8s-external:
	cd ./infra/local/k8s && kubectl apply -f ./setup-external/namespace.yml && kubectl apply -f ./setup-external -R

down-local-k8s-external:
	cd ./infra/local/k8s && kubectl delete -f ./setup-external/namespace.yml

up-local-k8s-istio:
	cd ./infra/local/k8s && kubectl apply -f ./setup-istio/namespace.yml && kubectl apply -f ./setup-istio -R

down-local-k8s-istio:
	cd ./infra/local/k8s && kubectl delete -f ./setup-istio/namespace.yml

up-local-k8s-vendor:
	cd ./infra/local/k8s && kubectl apply -f ./setup-vendor -R

down-local-k8s-vendor:
	cd ./infra/local/k8s && kubectl delete -f ./setup-vendor -R

up-istio-oeprator:
	istioctl operator init

