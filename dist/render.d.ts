export type Callback = (text: string) => void;
export interface RenderState {
    date: Date | number;
    callback: Callback;
    formatter: Intl.RelativeTimeFormat;
}
export declare function render(state: RenderState, now: number): number;
