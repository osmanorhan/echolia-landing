---
title: Troubleshooting
description: Common issues and solutions
section: Reference
order: 50
---

Common issues and their solutions. If you don't find your issue here, reach out on [Twitter](https://x.com/echoliaX) or [email us](mailto:ping@echolia.com).


---

## Installation Issues

### macOS: "Cannot open because it is from an unidentified developer"

**Solution:**
1. Right-click echolia in Applications
2. Click "Open"
3. Click "Open" again in the dialog
4. Grant permissions in System Preferences -> Privacy & Security

Alternatively:
```bash
xattr -cr /Applications/echolia
```

### Windows: "Windows protected your PC" warning

**Solution:**
1. Click "More info"
2. Click "Run anyway"

This appears because Echolia is not yet code-signed with an expensive certificate. We're a small team building thoughtfully.


---

## Data Issues

### Where are my thoughts stored?

**macOS:**
```
~/Library/Application Support/Echolia/echolia.db
```

**Windows:**
```
%APPDATA%\Echolia\echolia.db
```

**Linux:**
```
~/.local/share/echolia/echolia.db
```

---

## Common Questions

### Can I use Echolia offline?

**Yes.** Echolia is local-first. All your data is on your device.

Sync (coming soon) will work offline and sync when reconnected.

### Can I export my data?

**Yes.**
Go to Settings -> Data -> Export 

### Can I use Echolia on multiple devices?

**Soon:** Automatic sync across all devices

---

## Still Stuck?

We're here to help:

- **Email:** ping@echolia.com
- **Twitter:** [@echoliaX](https://x.com/echoliaX)

Include:
- Your OS and version
- Echolia version 
- What you were trying to do
- What happened instead
- Any error messages

