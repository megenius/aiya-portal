export const toMillisecond = (value:number, unit : "second" | "minute" | "hour" | "day") => {
    const conversion = {
        second: 1000,
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000
    };
    return value * (conversion[unit] || conversion['minute']);
};