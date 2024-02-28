import { register, unregister } from "./state";
export function relativeTime(node, options) {
    const callback = (value) => node.textContent = value;
    function init(options) {
        const date = options.date;
        const locale = options.locale || navigator.language;
        const live = options.live = true;
        register(node, date, locale, live, callback);
    }
    init(options);
    return {
        update(options) {
            init(options);
        },
        destroy() {
            unregister(node);
        }
    };
}
