/**
 * Make happy-dom's ClipboardItem observe promise values, as browsers do.
 *
 * monaco-editor installs a Safari clipboard workaround when the user agent looks
 * like Safari, which happy-dom's does. On every click it passes a promise to
 * `new ClipboardItem()` and cancels the previous one. A browser's ClipboardItem
 * observes that promise, so the cancellation is handled. happy-dom's only stores
 * it, so each cancellation would surface as an unhandled rejection and fail the
 * test run.
 */
const NativeClipboardItem = globalThis.ClipboardItem

if (NativeClipboardItem) {
  globalThis.ClipboardItem = class ClipboardItem extends NativeClipboardItem {
    constructor(items: Record<string, string | Blob | PromiseLike<string | Blob>>, options?: ClipboardItemOptions) {
      for (const value of Object.values(items)) {
        if (value && typeof (value as PromiseLike<unknown>).then === 'function') {
          Promise.resolve(value).catch(() => {})
        }
      }
      super(items, options)
    }
  } as typeof globalThis.ClipboardItem
}
