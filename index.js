const alfy = require("alfy");
const chrono = require("chrono-node");
const moment = require("moment");

/** @type {Date} */
const dt = chrono.parseDate(alfy.input);
const m = moment(dt);
const ret = [];

if (!m.isValid()) {
  ret.push({
    title: "Invalid date",
    subtitle: `Could not parse ${alfy.input}`,
  });
} else {
  ret.push({
    title: `[[${m.format("MMMM Do, YYYY")}]]`,
    subtitle: "alfred",
    arg: `[[${m.format("MMMM Do, YYYY")}]]`,
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
}

alfy.output(ret);
