type LogLevel = "info" | "warn" | "error" | "debug";

export class Logger {
  private readonly service: string;

  constructor(service: string) {
    this.service = service;
  }

  private log(level: LogLevel, message: string, context?: any): void {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      service: this.service,
      level,
      message,
      ...context,
    };
    console.log(JSON.stringify(logEntry));
  }

  info(message: string, context?: any): void {
    this.log("info", message, context);
  }

  warn(message: string, context?: any): void {
    this.log("warn", message, context);
  }

  error(message: string, context?: any): void {
    this.log("error", message, context);
  }

  debug(message: string, context?: any): void {
    this.log("debug", message, context);
  }
}
