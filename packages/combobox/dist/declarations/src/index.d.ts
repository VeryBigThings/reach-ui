/**
 * Welcome to @reach/combobox!
 *
 * Accessible combobox (autocomplete or autosuggest) component for React.
 *
 * A combobox is the combination of an `<input type="text"/>` and a list. The
 * list is designed to help the user arrive at a value, but the value does not
 * necessarily have to come from that list. Don't think of it like a
 * `<select/>`, but more of an `<input type="text"/>` with some suggestions. You
 * can, however, validate that the value comes from the list, that's up to your
 * app.
 *
 * ???: navigate w/ arrows, then hit backspace: should it delete the
 *      autocompleted text or the old value the user had typed?!
 *
 * @see Docs     https://reach.tech/combobox
 * @see Source   https://github.com/reach/reach-ui/tree/main/packages/combobox
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.2/#combobox
 */
import * as React from "react";
import type * as Polymorphic from "@reach/utils/polymorphic";
import type { PopoverProps } from "@reach/popover";
/**
 * Combobox
 *
 * @see Docs https://reach.tech/combobox#combobox
 */
export declare const Combobox: Polymorphic.ForwardRefComponent<"div", ComboboxProps>;
/**
 * @see Docs https://reach.tech/combobox#combobox-props
 */
export interface ComboboxProps {
    /**
     * @see Docs https://reach.tech/combobox#combobox-children
     */
    children: React.ReactNode | ((props: ComboboxContextValue) => React.ReactNode);
    /**
     * Called with the selection value when the user makes a selection from the
     * list.
     *
     * @see Docs https://reach.tech/combobox#combobox-onselect
     */
    onSelect?(value: ComboboxValue): void;
    /**
     * If true, the popover opens when focus is on the text box.
     *
     * @see Docs https://reach.tech/combobox#combobox-openonfocus
     */
    openOnFocus?: boolean;
    /**
     * Defines a string value that labels the current element.
     * @see Docs https://reach.tech/combobox#accessibility
     */
    "aria-label"?: string;
    /**
     * Identifies the element (or elements) that labels the current element.
     * @see Docs https://reach.tech/combobox#accessibility
     */
    "aria-labelledby"?: string;
}
/**
 * ComboboxInput
 *
 * Wraps an `<input/>` with a couple extra props that work with the combobox.
 *
 * @see Docs https://reach.tech/combobox#comboboxinput
 */
export declare const ComboboxInput: Polymorphic.ForwardRefComponent<"input", ComboboxInputProps>;
/**
 * @see Docs https://reach.tech/combobox#comboboxinput-props
 */
export interface ComboboxInputProps {
    /**
     * If true, when the user clicks inside the text box the current value will
     * be selected. Use this if the user is likely to delete all the text anyway
     * (like the URL bar in browsers).
     *
     * However, if the user is likely to want to tweak the value, leave this
     * false, like a google search--the user is likely wanting to edit their
     * search, not replace it completely.
     *
     * @see Docs https://reach.tech/combobox#comboboxinput-selectonclick
     */
    selectOnClick?: boolean;
    /**
     * Determines if the value in the input changes or not as the user navigates
     * with the keyboard. If true, the value changes, if false the value doesn't
     * change.
     *
     * Set this to false when you don't really need the value from the input but
     * want to populate some other state (like the recipient selector in Gmail).
     * But if your input is more like a normal `<input type="text"/>`, then leave
     * the `true` default.
     *
     * @see Docs https://reach.tech/combobox#comboboxinput-autocomplete
     */
    autocomplete?: boolean;
    /**
     * @see Docs https://reach.tech/combobox#comboboxinput-value
     */
    value?: ComboboxValue;
}
/**
 * ComboboxPopover
 *
 * Contains the popup that renders the list. Because some UI needs to render
 * more than the list in the popup, you need to render one of these around the
 * list. For example, maybe you want to render the number of results suggested.
 *
 * @see Docs https://reach.tech/combobox#comboboxpopover
 */
export declare const ComboboxPopover: Polymorphic.ForwardRefComponent<"div", ComboboxPopoverProps & Partial<PopoverProps>>;
/**
 * @see Docs https://reach.tech/combobox#comboboxpopover-props
 */
export interface ComboboxPopoverProps {
    /**
     * If you pass `<ComboboxPopover portal={false} />` the popover will not
     * render inside of a portal, but in the same order as the React tree. This
     * is mostly useful for styling the entire component together, like the pink
     * focus outline in the example earlier in this page.
     *
     * @see Docs https://reach.tech/combobox#comboboxpopover-portal
     */
    portal?: boolean;
}
/**
 * ComboboxList
 *
 * Contains the `ComboboxOption` elements and sets up the proper aria attributes
 * for the list.
 *
 * @see Docs https://reach.tech/combobox#comboboxlist
 */
export declare const ComboboxList: Polymorphic.ForwardRefComponent<"ul", ComboboxListProps>;
/**
 * @see Docs https://reach.tech/combobox#comboboxlist-props
 */
export interface ComboboxListProps {
    /**
     * Defaults to false. When true and the list is opened, if an option's value
     * matches the value in the input, it will automatically be highlighted and
     * be the starting point for any keyboard navigation of the list.
     *
     * This allows you to treat a Combobox more like a `<select>` than an
     * `<input/>`, but be mindful that the user is still able to put any
     * arbitrary value into the input, so if the only valid values for the input
     * are from the list, your app will need to do that validation on blur or
     * submit of the form.
     *
     * @see Docs https://reach.tech/combobox#comboboxlist-persistselection
     */
    persistSelection?: boolean;
}
/**
 * ComboboxOption
 *
 * An option that is suggested to the user as they interact with the combobox.
 *
 * @see Docs https://reach.tech/combobox#comboboxoption
 */
export declare const ComboboxOption: Polymorphic.ForwardRefComponent<"li", ComboboxOptionProps>;
/**
 * @see Docs https://reach.tech/combobox#comboboxoption-props
 */
export interface ComboboxOptionProps {
    /**
     * Optional. If omitted, the `value` will be used as the children like as:
     * `<ComboboxOption value="Seattle, Tacoma, Washington" />`. But if you need
     * to control a bit more, you can put whatever children you want, but make
     * sure to render a `ComboboxOptionText` as well, so the value is still
     * displayed with the text highlighting on the matched portions.
     *
     * @example
     *   <ComboboxOption value="Apple" />
     *     🍎 <ComboboxOptionText />
     *   </ComboboxOption>
     *
     * @see Docs https://reach.tech/combobox#comboboxoption-children
     */
    children?: React.ReactNode | ((props: ComboboxOptionContextValue) => React.ReactNode);
    /**
     * The value to match against when suggesting.
     *
     * @see Docs https://reach.tech/combobox#comboboxoption-value
     */
    value: string;
}
/**
 * ComboboxOptionText
 *
 * Renders the value of a `ComboboxOption` as text but with spans wrapping the
 * matching and non-matching segments of text.
 *
 * We don't forwardRef or spread props because we render multiple spans or null,
 * should be fine 🤙
 *
 * @example
 *   <ComboboxOption value="Seattle">
 *     🌧 <ComboboxOptionText />
 *   </ComboboxOption>
 *
 * @see Docs https://reach.tech/combobox#comboboxoptiontext
 */
export declare function ComboboxOptionText(): JSX.Element;
export declare namespace ComboboxOptionText {
    var displayName: string;
}
/**
 * ComboboxButton
 */
export declare const ComboboxButton: Polymorphic.ForwardRefComponent<"button", ComboboxButtonProps>;
export interface ComboboxButtonProps {
}
/**
 * Escape regexp special characters in `str`
 *
 * @see https://github.com/component/escape-regexp/blob/5ce923c1510c9802b3da972c90b6861dd2829b6b/index.js
 * @param str
 */
export declare function escapeRegexp(str: string): string;
/**
 * A hook that exposes data for a given `Combobox` component to its descendants.
 *
 * @see Docs https://reach.tech/combobox#usecomboboxcontext
 */
export declare function useComboboxContext(): ComboboxContextValue;
/**
 * A hook that exposes data for a given `ComboboxOption` component to its descendants.
 *
 * @see Docs https://reach.tech/combobox#usecomboboxcontext
 */
export declare function useComboboxOptionContext(): ComboboxOptionContextValue;
export interface ComboboxContextValue {
    id: string | undefined;
    isExpanded: boolean;
    navigationValue: ComboboxValue | null;
    state: State;
}
interface ComboboxOptionContextValue {
    value: ComboboxValue;
    index: number;
}
declare type ComboboxValue = string;
declare type State = "IDLE" | "SUGGESTING" | "NAVIGATING" | "INTERACTING";
export {};
