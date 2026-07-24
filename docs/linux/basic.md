<span class="doc-pill">Basic</span> <span class="doc-pill">Linux</span> <span class="doc-pill">Setup</span>

# Basic Linux Configuration

Initial post-install steps for Linux systems.

## Base Packages

```bash
sudo pacman -S --needed base-devel git vim zsh curl wget htop
```

## Shell Setup

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
