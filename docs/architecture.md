<span class="doc-pill">Architecture</span> <span class="doc-pill">Overview</span> <span class="doc-pill">Design</span>

# System Architecture & Topology

High-level architecture overview of the dual-server homelab setup utilizing **Arch Linux**, **Proxmox VE**, **Android Termux**, and **Tailscale Zero Trust**.

---

## Architectural Diagram

![Homelab System Architecture](assets/architecture_diagram.png)

---

## Network & Traffic Flow

Traffic entering the network is routed via **Tailscale Encrypted Mesh** to **Nginx Proxy Manager**, which terminates SSL certificates and routes connections to internal containers.

```mermaid
flowchart TD
    subgraph ExternalClient [External Client Device]
        User["Client Device"]
    end

    subgraph TailscaleMesh [Tailscale Mesh Network]
        Tailscale["Tailscale VPN Gateway"]
    end

    subgraph ServerA [Server A: Lenovo Laptop]
        NPM["Nginx Proxy Manager"]
        Immich["Immich Photo Storage"]
        Jellyfin["Jellyfin Media"]
        Grafana["Prometheus and Grafana"]
    end

    subgraph ServerB [Server B: Android Device]
        AdGuard["AdGuard Home DNS"]
    end

    User --> Tailscale
    Tailscale --> NPM
    NPM --> Immich
    NPM --> Jellyfin
    NPM --> Grafana
    Tailscale --> AdGuard
```

---

## Service Layer Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    actor User as Client App
    participant NPM as Nginx Proxy Manager
    participant Auth as Access Control List
    participant Service as Internal Microservice
    participant DB as Redis / Postgres DB

    User->>NPM: HTTPS Request (e.g. https://immich.lab)
    NPM->>Auth: Validate Access List / Host Header
    Auth-->>NPM: Authorized
    NPM->>Service: Proxy Pass HTTP Request
    Service->>DB: Read / Write Data
    DB-->>Service: DB Response
    Service-->>NPM: Service Response Payload
    NPM-->>User: Encrypted TLS Response
```

---

## Component Roles

### 1. Server A (Lenovo Arch Linux / Proxmox VE)
- **Primary Compute Host**: Runs Docker engine and LXC containers for resource-heavy workloads (Immich AI indexing, Jellyfin transcoding, Prometheus metrics).
- **SSL Termination**: Nginx Proxy Manager handles Let's Encrypt certificates and internal domain mapping (`*.lab`).

### 2. Server B (Android Termux)
- **Always-On Low Power Node**: Handles lightweight, high-uptime core services such as **AdGuard Home DNS** and secondary network monitoring.
- **Failover Node**: Acts as a backup gateway in the Tailscale mesh.
