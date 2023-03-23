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
}