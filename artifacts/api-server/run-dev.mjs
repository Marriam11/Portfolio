import { spawnSync } from 'node:child_process';

const env = { ...process.env, NODE_ENV: 'development', PORT: process.env.PORT ?? '5000' };

const build = spawnSync('node', ['./build.mjs'], {
  stdio: 'inherit',
  env,
});

if (build.error) {
  console.error('Build failed to start:', build.error);
  process.exit(1);
}

if (build.status !== 0) {
  console.error(`Build failed with exit code ${build.status ?? 1}`);
  process.exit(build.status ?? 1);
}

const start = spawnSync('node', ['--enable-source-maps', './dist/index.mjs'], {
  stdio: 'inherit',
  env,
});

if (start.error) {
  console.error('Server failed to start:', start.error);
  process.exit(1);
}

process.exit(start.status ?? 1);
