import { spawn } from "node:child_process";

const forwardedArgs = process.argv
  .slice(2)
  .filter((argument) => argument !== "--strictPort")
  .map((argument) => (argument === "--host" ? "--hostname" : argument));

const nextProcess = spawn(
  process.platform === "win32" ? "next.cmd" : "next",
  ["dev", ...forwardedArgs],
  { stdio: "inherit", shell: false }
);

nextProcess.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});
