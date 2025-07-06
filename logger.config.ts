import { createLogger, format } from 'winston';
import LokiTransport from 'winston-loki';
import 'dotenv/config';

export const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new LokiTransport({
      host: process.env.LOKI_HOST || '',
      labels: { app: 'my-express', env: 'local' },
      basicAuth: process.env.LOKI_BASIC_AUTH,
    }),
  ],
});