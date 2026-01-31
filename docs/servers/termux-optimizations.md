#  Termux Optimization Guide

This document defines **hard limits**, **operational rules**, and **required settings** for running long-lived services on Android using Termux.

Termux is powerful, but **hostile by default** to background workloads.

---

##  Hard Limits (Non-Negotiable)

Android + Termux has unavoidable constraints:

- No `systemd`
- No Docker
- Aggressive background process killing
- No privileged ports (<1024)
- No guaranteed process lifetime

Design must **work within these limits**.

---

##  Operational Rules

The following rules are mandatory:

- **One service = one process**
- **Use `tmux`** for all long-running services
- **No critical data stored locally**
- Services must tolerate unexpected restarts

If a service cannot restart cleanly, it does **not** belong on Termux.

---

##  Startup Management

All services are started via a single script.

**Location**
```text
~/start-services.sh
```

```
tmux new -d -s dns "~/adguard/AdGuardHome"
tmux new -d -s radar "cd ~/sophia && python main.py"
```

 ##  Mandatory Settings

!!! danger "Required for Stability"
    These settings are **not optional**.  
    Without them, Android **will kill background services**.

    - **Disable battery optimization** for Termux
    - **Allow background activity**
    - **Lock Termux in recent apps**

> If these settings are not applied, the system **is expected to fail**.

