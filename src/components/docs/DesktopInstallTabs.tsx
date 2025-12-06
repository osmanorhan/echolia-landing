import * as Tabs from '@radix-ui/react-tabs';

export function DesktopInstallTabs() {
  return (
    <Tabs.Root defaultValue="windows" className="os-tabs">
      <Tabs.List className="os-tab-list">
        <Tabs.Trigger
          value="windows"
          className="os-trigger"
        >
          <span className="os-tab-icon">🪟</span>
          <span>Windows</span>
        </Tabs.Trigger>
        <Tabs.Trigger
          value="macos"
          className="os-trigger"
        >
          <span className="os-tab-icon"></span>
          <span>macOS</span>
        </Tabs.Trigger>
        <Tabs.Trigger
          value="linux"
          className="os-trigger"
        >
          <span className="os-tab-icon">🐧</span>
          <span>Linux</span>
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="windows" className="space-y-4">
        <h3>Windows</h3>

        <h4>Requirements</h4>
        <ul>
          <li>Windows 10 or later (64-bit)</li>
          <li>200MB free disk space</li>
          <li>Administrator access for installation</li>
        </ul>

        <h4>Installation steps</h4>
        <ol>
          <li>
            <strong>Download the installer</strong>
            <br />
            Download the latest Echolia installer (<code>.exe</code>) from the{' '}
            <a href="/download">downloads page</a>.
          </li>
          <li>
            <strong>Run the installer</strong>
            <br />
            Double-click the downloaded file and follow the installation wizard.
          </li>
          <li>
            <strong>Launch Echolia</strong>
            <br />
            Find Echolia in your Start menu or desktop shortcut.
          </li>
        </ol>

        <p>The Windows installer will automatically:</p>
        <ul>
          <li>
            Install to <code>C:\Program Files\Echolia</code>
          </li>
          <li>Create Start menu and desktop shortcuts</li>
        </ul>
      </Tabs.Content>

      <Tabs.Content value="macos" className="space-y-4">
        <h3>macOS</h3>

        <h4>Requirements</h4>
        <ul>
          <li>macOS 11 (Big Sur) or later</li>
          <li>Apple Silicon (M)</li>
          <li>200MB free disk space</li>
        </ul>

        <h4>Installation steps</h4>
        <ol>
          <li>
            <strong>Download the disk image</strong>
            <br />
            Download the latest Echolia disk image (<code>.dmg</code>) from the{' '}
            <a href="/download">downloads page</a>.
          </li>
          <li>
            <strong>Mount and install</strong>
            <br />
            Open the <code>.dmg</code>, drag Echolia to your Applications folder, then eject the disk image.
          </li>
          <li>
            <strong>First launch</strong>
            <br />
            On first launch, you may need to right-click and choose "Open" to bypass Gatekeeper and grant permissions in
            System Settings &gt; Privacy &amp; Security.
          </li>
        </ol>
      </Tabs.Content>

      <Tabs.Content value="linux" className="space-y-4">
        <h3>Linux</h3>

        <h4>Ubuntu / Debian</h4>
        <pre>
          <code>
            {`# Add Echolia repository
wget -qO- https://echolia.com/linux/key.asc | sudo apt-key add -
echo "deb https://echolia.com/linux/deb stable main" | sudo tee /etc/apt/sources.list.d/echolia.list

# Install
sudo apt update
sudo apt install echolia`}
          </code>
        </pre>

        <h4>Arch Linux</h4>
        <pre>
          <code>yay -S echolia</code>
        </pre>

        <h4>AppImage (universal)</h4>
        <ol>
          <li>
            Download the latest Echolia AppImage (<code>.AppImage</code>) from the{' '}
            <a href="/download">downloads page</a>.
          </li>
          <li>
            Make it executable: <code>chmod +x echolia.AppImage</code>
          </li>
          <li>
            Run: <code>./echolia.AppImage</code>
          </li>
        </ol>
      </Tabs.Content>
    </Tabs.Root>
  );
}
