import { ServerRoutes } from './ServerRoutes';
import { ISpecialisation } from '@/services/app.service';


describe('ServerRoutes', () => {
    test('GET_DOCTORS_BY_SPECIALISATION returns the correct route with specialisation', () => {
        const specialisation: ISpecialisation = { id: 1, name: 'Cardiology' };
        const expectedRoute = `/doctors/specialisation/${specialisation.id}`;
        expect(ServerRoutes.GET_DOCTORS_BY_SPECIALISATION(specialisation)).toBe(expectedRoute);
    });
    test('CHECK_AUTH returns the correct route with token', () => {
        const token = 'abc123';
        const expectedRoute = `/check-auth/${token}`;
        expect(ServerRoutes.CHECK_AUTH(token)).toBe(expectedRoute);
    });

    test('GET_DOCTORS_BY_SPECIALISATION returns the correct route with specialisation', () => {
        const specialisation = { id: 1, name: 'Cardiology' };
        const expectedRoute = `/doctors/specialisation/${specialisation.id}`;
        expect(ServerRoutes.GET_DOCTORS_BY_SPECIALISATION(specialisation)).toBe(expectedRoute);
    });
    // Add more tests for other routes as needed
});
