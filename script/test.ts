#!/usr/bin/env ts-node

import * as shell from "shelljs";

shell.exec((process.platform === "win32" ? "powershell " : "") + "./script/test");