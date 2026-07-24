<span class="doc-pill">Desktop</span> <span class="doc-pill">Linux</span> <span class="doc-pill">Setup</span>

# Desktop

This page defines additional setup for my Desktop instance.

!!! info "Info"
    Run these using your standard user with `sudo` if required.

---

## Fonts

### Step 1: CD into Bench directory

```bash
cd ~/Bench
```

### Step 2: Clone Fonts repo

```bash
git clone git@github.com:Hudater/Fonts.git
```

### Step 3: Copy fonts to global fonts directory

```bash
sudo cp -r Fonts/* /usr/share/fonts/
fc-cache -fv
```

---

## FStab

### Local Storage

```etc
UUID=xxxx-xxxx-xxxx  /mnt/data  ext4  defaults,noatime  0  2
```

### SMB Mounts

```etc
//192.168.1.100/share  /mnt/smb  cifs  credentials=/etc/smbcredentials,iocharset=utf8  0  0
```

---

## rEFInd Bootloader

```bash
refind-install
```

---

## Kernel Parameters

```bash
# /etc/default/grub
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash amdgpu.ppfeaturemask=0xffffffff"
```
