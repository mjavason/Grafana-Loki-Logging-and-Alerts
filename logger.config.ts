import { createLogger, format } from 'winston';
import LokiTransport from 'winston-loki';
import 'dotenv/config';

export const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new LokiTransport({
      host: 'http://localhost:3100',
      labels: { app: 'my-express', env: 'local' },
    }),
  ],
});

// console.log(process.env.LOKI_BASIC_AUTH);
// host: 'https://logs-prod-035.grafana.net',
