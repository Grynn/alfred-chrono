import test from "ava";
import alfyTest from "alfy-test";

test(async (t) => {
  const alfy = alfyTest();
  const result = await alfy("Rainbow");

  t.deepEqual(result, [
    {
      title: "Invalid date",
      subtitle: "Could not parse Rainbow",
    },
  ]);
});

test(async (t) => {
  const alfy = alfyTest();
  const result = await alfy("20 December 2020");

  t.deepEqual(result, [
    {
      title: "[[December 20th, 2020]]",
      subtitle: "alfred",
      arg: "[[December 20th, 2020]]",
    },
    {
      title: "2020-12-20T06:30:00.000Z",
      subtitle: "JSON (UTC)",
      arg: "2020-12-20T06:30:00.000Z",
    },
    {
      title: "2020-12-20T12:00:00.000+05:30",
      subtitle: "ISO string (with tz offset)",
      arg: "2020-12-20T12:00:00.000+05:30",
    },
    {
      title: "2020-12-20",
      subtitle: "Simple",
      arg: "2020-12-20",
    },
  ]);
});
