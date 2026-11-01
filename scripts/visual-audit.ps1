param([string]$Dependencies = (Join-Path $env:TEMP "classji-windows-playwright"))

$ErrorActionPreference = "Stop"
if (-not (Test-Path (Join-Path $Dependencies "playwright"))) {
    python -m pip install --disable-pip-version-check --target=$Dependencies playwright
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}
$env:PYTHONPATH = $Dependencies
python (Join-Path $PSScriptRoot "visual_audit.py")
exit $LASTEXITCODE
