#  Disaster Recovery

##  Goals
- Restore system functionality quickly
- Preserve critical data
- Minimize downtime

---

##  Common Failure Scenarios
- System fails to boot
- Network or DNS outage
- Service crash or misconfiguration
- Disk or filesystem corruption
- Accidental deletion or overwrite

---

##  Recovery Procedure

### 1. Boot into Recovery Environment
- Use Arch ISO / Live USB
- Ensure internet connectivity

```bash
ip a
ping -c 3 archlinux.org
```
## 2. Mount Existing System
```
mount /dev/sda2 /mnt          # Root
mount /dev/sda1 /mnt/boot     # EFI
```
Adjust device names as required.

## 3. Chroot into Installed System
```
arch-chroot /mnt
```
## 4. Repair Bootloader (UEFI)
```
bootctl install
```
OR (GRUB):
```
grub-install --target=x86_64-efi --efi-directory=/boot
grub-mkconfig -o /boot/grub/grub.cfg
```
## 5. Network & DNS Recovery
```
systemctl restart NetworkManager
resolvectl status
```
DNS test:
```
dig google.com
```
## 6. Restore from Backup

rsync-based restore
```
rsync -aAXv /backup/rootfs/ /mnt/
```

tar archive restore
```
tar -xpvf backup.tar.gz -C /mnt
```

## 7. Verify System Services
```
systemctl --failed
systemctl status sshd
```

## 8. Reboot System
```
exit
umount -R /mnt
reboot
```


## Prevention & Best Practices
Scheduled Backups
```
rsync -aAX --delete / /backup/rootfs/
```
Snapshot (Btrfs)
```
btrfs subvolume snapshot / /@snapshot-pre-upgrade
```
Health Monitoring :

- Disk usage: **df -h**
- Disk health: **smartctl -a /dev/sda**
- Critical logs: **journalctl -p 3 -xb**

🧠 Reminder

If you haven’t tested recovery, you don’t have a backup — you have hope.

---
