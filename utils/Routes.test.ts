import Routes from './Routes';

describe('Routes', () => {
    test('returns the correct authentication application route', () => {
        expect(Routes.AUTH_APP).toBe('http://localhost:3000');
    });

    test('returns the correct home route', () => {
        expect(Routes.HOME).toBe('/');
    });

    test('returns the correct redirect route from authentication', () => {
        expect(Routes.REDIRECT_FROM_AUTH).toBe('/auth-redirect/:token');
    });

    test('returns the correct add appointment route', () => {
        expect(Routes.ADD_APPOINTMENT).toBe('/appointments/add');
    });

    test('returns the correct add schedule route', () => {
        expect(Routes.ADD_SCHEDULE).toBe('/schedule/add');
    });

    test('returns the correct appointments route', () => {
        expect(Routes.APPOINTMENTS).toBe('/appointments');
    });

    test('returns the correct appointment route', () => {
        const id = 123;
        expect(Routes.APPOINTMENT(id)).toBe(`/patientInfoPage?${id}`);
    });

    test('returns the correct analyses route', () => {
        expect(Routes.ANALYSES).toBe('/analyses');
    });

    test('returns the correct schedule route', () => {
        expect(Routes.SCHEDULE).toBe('/schedule');
    });

    test('returns the correct analysis route', () => {
        const id = 456;
        expect(Routes.ANALYSIS(id)).toBe(`/analyses/${id}`);
    });

    test('returns the correct my account route', () => {
        expect(Routes.MY_ACCOUNT).toBe('/my-account');
    });

    test('returns the correct signup route', () => {
        expect(Routes.SIGNUP).toBe('/signup');
    });

    test('returns the correct signin route', () => {
        expect(Routes.SIGNIN).toBe('/signin');
    });

    test('returns the correct logout route', () => {
        expect(Routes.LOGOUT).toBe('/logout');
    });

    test('returns the correct appointment list route', () => {
        expect(Routes.APPOINTMENTLIST).toBe('/appointmentsList');
    });

    test('returns the correct schedule list route', () => {
        expect(Routes.SCHEDULELIST).toBe('/scheduleList');
    });
});
