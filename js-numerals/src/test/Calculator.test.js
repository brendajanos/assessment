import numbersToWords from "../components/Calculator"
const jest = require('jest-mock');
jest.mock("../components/Calculator", jest.fn());




test('Expect the script to equal to the number', () => {
  expect(numbersToWords(99)).toBe("ninety-nine");
});
