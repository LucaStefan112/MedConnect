export interface IParsedDate {
  date: {
    year: number;
    month: number;
    day: number;
  };

  time: {
    hours: number;
    minutes: number;
  };
}

export default class DateTimeParser {
  public static parseDate(date: Date): string {
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `${date.getFullYear()}-${month}-${day}`;
  }

  public static parseTime(date: Date): string {
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    
    return `${hours}:${minutes}`;
  }

  public static isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  }

  public static isSameInterval(date1: Date, date2: Date): boolean {
    return date1.getHours() === date2.getHours() &&
      date1.getMinutes() === date2.getMinutes();
  }
}