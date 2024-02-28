import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RelativeTimeProps = typeof __propDef.props;
export type RelativeTimeEvents = typeof __propDef.events;
export type RelativeTimeSlots = typeof __propDef.slots;
export default class RelativeTime extends SvelteComponentTyped<RelativeTimeProps, RelativeTimeEvents, RelativeTimeSlots> {
}
export {};
