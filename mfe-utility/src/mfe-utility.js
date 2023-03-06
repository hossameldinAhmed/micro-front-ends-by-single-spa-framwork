// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {}

// Anything exported from this file is importable by other in-browser modules.
export function getArabicDate(defaultDate) {
  // eslint-disable-next-line no-debugger
  debugger;
  let validateDate = new Date(defaultDate);
  if (validateDate instanceof Date) {
    return validateDate.toLocaleDateString("ar-EG-u-nu-latn", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  return null;
}
// eslint-disable-next-line no-console
