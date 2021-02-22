up-local:
	cd ./infra/local/docker && docker-compose up -d db cache

down-local:
	cd ./infra/local/docker && docker-compose down

seed-local:
	cd ./infra/local/db/scripts && ./init-mysql.sh

kustomize-build-dev-apl:
	cd ./infra/kustomize && kustomize build ./fe/overlays/dev > ./fe/manifests/dev.yml && kustomize build ./be/overlays/dev > ./be/manifests/dev.yml && kustomize build ./bff/overlays/dev > ./bff/manifests/dev.yml

kustomize-build-prod-apl:
	cd ./infra/kustomize && kustomize build ./fe/overlays/prod > ./fe/manifests/prod.yml && kustomize build ./be/overlays/prod > ./be/manifests/prod.yml && kustomize build ./bff/overlays/prod > ./bff/manifests/prod.yml

kustomize-build-dev-core:
	cd ./infra/kustomize/core && kustomize build ./overlays/dev > ./manifests/dev.yml

kustomize-build-prod-core:
	cd ./infra/kustomize/core && kustomize build ./overlays/prod > ./manifests/prod.yml

up-dev-core:
	cd ./infra/kustomize/core && kubectl apply -f ./manifests/dev.yml

up-prod-core:
	cd ./infra/kustomize/core && kubectl apply -f ./manifests/prod.yml

down-dev-core:
	cd ./infra/kustomize/core && kubectl delete -f ./manifests/dev.yml

down-prod-core:
	cd ./infra/kustomize/core && kubectl delete -f ./manifests/prod.yml

up-dev:
	cd ./cicd && skaffold run -p dev

up-prod:
	cd ./infra/kustomize && kubectl apply -f ./fe/manifests/prod.yml && kubectl apply -f ./be/manifests/prod.yml && kubectl apply -f ./bff/manifests/prod.yml

up-dev-watch:
	cd ./cicd && skaffold dev -p dev

down-dev:
	cd ./cicd && skaffold delete -p dev

down-prod:
	cd ./infra/kustomize && kubectl delete -f ./fe/manifests/prod.yml && kubectl delete -f ./be/manifests/prod.yml && kubectl delete -f ./bff/manifests/prod.yml

build-dev:
	cd ./cicd && skaffold build -p dev

up-istio-operator:
	istioctl operator init

down-istio-operator:
	istioctl operator remove

up-sealed-secret:
	cd ./infra/sealed-secrets && ./scripts/init.sh
