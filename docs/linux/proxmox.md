<span class="doc-pill">Proxmox</span> <span class="doc-pill">Linux</span> <span class="doc-pill">Virtualization</span>

# Proxmox VE Installation & Setup

Proxmox Virtual Environment (PVE) is a complete open-source platform for enterprise virtualization, combining KVM hypervisor and LXC containers.

!!! info "Info"
    Run these commands on your Proxmox host shell or via SSH using `root`.

---

## Installation Steps

### Step 1: Download Proxmox VE ISO

Download the latest ISO image from the official Proxmox download center and flash it to a USB drive using Rufus or Ventoy.

### Step 2: Boot and Install System

```bash
# Boot into installer, select target disk (ZFS or ext4)
# Configure management interface IP, Netmask, Gateway, and DNS
```

### Step 3: Post-Installation Repository Cleanup

Disable the enterprise subscription repository and enable the pve-no-subscription repository:

```bash
# Remove enterprise repo source
rm -f /etc/apt/sources.list.d/pve-enterprise.list

# Add no-subscription repository
echo "deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription" > /etc/apt/sources.list.d/pve-no-sub.list

# Update system
apt update && apt dist-upgrade -y
```

### Step 4: Remove Subscription Banner

```bash
sed -Ezi.bak "s/(Ext.Msg.show\(\{\s+title: gettext\('No valid sub)/void\(\{ \/\/\1/g" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js
systemctl restart pveproxy.service
```

---

## Virtualization & Containers

??? info "Virtualization Stack"

    * **LXC Containers**
        - [x] Docker Host LXC (Debian 12)
        - [x] Tailscale VPN Gateway LXC
        - [x] AdGuard Home DNS LXC
        - [x] Nginx Proxy Manager LXC

    * **Virtual Machines**
        - [x] Arch Linux Workstation VM
        - [x] Home Assistant OS VM
