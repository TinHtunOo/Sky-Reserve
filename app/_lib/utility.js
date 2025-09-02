export function formatTime(timeValue) {
  const date = new Date(timeValue);

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const timeOnly = `${hours}:${minutes}`;
  return timeOnly;
}

export function formatDateLong(dateValue) {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return new Date(dateValue).toLocaleDateString("en-US", options);
}

export function toLocalISOTime(time) {
  const dateTime = new Date(`2025-07-31T${time}:00.000Z`);
  return dateTime;
}
