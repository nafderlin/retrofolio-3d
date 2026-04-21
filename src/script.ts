import './style.css';

import Application from './Application/Application';
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject({
  mode: 'production',
});

const app: Application = new Application();
