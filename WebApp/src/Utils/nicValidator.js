export function validateNICWithBirthdate(nicNumber, birthdate) {
  if (nicNumber.length === 10 || nicNumber.length === 12) {
    let yearOfBirth = "";
    let dateOfYear = "";
    if (nicNumber.length === 12) {
      // Remove the last 2 characters (V or X)
      yearOfBirth = nicNumber.slice(0, 4);
      dateOfYear = nicNumber.slice(4, 7);
    } else {
      yearOfBirth = `19${nicNumber.slice(0, 2)}`;
      dateOfYear = nicNumber.slice(2, 5);
    }

    if (dateOfYear > 500) {
      dateOfYear = dateOfYear - 500;
    }

    // Calculate the birthdate based on year and day of the year
    const birthdateInMilliseconds =
      Date.parse(`${yearOfBirth}-01-01`) +
      (parseInt(dateOfYear) - 1) * 24 * 60 * 60 * 1000;
    const calculatedBirthdate = new Date(birthdateInMilliseconds);

    // Extract the month and date
    const month = (calculatedBirthdate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const day = calculatedBirthdate.getDate().toString().padStart(2, "0");

    const actualBday = `${yearOfBirth}-${month}-${day}`;
    if (actualBday == birthdate) {
      return true;
    } else {
      return false;
    }

    // Check if the expected birthdate matches the provided birthdate
  } else {
    // Handle invalid NIC format
    return false;
  }
}
