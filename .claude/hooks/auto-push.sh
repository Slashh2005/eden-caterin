#!/usr/bin/env bash
# Safety net: when Claude finishes a turn, save any uncommitted changes and
# push them to GitHub so the repository is always up to date.
set -u
cd "$(dirname "$0")/../.." || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

branch="$(git rev-parse --abbrev-ref HEAD)"
[ "$branch" = "HEAD" ] && exit 0

if [ -n "$(git status --porcelain)" ]; then
  git add -A
  changed="$(git diff --cached --name-only | head -5 | paste -sd ', ' -)"
  git -c user.name="${GIT_AUTHOR_NAME:-Claude}" -c user.email="${GIT_AUTHOR_EMAIL:-noreply@anthropic.com}" \
    commit -q -m "Auto-save: ${changed}" || exit 0
fi

# Push only when there is something GitHub doesn't have yet.
git fetch -q origin "$branch" 2>/dev/null || true
if [ -z "$(git rev-parse -q --verify "origin/$branch")" ] || [ -n "$(git log "origin/$branch..HEAD" --oneline)" ]; then
  if git push -q -u origin "$branch" 2>/dev/null; then
    echo '{"systemMessage": "Changes pushed to GitHub."}'
  else
    echo '{"systemMessage": "Auto-push to GitHub failed; changes are committed locally."}'
  fi
fi
exit 0
