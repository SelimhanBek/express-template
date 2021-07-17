/* Selimhan Bek */
"use strict";

module.exports = class DateFormats {
  constructor() {
    /* Now as decimal */
    this.now = new Date();
    /* Months */
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    /* Days */
    this.days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  }

  /* Public functions */
  /* */
  /* Today as a "string" */
  async today() {
    return String(this.days[this.now.getDay()]);
  }

  /* Get day as a string from integer. Ex: 07 */
  async dd() {
    return String(this.now.getDate()).padStart(2, "0");
  }

  /* Get year as a string from integer. Ex: 2021 */
  async yyyy() {
    return String(this.now.getFullYear());
  }

  /* Get month as a string from integer. Ex: 04 */
  async mm() {
    return String(this.now.getMonth() + 1).padStart(2, "0"); //January is 0!
  }

  /* Get month as a string. Ex: April */
  async month() {
    return String(this.months[this.now.getMonth()]);
  }

  /* Get minute as a string from integer. Ex: 13 */
  async min() {
    return String(this.now.getMinutes()).padStart(2, "0");
  }

  /* Get seconds as a string from integer. Ex: 38 */
  async sec() {
    return String(this.now.getSeconds()).padStart(2, "0");
  }

  /* Get hour as a string from integer. Ex: 14 */
  async h() {
    return String(this.now.getHours()).padStart(2, "0");
  }

  /* Decide to Am or Pm. Ex: Am */
  async Am_or_Pm() {
    if (this.now.getHours() > 12) {
      return String("Pm");
    } else {
      return String("Am");
    }
  }

  /* Date as a "mm/dd/yyyy" */
  async mm_dd_yyyy() {
    return String(
      (await this.mm()).toString() +
        "/" +
        (await this.dd()).toString() +
        "/" +
        (await this.yyyy()).toString()
    );
  }

  /* Date as a "dd/mm/yyyy" */
  async dd_mm_yyyy() {
    return String(
      (await this.dd()).toString() +
        "/" +
        (await this.mm()).toString() +
        "/" +
        (await this.yyyy()).toString()
    );
  }

  /* Date as a "month dd, yyyy" */
  async dd_month_yyyy() {
    return String(
      (await this.dd()).toString() +
        " " +
        (await this.month()).toString() +
        ", " +
        (await this.yyyy()).toString()
    );
  }

  /* Date as a "today, month dd, yyyy" */
  async today_dd_month_yyyy() {
    return String(
      (await this.today()).toString() +
        ", " +
        (await this.dd()).toString() +
        " " +
        (await this.month()).toString() +
        ", " +
        (await this.yyyy()).toString()
    );
  }

  /* Hour as a "h:min" */
  async h_min() {
    return String(
      (await this.h()).toString() + ":" + (await this.min()).toString()
    );
  }

  /* Hour as a "h:min AmPm" */
  async h_min_AmPm() {
    var hour = (await this.h()).toString();
    if (hour > 12) {
      hour = (hour - 12);
      hour = hour.toString().padStart(2,"0");
    } 

    return String(hour + ":" + (await this.min()).toString() + " " + (await this.Am_or_Pm()).toString());
  }

  /* Hour as a "h:min:sec" */
  async h_min_sec() {
    return String(
      (await this.h()).toString() + ":" + (await this.min()).toString() + ":" + (await this.sec()).toString()
    );
  }

  /* Hour as a "h:min:sec AmPm" */
  async h_min_sec_AmPm() {
    var hour = (await this.h()).toString();
    if (hour > 12) {
      hour = (hour - 12);
      hour = hour.toString().padStart(2,"0");
    } 

    return String(hour + ":" + (await this.min()).toString() + ":" + (await this.sec()).toString() + " " + (await this.Am_or_Pm()).toString());
  }
};
