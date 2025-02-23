// function to render relative time into
export function render(state, now) {
    const { date, callback, formatter } = state;
    // Allow dates or times to be passed
    const timeMs = typeof date === 'number' ? date : date.getTime();
    // Get the amount of seconds between the given date and now
    const delta = timeMs - now;
    const deltaSeconds = delta / 1000;
    // Array reprsenting one minute, hour, day, week, month, etc in seconds
    const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];
    // Array equivalent to the above but in the string representation of the units
    const units = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
    // Grab the ideal cutoff unit
    const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds));
    // Get the divisor to divide from the seconds. E.g. if our unit is 'day' our divisor
    // is one day in seconds, so we can divide our seconds by this to get the # of days
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
    // count of units
    const count = Math.round(deltaSeconds / divisor);
    // Intl.RelativeTimeFormat do its magic
    callback(formatter.format(count, units[unitIndex]));
    // calculate time to next update, taking account rounding (e.g. it goes from 2 minutes to 1 minute at 90 seconds)
    // and also the changeover from units (59 seconds shouldn't show as 1 minute, so at 61 seconds we schedule the next
    // update for 1 second time)
    const divisorMs = divisor * 1000;
    let updateIn;
    if (unitIndex) {
        updateIn = divisorMs / 2 - (Math.abs(delta) % divisorMs);
        if (updateIn < 0) {
            updateIn += divisorMs;
        }
    }
    else {
        updateIn = divisorMs - (Math.abs(delta) % divisorMs);
    }
    const updateAt = now + updateIn;
    return updateAt;
}
