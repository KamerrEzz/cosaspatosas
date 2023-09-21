import moment from "moment-timezone";

let base = {
  label: "Cancun",
  timezone: "America/Cancun",
  hours: "12:50", // 1pm
};

let cuntrys = [
  {
    label: "Peru",
    timezone: "America/Lima",
  },
  {
    label: "Argentina",
    timezone: "America/Argentina/Buenos_Aires",
  },
  {
    label: "Brazil",
    timezone: "America/Sao_Paulo",
  },
  {
    label: "Mexico",
    timezone: "America/Mexico_City",
  },
  {
    label: "Cancun",
    timezone: "America/Cancun",
  },
];

const calculate = (base, timezone) => {
  let time = moment.tz(
    `${moment().format("YYYY-MM-DD")} ${base.hours}`,
    base.timezone
  );
  let result = time.clone().tz(timezone);
  return {
    label: timezone,
    hours: result.format("h:mm a"),
  };
};

const calculateAll = (base, cuntrys) => {
  return cuntrys.map((country) => ({
    ...calculate(base, country.timezone),
    country: country.label,
  }));
};

console.log(calculateAll(base, cuntrys));
