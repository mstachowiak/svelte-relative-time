export interface Options {
    date: Date | number;
    locale?: string;
    live?: boolean;
}
export declare function relativeTime(node: HTMLElement, options: Options): {
    update(options: Options): void;
    destroy(): void;
};
