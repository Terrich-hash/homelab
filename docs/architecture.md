#  Architecture Overview

This page provides a **concise overview** of the homelab architecture, focusing on **server roles**, **design principles**, and **core ideas**.

It is intended as a quick reference before diving into detailed architecture and networking documents.

---

## 🖥️ Servers

| Server | OS | Purpose |
|------|----|--------|
| **Lenovo Laptop** | Arch Linux | Main compute node and persistent storage |
| **Android Device** | Termux (Linux userspace) | DNS, monitoring, lightweight radar services |

---

##  Design Principles

The architecture follows these non-negotiable principles:

- **Heavy workloads stay on Lenovo**  
  Core services, storage, and compute-intensive tasks run only on stable hardware.

- **Android stays lightweight and disposable**  
  Android devices are treated as replaceable edge nodes with no critical data.

- **No public ports**  
  No service is exposed directly to the internet.

- **Identity-based access only**  
  Access is granted based on authenticated identity, not network location.

---

##  Key Ideas

These ideas guide all design decisions:

- **One job per machine**  
  Each node has a clearly defined role.

- **No public exposure**  
  All access happens through authenticated private networking.

- **Identity over IP**  
  Trust is never derived from LAN, WAN, or physical location.

---

##  Summary

This architecture:
- Keeps critical data centralized and protected
- Limits attack surface by design
- Treats edge devices as disposable
- Makes failure predictable and recoverable

All other documentation expands on the rules defined here.
