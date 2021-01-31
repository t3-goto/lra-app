up-local:
	cd ./infra/local/docker && docker-compose up -d db-server cache-server

down-local:
	cd ./infra/local/docker && docker-compose down

seed-local:
	cd ./infra/local/db/scripts && ./init-mysql.sh

kustomize-build-dev-apl:
	cd ./infra/kustomize && kustomize build ./fe/overlays/dev > ./fe/manifests/dev.yml && kustomize build ./be/overlays/dev > ./be/manifests/dev.yml && kustomize build ./bff/overlays/dev > ./bff/manifests/dev.yml

kustomize-build-dev-core:
	cd ./infra/kustomize/core && kustomize build ./app/overlays/dev > ./app/manifests/dev.yml && kustomize build ./ext/overlays/dev > ./ext/manifests/dev.yml && kustomize build ./istio/overlays/dev > ./istio/manifests/dev.yml && kustomize build ./sys/overlays/dev > ./sys/manifests/dev.yml  && kustomize build ./vendor/overlays/dev > ./vendor/manifests/dev.yml 

up-dev-core:
	cd ./infra/kustomize/core && kubectl apply -f ./app/manifests/dev.yml && kubectl apply -f ./sys/manifests/dev.yml && kubectl apply -f ./ext/manifests/dev.yml && kubectl apply -f ./istio/manifests/dev.yml && kubectl apply -f ./vendor/manifests/dev.yml

down-dev-core:
	cd ./infra/kustomize/core && kubectl delete -f ./app/manifests/dev.yml && kubectl delete -f ./sys/manifests/dev.yml && kubectl delete -f ./ext/manifests/dev.yml && kubectl delete -f ./istio/manifests/dev.yml && kubectl delete -f ./vendor/manifests/dev.yml

up-dev:
	cd ./cicd && skaffold run -p dev

up-dev-watch:
	cd ./cicd && skaffold dev -p dev

down-dev:
	cd ./cicd && skaffold delete -p dev

build-dev:
	cd ./cicd && skaffold build -p dev

up-istio-oeprator:
	istioctl operator init

