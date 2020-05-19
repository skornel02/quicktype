# This runs quicktype, ensuring dependencies are installed
# and rebuilding quicktype first.
#
# Use script/quickertype to skip reinstalling dependencies
# and rebuilding PureScript for 10s faster runs if you
# are just working on TargetLanguage code in TypeScript.

$allArgs = $PsBoundParameters.Values + $args
$scriptPath = Split-path -parent $MyInvocation.MyCommand.Definition
$baseDir = Split-Path -parent $scriptPath
if(!$SKIP_BUILD){
    Set-Location $baseDir 
    npm run build > $null
}

node --stack_trace_limit=100 --max-old-space-size=4096 $baseDir/dist/cli/index.js $allArgs