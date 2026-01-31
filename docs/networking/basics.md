# 🌐 Networking Basics

This document defines the **core networking principles** used across the homelab.

These rules apply to **all servers, services, and devices** unless explicitly stated otherwise.

---

##  Core Principles

### 1. No Public Exposure by Default
- No services are exposed directly to the internet
- No port forwarding on the router
- No public IP assumptions

Public access is treated as an **exception**, not the default.

---

### 2. Private Network First
All services operate on a **private network**:

- Internal LAN
- Tailscale overlay network

If a service cannot function privately, it does not belong in this setup.

---

### 3. Identity > IP Address
Access is based on **identity**, not source IPs.

- Devices are authenticated
- Users are authenticated
- Network location alone is never trusted

---

### 4. Assume Network Failure
The system is designed with the assumption that:
- Internet may go down
- Devices may disconnect
- Overlay networking may fail

Failure must result in **loss of access**, not **loss of data**.

---

## 🔁 High-Level Traffic Flow

```mermaid
flowchart LR
    Client --> PrivateNetwork
    PrivateNetwork --> Services
```