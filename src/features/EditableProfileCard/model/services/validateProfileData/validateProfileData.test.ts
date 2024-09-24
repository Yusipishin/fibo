import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
    id: '1',
    username: 'admin',
    age: 22,
    lastname: 'Yus',
    city: 'Ukhta',
    firstname: 'Alexey',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and lastname', async () => {
        const result = validateProfileData({
            ...data,
            firstname: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: 1000 });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, city: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });
});
