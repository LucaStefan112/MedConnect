import DateTimeParser, { IParsedDate } from './DateTimeParser';

describe('DateTimeParser', () => {
  describe('parseDate', () => {
    it('should return the date in the format yyyy-mm-dd', () => {
      const date = new Date('2022-01-31');
      expect(DateTimeParser.parseDate(date)).toBe('2022-01-31');
    });
  });

  describe('parseTime', () => {
    it('should return the time in the format hh:mm', () => {
      const date = new Date('2022-01-31T14:30:00');
      expect(DateTimeParser.parseTime(date)).toBe('14:30');
    });
  });

  describe('isSameDay', () => {
    it('should return true if the dates are on the same day', () => {
      const date1 = new Date('2022-01-31T14:30:00');
      const date2 = new Date('2022-01-31T16:30:00');
      expect(DateTimeParser.isSameDay(date1, date2)).toBe(true);
    });

    it('should return false if the dates are on different days', () => {
      const date1 = new Date('2022-01-31T14:30:00');
      const date2 = new Date('2022-02-01T16:30:00');
      expect(DateTimeParser.isSameDay(date1, date2)).toBe(false);
    });
  });

  describe('isSameInterval', () => {
    it('should return true if the times are the same', () => {
      const date1 = new Date('2022-01-31T14:30:00');
      const date2 = new Date('2022-01-31T14:30:00');
      expect(DateTimeParser.isSameInterval(date1, date2)).toBe(true);
    });

    it('should return false if the times are different', () => {
      const date1 = new Date('2022-01-31T14:30:00');
      const date2 = new Date('2022-01-31T15:30:00');
      expect(DateTimeParser.isSameInterval(date1, date2)).toBe(false);
    });
  });
});
