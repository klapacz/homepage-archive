---
title: Create systemd service for node.js app
tags:
  - nodejs
  - systemd
---

create file `/etc/systemd/system/your-app.service`

```ini
[Unit]
Description=Node.js app
After=network.target

[Service]
Environment=NODE_ENV=production
Type=simple
WorkingDirectory=/path/to/work/dir/
ExecStart=/usr/bin/node /absolute/path
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

then in shell

```sh
systemctl daemon-reload
systemctl start your-app
systemctl status your-app
```
