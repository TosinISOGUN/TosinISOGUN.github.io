# Environment Check (scripts/check_env)

This folder contains small helper scripts to verify your local Node.js environment and install dependencies for this project.

Files:

- `check_env.ps1` — PowerShell script for Windows. Usage:

  ```powershell
  # from project root
  .\scripts\check_env.ps1
  ```

- `check_env.sh` — Bash script for macOS / Linux / WSL. Usage:

  ```bash
  # make it executable once
  chmod +x scripts/check_env.sh
  ./scripts/check_env.sh
  ```

What the scripts do:

1. Verify that `node` and `npm` are installed and available on `PATH`.
2. Verify `package.json` exists in the current directory.
3. Run `npm i` to install project dependencies.

If `node`/`npm` are missing, the scripts print guidance and exit with a non-zero code. On Windows, consider installing Node.js from https://nodejs.org/ or using `nvm-windows` (https://github.com/coreybutler/nvm-windows) if you manage multiple versions.

After the scripts finish successfully, run:

```powershell
npm run dev
```

to start the Vite dev server.
