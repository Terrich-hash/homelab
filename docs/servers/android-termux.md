#  Android Termux Server

The Android device running **Termux** functions as a **lightweight edge node** in the homelab.

It is intentionally **stateless**, **low power**, and **disposable**.

---

##  Environment

- Android device
- Termux (installed via F-Droid)
- Linux userspace (proot)

This environment provides flexibility, not durability.

---

##  Services

The following services may run on the Android node:

- **AdGuard / Pi-hole** — DNS and ad blocking
- **Sophia Radar System** — monitoring and lightweight automation
- **Network utilities** — diagnostics and helpers

All services are accessed **only via Tailscale**.

---

##  Purpose

The Android Termux server exists to provide:

- **Always-on availability**
- **Very low power consumption**
- **Network intelligence**

It is a **network brain**, **not a storage node**.

---

##  Design Rule: Data Separation

!!! danger "Non-Negotiable Rule"
    **Important data must live separately from replaceable data.**

    Android devices **must never** be the primary storage location for:
    - Databases
    - Secrets or API keys
    - Backups
    - User data

    Android + Termux **must be treated as disposable infrastructure**.

---

##  Why This Rule Exists

- Android can kill background services at any time
- App data may be wiped by the OS or user without warning
- Termux does not provide durability guarantees
- Mobile storage is not designed for long-term persistence

This is an **architectural constraint**, not a limitation.

---

##  Where Critical Data MUST Live

| Data Type | Approved Location |
|---------|------------------|
| Databases | Remote server / NAS |
| Secrets | Secure vault or environment injection |
| Backups | Off-device storage |
| Logs (long-term) | Centralized log server |

If data matters, it **does not belong on Android**.

---

##  What IS Allowed on Android

The following are explicitly permitted:

- DNS cache
- Temporary files
- Stateless services
- Monitoring agents
- Ephemeral runtime data

Everything here must be **safe to lose**.

---

##  Failure Model

> If this device is lost, wiped, or factory-reset:

- No important data is lost
- No recovery from backups is required
- Services are restored via **redeploy only**

If recovery requires data restoration, **the design is wrong**.
