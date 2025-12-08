#!/usr/bin/env bash
set -euo pipefail

# Usage:
# DOCKER_HUB_REPO=username/repo:tag ./docker-build-and-push.sh
# Ensure you ran: docker login

if [ -z "${DOCKER_HUB_REPO:-}" ]; then
  echo "ERROR: Please set DOCKER_HUB_REPO (e.g. username/repo:tag)"
  exit 1
fi

IMAGE="$DOCKER_HUB_REPO"

echo "Building Docker image: $IMAGE"
docker build -t "$IMAGE" .

echo "Built image: $IMAGE"

echo "Pushing image to Docker Hub: $IMAGE"
docker push "$IMAGE"

echo "Push complete."
