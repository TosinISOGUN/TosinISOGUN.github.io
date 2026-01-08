<#
Checks Node.js and npm availability, verifies `package.json` exists, and runs `npm i`.
Usage (PowerShell):
  PS> .\scripts\check_env.ps1
#>

$ErrorActionPreference = 'Stop'

Write-Host "Checking environment..." -ForegroundColor Cyan

# Helper to run a command and capture output
function Run-Command($cmd, $args) {
  $psi = New-Object System.Diagnostics.ProcessStartInfo
  $psi.FileName = $cmd
  $psi.Arguments = $args
  $psi.RedirectStandardOutput = $true
  $psi.RedirectStandardError = $true
  $psi.UseShellExecute = $false
  $psi.CreateNoWindow = $true

  $p = [System.Diagnostics.Process]::Start($psi)
  $stdout = $p.StandardOutput.ReadToEnd()
  $stderr = $p.StandardError.ReadToEnd()
  $p.WaitForExit()
  return @{ ExitCode = $p.ExitCode; StdOut = $stdout; StdErr = $stderr }
}

# Check node
try {
  $nodeVersion = (& node --version) 2>$null
  if ($LASTEXITCODE -ne 0) { throw }
  Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
  Write-Host "Node.js is not installed or not on PATH." -ForegroundColor Red
  Write-Host "Install from https://nodejs.org/ or use nvm-windows: https://github.com/coreybutler/nvm-windows"
  exit 1
}

# Check npm
try {
  $npmVersion = (& npm --version) 2>$null
  if ($LASTEXITCODE -ne 0) { throw }
  Write-Host "npm version: $npmVersion" -ForegroundColor Green
} catch {
  Write-Host "npm is not installed or not on PATH." -ForegroundColor Red
  Write-Host "Install Node.js (includes npm) or ensure npm is available on PATH."
  exit 1
}

# Ensure package.json exists
if (-not (Test-Path -Path "package.json")) {
  Write-Host "package.json not found in current directory: $(Get-Location)" -ForegroundColor Yellow
  Write-Host "Run this script from your project root (where package.json lives)."
  exit 1
}

# Run npm install
Write-Host "Running 'npm i' to install dependencies..." -ForegroundColor Cyan
$result = Run-Command "npm" "i"

Write-Host $result.StdOut
if ($result.StdErr) { Write-Host $result.StdErr -ForegroundColor Yellow }

if ($result.ExitCode -ne 0) {
  Write-Host "npm install failed with exit code $($result.ExitCode)." -ForegroundColor Red
  exit $result.ExitCode
}

Write-Host "Dependencies installed successfully." -ForegroundColor Green
Write-Host "You can now run: `npm run dev`" -ForegroundColor Cyan
exit 0
