---
title: Troubleshooting
description: Common issues and solutions
section: Reference
order: 50
---

# Troubleshooting

Common issues and their solutions. If you don't find your issue here, reach out on [Twitter](https://twitter.com/echolia_app) or [email us](mailto:support@echolia.app).

---

## Installation Issues

### macOS: "Cannot open because it is from an unidentified developer"

**Solution:**
1. Right-click Echolia.app in Applications
2. Click "Open"
3. Click "Open" again in the dialog
4. Grant permissions in System Preferences → Privacy & Security

Alternatively:
```bash
xattr -cr /Applications/Echolia.app
```

### Windows: "Windows protected your PC" warning

**Solution:**
1. Click "More info"
2. Click "Run anyway"

This appears because Echolia is not yet code-signed with an expensive certificate. We're a small team building thoughtfully.

### Linux: AppImage won't run

**Solution:**
```bash
chmod +x Echolia.AppImage
./Echolia.AppImage
```

If you get libfuse errors:
```bash
sudo apt install libfuse2  # Ubuntu/Debian
```

---

## Performance Issues

### Slow startup

**Cause:** Large database (10,000+ thoughts)

**Solutions:**
1. Archive old thoughts (coming soon)
2. Rebuild database index:
   ```bash
   echolia --rebuild-index
   ```

### High CPU usage on Tumbolia view

**Cause:** Cellular automata animation on older hardware

**Solutions:**
1. Switch to Stream view (`Cmd+/`)
2. Reduce animation quality in Settings → Performance
3. Disable live effects:
   ```
   Settings → Appearance → Simplified graphics
   ```

### Lag when typing

**Cause:** Real-time search indexing

**Solution:**
Disable instant search in Settings → Search → "Index on save only"

---

## Sync Issues

*Note: Sync is coming soon. These will apply when available.*

### Thoughts not syncing

**Check:**
1. Settings → Sync → Status should show "Connected"
2. Check network connection
3. Try manual sync: `Cmd+Shift+S`

### Conflict resolution

When the same thought is edited on two devices:
1. Echolia creates an echo with both versions
2. You choose which to keep
3. Or merge them manually

---

## Search Issues

### Can't find a thought you know exists

**Solutions:**
1. Try partial words: `klei` finds `klein bottle`
2. Search by tag: `#topology`
3. Search by date: Use filters in search
4. Rebuild search index:
   ```bash
   echolia --rebuild-search
   ```

### Search is too slow

**Cause:** First-time indexing

**Solution:** Let it complete in background. Progress shown in status bar.

---

## Data Issues

### Where are my thoughts stored?

**macOS:**
```
~/Library/Application Support/Echolia/thoughts.db
```

**Windows:**
```
%APPDATA%\Echolia\thoughts.db
```

**Linux:**
```
~/.local/share/echolia/thoughts.db
```

### Backing up your data

**Automatic backups:**
Echolia creates daily backups in:
```
[data directory]/backups/
```

**Manual backup:**
```bash
echolia export --format json --output ~/echolia-backup.json
```

### Restoring from backup

```bash
echolia import ~/echolia-backup.json
```

Or just copy the `.db` file back to your data directory.

---

## Keyboard Shortcuts Not Working

### macOS

**Check:** System Preferences → Keyboard → Shortcuts → App Shortcuts

Make sure nothing conflicts with:
- `Cmd+Shift+E` (quick capture)
- `Cmd+K` (search)

### Windows/Linux

**Check:** Other apps (Discord, Slack) may capture these shortcuts first.

**Solution:** Customize shortcuts in Settings → Keyboard

---

## UI Issues

### Blank screen on launch

**Causes:**
1. Corrupted settings file
2. Graphics driver issue

**Solutions:**
1. Reset settings:
   ```bash
   echolia --reset-settings
   ```

2. Try safe mode:
   ```bash
   echolia --safe-mode
   ```

### Text rendering issues

**Solution:** Try different font rendering in Settings → Appearance → Font Rendering

Options:
- Default (system)
- Subpixel antialiasing
- Grayscale antialiasing

---

## Mobile-Specific Issues

### iOS: Keyboard covers input

**Solution:** This is a known iOS issue. Scroll down to reveal input.

### Android: Background sync not working

**Check:**
1. Settings → Battery → Echolia → Unrestricted
2. Settings → Apps → Echolia → Battery optimization → Don't optimize

---

## Crash Reports

### App crashes on startup

1. **Check logs:**
   - macOS: `~/Library/Logs/Echolia/`
   - Windows: `%APPDATA%\Echolia\logs\`
   - Linux: `~/.local/share/echolia/logs/`

2. **Try safe mode:**
   ```bash
   echolia --safe-mode
   ```

3. **Reinstall:**
   Your data is safe in the data directory. Reinstalling won't delete it.

### Reporting crashes

Send us:
1. Log file from above directory
2. What you were doing when it crashed
3. OS version and Echolia version

Email: support@echolia.app

---

## Common Questions

### Can I use Echolia offline?

**Yes.** Echolia is local-first. All your data is on your device.

Sync (coming soon) will work offline and sync when reconnected.

### Can I export my data?

**Yes.**
```bash
echolia export --format json
echolia export --format markdown
echolia export --format plaintext
```

### Is my data encrypted?

**Local encryption:** Optional in Settings → Security

**Sync encryption** (coming soon): End-to-end encrypted by default

### Can I use Echolia on multiple devices?

**Currently:** Export/import manually

**Soon:** Automatic sync across all devices

---

## Still Stuck?

We're here to help:

- **Email:** support@echolia.app
- **Twitter:** [@echolia_app](https://twitter.com/echolia_app)
- **GitHub Issues:** [github.com/echolia/echolia](https://github.com/echolia/echolia)

Include:
- Your OS and version
- Echolia version (`echolia --version`)
- What you were trying to do
- What happened instead
- Any error messages

We usually respond within 24 hours.
