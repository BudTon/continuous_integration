import loadUser from "../loadUser.js";
import { httpGet } from "../http.js";
jest.mock('../http.js');

beforeEach(() => {
    jest.resetAllMocks();
});
test('should call loadUser once', () => {
    httpGet.mockReturnValue(JSON.stringify({}));
    loadUser(1);
    expect(httpGet).toBeCalledWith('http://server:8080/esers/1');
});

// test.each([
//     ['gold', undefined],
//     ['silver', undefined],
//     ['regular', undefined],
//     ['no', undefined],
// ])
//     ('testing httpGet with date %s', (date, expected) => {
//         const result = httpGet(date);
//         expect(result).toBe(expected);
//     })