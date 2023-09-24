import winston from 'winston';

// Configure Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Customize timestamp format
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}] ${message}`;
    })
  ),
  defaultMeta: { service: 'elysia' },
  transports: [
    new winston.transports.Console(),
    // You can add more transports here if needed (e.g., file transport)
  ],
});
const errorLogger = winston.createLogger({
    level: 'error',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Customize timestamp format
      winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level.toUpperCase()}] ${message}`;
      })
    ),
    defaultMeta: { service: 'elysia' },
    transports: [
      new winston.transports.Console(),
      // You can add more transports here if needed (e.g., file transport)
    ],
  });

  export { logger, errorLogger };