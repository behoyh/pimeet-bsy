export class TimeDate {
  constructor(readonly date: Date) { }

  get seconds(): number {
    return this.date.getSeconds();
  }

  get minutes(): number {
    return this.date.getMinutes();
  }

  get hours(): number {
    return this.date.getHours();
  }

  static withinHour(date): Boolean {
    const HOUR = 1000 * 60 * 60;
    const anHourAgo = Date.now() - HOUR;
    const anHourAfter = Date.now() + HOUR;

    return anHourAgo <= date && date <= anHourAfter;
  }
}
