import alfy from "alfy";
import Chrono from "chrono-node";
import moment from "moment";

//Check for whitespace input (replace with today)
let input = alfy.input;
if (isWhitespace(input)) {
  input = "today";
}

const m = parseDate(input);

/** @type {import("alfy").ScriptFilterItem[]} */
const ret = [];

if (!m.isValid()) {
  alfy.error(`Invalid date: could not parse '${alfy.input}'`);
} else {
  ret.push({
    title: `[[${m.format("MMMM Do, YYYY")}]]`,
    subtitle: "roam-research",
    arg: `[[${m.format("MMMM Do, YYYY")}]]`,
    icon: {
      path: "./icons/roam-research.png",
    },
  });

  ret.push({
    title: m.toJSON(),
    subtitle: "JSON (UTC)",
    arg: m.toJSON(),
  });

  ret.push({
    title: m.toISOString(true),
    subtitle: "ISO string (with tz offset)",
    arg: m.toISOString(true),
  });

  ret.push({
    title: m.format("YYYY-MM-DD"),
    subtitle: "Simple",
    arg: m.format("YYYY-MM-DD"),
  });
  alfy.output(ret);
}

/**
 * Check if input is an empty string (with just whitespace)
 * @param {string?} input
 */
function isWhitespace(input) {
  return !(input && input.length > 0 && input.trim().length > 0);
}

/**
 * Parse a date string using Chrono
 * @param {string} input
 * @returns {import("moment").Moment}}
 */
function parseDate(input) {
  //if input is null / empty string
  let dt = Chrono.parseDate(input);
  let m = moment(dt);

  //If it does not work, try "3 days => in 3 days"
  if (!m.isValid()) {
    input = `in ${input}`;
    dt = Chrono.parseDate(input);
    m = moment(dt);
  }

  return m;
}
