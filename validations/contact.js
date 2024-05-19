import { create, test, enforce, only } from "vest";

const suite = create((data = {}, currentField) => {
  only(currentField);

  test("email", "אימייל לא תקין", () => {
    enforce(data.email).isEmail();
  });

  test("name", "זהו שדה חובה", () => {
    enforce(data.name).isNotEmpty();
  });

  test("name", "מקסימום 30 תווים", () => {
    enforce(data.name).shorterThanOrEquals(30);
  });
  test("name", "מינימום 3 תווים", () => {
    enforce(data.name).enforce(data.name).longerThanOrEquals(3);
  });

  test("number", "זהו שדה חובה", () => {
    enforce(data.number).isNotEmpty();
  });

  test("number", "מספר פלאפון חייב להיות בין 7 ל10 תווים", () => {
    enforce(data.number).isBetween(7, 10);
  });

  test("number", "חייב להכיל מספרים בלבד", () => {
    enforce(data.number).isNumeric();
  });

  test("message", "זהו שדה חובה", () => {
    enforce(data.message).isNotEmpty();
  });

  test("message", "מקסימום 200 תווים", () => {
    enforce(data.message).shorterThanOrEquals(200);
  });
});

export default suite;
