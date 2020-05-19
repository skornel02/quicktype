$main="dist/cli/index.js"

npm install

mkdir -p bin/macos
mkdir -p bin/linux
mkdir -p bin/windows
npx pkg -t node8-macos-x64 -o bin/macos/quicktype "$main"
npx pkg -t node8-linux-x64 -o bin/linux/quicktype "$main"
npx pkg -t node8-win-x64 -o bin/windows/quicktype.exe "$main"
