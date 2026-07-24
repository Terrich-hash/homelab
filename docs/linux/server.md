<span class="doc-pill">Server</span> <span class="doc-pill">Linux</span> <span class="doc-pill">Setup</span>

# Linux Server Hardening & Config

Server configuration and security baseline.

## SSH Hardening

```etc
# /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

## Firewall Setup (UFW)

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw enable
```
