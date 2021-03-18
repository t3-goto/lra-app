up-local:
	cd ./infra/local/docker && docker-compose up -d db cache

down-local:
	cd ./infra/local/docker && docker-compose down

seed-local:
	cd ./infra/local/db/scripts && ./init-mysql.sh

k8s-build-apl-dev:
	cd ./infra/k8s-apl && ./fe/scripts/build.sh dev && ./be/scripts/build.sh dev && ./bff/scripts/build.sh dev

k8s-build-apl-prod:
	cd ./infra/k8s-apl && ./fe/scripts/build.sh prod && ./be/scripts/build.sh prod && ./bff/scripts/build.sh prod

up-apl-dev:
	cd ./infra/skaffold && skaffold run -p dev

up-apl-prod:
	cd ./infra/k8s-apl && ./fe/scripts/apply.sh prod && ./be/scripts/apply.sh prod && ./bff/scripts/apply.sh prod

up-apl-dev-watch:
	cd ./infra/skaffold && skaffold dev -p dev

down-apl-dev:
	cd ./infra/skaffold && skaffold delete -p dev

down-apl-prod:
	cd ./infra/k8s-apl && ./fe/scripts/delete.sh prod && ./be/scripts/delete.sh prod && ./bff/scripts/delete.sh prod

build-apl-dev:
	cd ./infra/skaffold && skaffold build -p dev

up-istio-prod:
	cd ./infra/istio && ./scripts/setup.sh prod

up-istio-dev:
	cd ./infra/istio && ./scripts/setup.sh dev

down-istio:
	cd ./infra/istio && ./scripts/down.sh

up-sealed-secrets:
	cd ./infra/sealed-secrets && ./scripts/setup.sh

up-metrics-server:
	cd ./infra/metrics-server && ./scripts/setup.sh

k8s-build-core-dev:
	cd ./infra/k8s-core && ./application/scripts/build.sh dev && ./externals/scripts/build.sh dev

k8s-build-core-prod:
	cd ./infra/k8s-core && ./application/scripts/build.sh prod && ./externals/scripts/build.sh prod

up-core-dev:
	cd ./infra/k8s-core && ./application/scripts/apply.sh dev && ./externals/scripts/apply.sh dev

up-core-prod:
	cd ./infra/k8s-core && ./application/scripts/apply.sh prod && ./externals/scripts/apply.sh prod

down-core-dev:
	cd ./infra/k8s-core && ./application/scripts/delete.sh dev && ./externals/scripts/delete.sh dev

down-core-prod:
	cd ./infra/k8s-core && ./application/scripts/delete.sh prod && ./externals/scripts/delete.sh prod
