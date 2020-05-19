#!/bin/bash

# This runs quicktype, without building.
#
# In practice this runs an order of magnitude faster.

$allArgs = $PsBoundParameters.Values + $args
$scriptPath = Split-path -parent $MyInvocation.MyCommand.Definition
$SKIP_BUILD="true"
&"$scriptPath/quicktype.ps1" "$allArgs"
