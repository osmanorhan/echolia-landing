---
title: Installation
description: How to install Echolia on Windows, macOS, Linux, and mobile devices
section: Getting Started
order: 1
---

# Installation

Echolia is available for all major platforms. Choose your operating system below to get started.

## Windows

### Requirements
- Windows 10 or later (64-bit)
- 200MB free disk space
- Administrator access for installation

### Installation Steps

1. **Download the installer**
   Download `Echolia-Setup.exe` from the [downloads page](/download)

2. **Run the installer**
   Double-click the downloaded file and follow the installation wizard

3. **Launch Echolia**
   Find Echolia in your Start menu or desktop shortcut

The Windows installer will automatically:
- Install to `C:\Program Files\Echolia`
- Create a desktop shortcut
- Add Echolia to your system PATH
- Set up file associations for `.echo` files

---

## macOS

### Requirements
- macOS 11 (Big Sur) or later
- Apple Silicon (M1/M2/M3) or Intel processor
- 200MB free disk space

### Installation Steps

1. **Download the disk image**
   Download `Echolia.dmg` from the [downloads page](/download)

2. **Mount and install**
   - Open the `.dmg` file
   - Drag Echolia to your Applications folder
   - Eject the disk image

3. **First launch**
   On first launch, you may need to:
   - Right-click → Open (to bypass Gatekeeper)
   - Grant permissions in System Preferences → Privacy & Security

### Installing via Homebrew

```bash
brew install --cask echolia
```

---

## Linux

### Ubuntu / Debian

```bash
# Add Echolia repository
wget -qO- https://echolia.app/linux/key.asc | sudo apt-key add -
echo "deb https://echolia.app/linux/deb stable main" | sudo tee /etc/apt/sources.list.d/echolia.list

# Install
sudo apt update
sudo apt install echolia
```

### Arch Linux

```bash
yay -S echolia
```

### AppImage (Universal)

1. Download `Echolia.AppImage` from the [downloads page](/download)
2. Make it executable: `chmod +x Echolia.AppImage`
3. Run: `./Echolia.AppImage`

---

## Mobile

### iOS

**Requirements:** iOS 15 or later

1. Open the App Store
2. Search for "Echolia"
3. Tap "Get" to install
4. Launch from your home screen

### Android

**Requirements:** Android 8.0 or later

1. Open Google Play Store
2. Search for "Echolia"
3. Tap "Install"
4. Launch from your app drawer

---

## Verifying Installation

After installation, verify Echolia is working:

```bash
echolia --version
```

You should see output like:
```
Echolia v0.1.0
```

---

## Next Steps

- [Quick Start Guide](/docs/quickstart) - Learn the basics
- [Configuration](/docs/configuration) - Customize your setup
- [Troubleshooting](/docs/troubleshooting) - Common issues
