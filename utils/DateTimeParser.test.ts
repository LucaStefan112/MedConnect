import DateTimeParser from './DateTimeParser';

describe('DateTimeParser', () => {
    describe('parseDate', () => {
        test('returns the formatted date string', () => {
            const date = new Date('2023-05-15');
            const formattedDate = DateTimeParser.parseDate(date);
            expect(formattedDate).toBe('2023-05-15');
        });
    });

    describe('parseTime', () => {
        test('returns the formatted time string', () => {
            const date = new Date('2023-05-15T09:30:00');
            const formattedTime = DateTimeParser.parseTime(date);
            expect(formattedTime).toBe('09:30');
        });
    });
});
