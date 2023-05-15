import Images from './Images';
import applicationLogo from 'assets/images/application_logo.png';
import homeImage from 'assets/images/home_image.svg';

describe('Images', () => {
    test('exports the correct application logo path', () => {
        expect(Images.APPLICATION_LOGO).toBe(applicationLogo);
    });

    test('exports the correct home image path', () => {
        expect(Images.HOME_IMAGE).toBe(homeImage);
    });
});
