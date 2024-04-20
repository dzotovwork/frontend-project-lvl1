#!/usr/bin/env node

import { getUserName } from '../src/index.js';

const name = getUserName();
console.log(`Hello, ${name}!`);
