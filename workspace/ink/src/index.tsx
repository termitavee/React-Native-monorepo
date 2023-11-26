import { Command } from 'commander';
import { render } from 'ink';
import React from 'react';

import App from './app.js';

import packageJson from '../package.json';

const program = new Command();

program
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version)
  .option('-d,--dummy', 'dummy prop');

program.parse();

render(<App options={program.opts()} />);
