class Event {
  #title;
  #time;
  constructor(title, time) {
    this.#title = title;
    this.time = time;
  }

  set time(value) {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;

    if (regex.test(value)) {
      const [h, m, s = "00"] = value.split(":");
      const date = new Date();
      date.setHours(parseInt(h));
      date.setMinutes(parseInt(m));
      date.setSeconds(parseInt(s));
      this.#time = date;
    }
  }

  get time() {
    return this.#time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }
}

const meeting = new Event("Митинг возле ратуши", "14:30");
console.log(meeting.title);
console.log(meeting.time);

console.log("---");

meeting.time = "25:00";
meeting.time = "9:15";
console.log(meeting.title);
console.log(meeting.time);

console.log("---");

const call = new Event("Звонок юристу", "10:05");
console.log(call.title);
console.log(call.time);

console.log("---");

const party = new Event("Ночной рейд", "00:00");
console.log(party.title);
console.log(party.time);
