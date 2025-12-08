#!/usr/bin/env bash
set -euo pipefail

# Usage:
# ./docker-build-and-push.sh username/repo:tag
# or
# DOCKER_HUB_REPO=username/repo:tag ./docker-build-and-push.sh
# Ensure you ran: docker login

if [ -n "${1:-}" ]; then
  IMAGE="$1"
elif [ -n "${DOCKER_HUB_REPO:-}" ]; then
  IMAGE="$DOCKER_HUB_REPO"
else
  echo "ERROR: Provide target image as first arg (username/repo:tag) or set DOCKER_HUB_REPO"
  echo "Usage: ./docker-build-and-push.sh username/repo:tag"
  exit 1
fi

LOCAL_TAG="ebac_modulo_22:local"

echo "Building local image: $LOCAL_TAG"
docker build -t "$LOCAL_TAG" .

echo "Tagging $LOCAL_TAG -> $IMAGE"
docker tag "$LOCAL_TAG" "$IMAGE"

echo "Pushing image to Docker Hub: $IMAGE"
docker push "$IMAGE"

echo "Push complete: $IMAGE"
