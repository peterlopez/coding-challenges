/**
 * Given an array of people and their timezones in UTC,
 * return the local time for a given person
 *
 * @param {Array<Object>} people with name and timezone property
 * @param {string} name
 * @param {boolean} hour12 when true output time in 12 hour format
 * @returns {string}
 */
function localTime(people, name, hour12 = true) {
  const person = people.find((person) => person.name == name);
  if (!person) {
    console.error(`Person with name '${name}' not found`);
    return "";
  }
  // parse timezone as UTC offset format i.e. "UTC-7:00"
  const regexp = /utc([-+][0-9]{1,2}):[0-9]{2}/i;
  const matches = person.timezone.match(regexp);
  if (!matches) {
    console.error(`Invalid timezone '${person.timezone}'`);
    return "";
  }
  const utcOffset = parseInt(matches[1]);
  const now = new Date();
  const localHours = now.getUTCHours() + utcOffset;
  now.setUTCHours(localHours);
  return now.toLocaleTimeString("en-US", {
    timeZone: "UTC",
    timeStyle: "short",
    hour12: hour12,
  });
}

let people = [
  { name: "Clara", timezone: "UTC-4:00" },
  { name: "Cami", timezone: "UTC-7:00" },
  { name: "Ximena", timezone: "UTC-5:00" },
];
console.debug(localTime(people, "Clara"));
console.debug(localTime(people, "Clara", false));
console.debug(localTime(people, "Cami"));
console.debug(localTime(people, "Cami", false));
console.debug(localTime(people, "Ximena"));
console.debug(localTime(people, "Ximena", false));
