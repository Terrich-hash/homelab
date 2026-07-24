<span class="doc-pill">Docker</span> <span class="doc-pill">Cross-Platform</span> <span class="doc-pill">Installation</span>

# Docker Installation Guide

Quick guide to install Docker and Docker Compose across **macOS**, **Windows**, and **Linux**.

!!! info "Info"
    Select your operating system tab below for terminal commands.

---

## macOS Setup

=== "Homebrew (Docker Desktop)"

    ```bash
    # Install Docker Desktop via Homebrew
    brew install --cask docker

    # Launch Docker Desktop
    open /Applications/Docker.app
    ```

=== "OrbStack (Lightweight)"

    ```bash
    # Install OrbStack (Fast alternative to Docker Desktop)
    brew install orbstack

    # Start OrbStack service
    orb
    ```

=== "Colima (CLI / Daemon)"

    ```bash
    # Install Colima and Docker CLI
    brew install colima docker docker-compose

    # Start Colima background engine
    colima start
    ```

---

## Windows Setup

=== "Winget (PowerShell)"

    ```powershell
    # Run in PowerShell as Administrator
    winget install -e --id Docker.DockerDesktop

    # Verify Docker CLI & Compose
    docker --version
    docker compose version
    ```

=== "WSL 2 Backend"

    ```powershell
    # Install & enable WSL 2 engine
    wsl --install
    wsl --set-default-version 2
    ```

=== "Chocolatey"

    ```powershell
    # Install Docker Desktop using Choco
    choco install docker-desktop
    ```

---

## Linux Setup

=== "Arch Linux"

    ```bash
    sudo pacman -S docker docker-compose
    sudo systemctl enable --now docker
    sudo usermod -aG docker $USER
    ```

=== "Debian / Ubuntu / Proxmox LXC"

    ```bash
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    ```
