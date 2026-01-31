# Health Checks

## HTTP Check
```bash
curl -f http://localhost:PORT
```

- -f → fails on non-2xx responses
- Useful for verifying local services and reverse proxies

DNS Check
```
dig @ANDROID_TS_IP google.com
```

- Confirms DNS resolution through the Android/Tailscale node
- Replace **ANDROID_TS_IP** with the actual Tailscale IP