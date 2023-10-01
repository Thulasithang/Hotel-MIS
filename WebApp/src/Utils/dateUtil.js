export function convertDateToFormat(date) {
  const checkIn = new Date(date);
  const formattedDate = checkIn.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const dateParts = formattedDate.split("/");
  const formattedDateStr = `${dateParts[2]}-${dateParts[0].padStart(
    2,
    "0"
  )}-${dateParts[1].padStart(2, "0")}`;
  return formattedDateStr;
}
