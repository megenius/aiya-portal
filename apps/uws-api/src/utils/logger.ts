type LogLevel = "info" | "warn" | "error" | "debug";

interface AnsiColors {
  reset: string;
  bright: string;
  dim: string;
  [key: string]: string;
}

export class Logger {
  private readonly service: string;
  private readonly colors: AnsiColors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    info: "\x1b[36m",    // Cyan
    warn: "\x1b[33m",    // Yellow
    error: "\x1b[31m",   // Red
    debug: "\x1b[35m",   // Magenta
    timestamp: "\x1b[90m" // Gray
  };

  constructor(service: string) {
    this.service = service;
  }

  private formatMessage(level: LogLevel, message: string, context?: any): string {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      service: this.service,
      level,
      message,
      ...(context && { context })
    };

    const { c } = this.colors;
    const formattedTimestamp = `${this.colors.timestamp}${timestamp}${this.colors.reset}`;
    const formattedLevel = `${this.colors[level]}${level.toUpperCase()}${this.colors.reset}`;
    const formattedService = `${this.colors.bright}[${this.service}]${this.colors.reset}`;
    
    let output = `${formattedTimestamp} ${formattedLevel} ${formattedService} ${message}`;
    
    if (context) {
      output += '\n' + this.colors.dim + JSON.stringify(context, null, 2) + this.colors.reset;
    }

    return output;
  }

  private log(level: LogLevel, message: string, context?: any): void {
    const formattedMessage = this.formatMessage(level, message, context);
    console.log(formattedMessage);
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
