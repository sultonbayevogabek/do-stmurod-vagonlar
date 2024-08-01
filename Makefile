#REGISTRY=registry.unicon.uz
TAG=latest
ENV_TAG=latest
PROJECT_NAME=${PROJECT_NAME}
CURRENT_DIR=$(shell pwd)
APP=$(shell basename ${CURRENT_DIR})

build-image-master:
	docker build --rm --build-arg config=production -t ${REGISTRY}/${PROJECT_NAME}/${APP}:${TAG} .
	docker tag ${REGISTRY}/${PROJECT_NAME}/${APP}:${TAG} ${REGISTRY}/${PROJECT_NAME}/${APP}:${ENV_TAG}

build-image-development:
	docker build --rm --build-arg config=development-build -t ${REGISTRY}/${PROJECT_NAME}/${APP}:${TAG} .
	docker tag ${REGISTRY}/${PROJECT_NAME}/${APP}:${TAG} ${REGISTRY}/${PROJECT_NAME}/${APP}:${ENV_TAG}

push-image:
	docker push ${REGISTRY}/${PROJECT_NAME}/${APP}:${TAG}
	docker push ${REGISTRY}/${PROJECT_NAME}/${APP}:${ENV_TAG}
