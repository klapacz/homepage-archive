---
title: Generate ssh secret and public key to stdout
tags:
  - ssh
---

```sh
mkfifo key key.pub && cat key key.pub & echo "y" | ssh-keygen -f key
rm key key.pub
```