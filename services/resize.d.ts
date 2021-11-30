import Evented from '@ember/object/evented';
import { debounce } from '@ember/runloop';
import Service from '@ember/service';
declare global {
    const FastBoot: {} | undefined;
}
export interface ResizeDefaults {
    widthSensitive?: boolean;
    heightSensitive?: boolean;
    debounceTimeout?: number;
    injectionFactories?: string[];
}
declare const ResizeService_base: Readonly<typeof Service> & (new (properties?: object | undefined) => Evented & {
    debounceTimeout: import("@ember/object/computed").default<any, any>;
    heightSensitive: import("@ember/object/computed").default<any, any>;
    screenHeight: import("@ember/object/computed").default<any, any>;
    screenWidth: import("@ember/object/computed").default<any, any>;
    widthSensitive: import("@ember/object/computed").default<any, any>;
} & Service) & (new (...args: any[]) => Evented & {
    debounceTimeout: import("@ember/object/computed").default<any, any>;
    heightSensitive: import("@ember/object/computed").default<any, any>;
    screenHeight: import("@ember/object/computed").default<any, any>;
    screenWidth: import("@ember/object/computed").default<any, any>;
    widthSensitive: import("@ember/object/computed").default<any, any>;
} & Service);
declare class ResizeService extends ResizeService_base {
    _oldWidth: number;
    _oldHeight: number;
    _oldWidthDebounced: number;
    _oldHeightDebounced: number;
    resizeServiceDefaults: Partial<ResizeDefaults>;
    _onResizeHandler?: (this: Window, evt: UIEvent) => void;
    _scheduledDebounce?: ReturnType<typeof debounce>;
    constructor();
    destroy(): this;
    _setDefaults(): void;
    _hasWindowSizeChanged(w: number, h: number, debounced?: boolean): boolean;
    _updateCachedWindowSize(w: number, h: number, debounced?: boolean): void;
    _installResizeListener(): void;
    _uninstallResizeListener(): void;
    _cancelScheduledDebounce(): void;
    _fireResizeNotification(evt: UIEvent): void;
    _fireDebouncedResizeNotification(evt: UIEvent): void;
}
export default ResizeService;
