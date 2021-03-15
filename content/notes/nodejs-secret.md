---
title: Generate secret key in node.js
tags:
  - nodejs
---

in code:
```js
require('crypto').randomBytes(48).toString('hex')
```

in shell:
```sh
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```
