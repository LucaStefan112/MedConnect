
import DateTimeParser from '../utils/DateTimeParser';

describe('DateTimeParser', () => {
    describe('parseDate', () => {
        it('should return a date in the format YYYY-MM-DD', () => {
        const date = new Date('2020-01-01');
        const expected = '2020-01-01';
        const actual = DateTimeParser.parseDate(date);
        expect(actual).toEqual(expected);
        });
    });
    
    describe('parseTime', () => {
        it('should return a time in the format HH:MM', () => {
        const date = new Date('2020-01-01T12:00:00');
        const expected = '12:00';
        const actual = DateTimeParser.parseTime(date);
        expect(actual).toEqual(expected);
        });
    });
    });
