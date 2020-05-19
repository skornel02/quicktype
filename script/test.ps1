$allArgs = $PsBoundParameters.Values + $args
$scriptPath = Split-path -parent $MyInvocation.MyCommand.Definition
$baseDir = Split-Path -parent $scriptPath

$env:NODE_PATH="$baseDir/node_modules"
$env:PATH+=";$baseDir/node_modules/.bin"

$oldTz = $env:TZ
$env:TZ="UTC"

try {
    ts-node --project test/tsconfig.json test/test.ts "$allArgs"
} finally {
    $env:TZ=$oldTz
}