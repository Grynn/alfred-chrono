import test from "ava";
import alfyTest from "alfy-test";
import moment from "moment";
import Chrono from "chrono-node";

test("Correctly handles invalid dates", async (t) => {
  const alfy = alfyTest();
  const result = await alfy("Rainbow");
  t.plan(2);

  t.assert(result.length == 1);
  let r1 = result[0];
  t.like(r1, { valid: false });
});

test("Parses a simple date", async (t) => {
  const alfy = alfyTest();
  const result = await alfy("20 December 2020");
  const m = new moment(Chrono.parseDate("20 December 2020"));

  //Check that there is a result with:
  //1. subtitle: roam-research and title "[[December 20th, 2020]]"
  t.assert(
    result.find(
      (r) =>
        r.title == "[[December 20th, 2020]]" && r.subtitle == "roam-research"
    )
  );

  //2. subtitle: JSON (UTC)
  t.assert(
    result.find((r) => r.subtitle == "JSON (UTC)" && r.title == m.toJSON())
  );
});

//Skipped: 3 days
//in 3 days and 6 months  -- 6 months 3 days works, 6 months and 3 days does not
//in 2 years 5 days
