export function npmCommandToYarnCommand(command: string) {
  return command.replace("npm install", "yarn add")
}

export function npmCommandToPnpmCommand(command: string) {
  return command.replace("npm install", "pnpm add")
}

export function npmCommandToBunCommand(command: string) {
  return command.replace("npm install", "bun add")
}
