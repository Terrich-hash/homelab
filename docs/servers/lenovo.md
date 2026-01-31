# 🖥️ Lenovo Arch Linux Server

The Lenovo laptop running **Arch Linux** acts as the **primary homelab node**.

It is the **only machine** trusted with persistent data and heavy workloads.

---

##  Role

Primary server responsible for:

- Media services
- Photo management
- Internal reverse proxy
- Persistent storage

This node is considered **stateful and durable**.

---

##  Services Hosted

The following services run on the Lenovo server:

- **Immich** — photo storage and management
- **Jellyfin** — media streaming
- **Plex** — media streaming
- **Nginx Proxy Manager** — internal reverse proxy

All services are accessible **only via Tailscale**.

---

##  Why Lenovo?

The Lenovo laptop was chosen for stability and reliability:

- Stable and continuous power
- Better CPU compared to mobile devices
- Supports persistent internal storage
- Suitable for long-running services

---

##  Why a Laptop?

Using a laptop as a server provides practical advantages:

- Built-in battery acts as a **mini-UPS**
- Lower power consumption than desktops
- Designed for long uptime
- Reliable consumer-grade hardware

---

## Storage Layout

Persistent data is clearly separated by importance:

```text

/srv/photos    → critical user data (must be backed up)
/srv/media     → replaceable media content
/srv/services  → service configs and state
```