// keep a cache of formatter per locale, to avoid re-creating them (GC)
const formatters = new Map();
// get the Intl.RelativeTimeFormat formatter for the given locale
export function getFormatter(locale) {
    if (formatters.has(locale)) {
        return formatters.get(locale);
    }
    const formatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
    formatters.set(locale, formatter);
    return formatter;
}
