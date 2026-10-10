import { Children, cloneElement, isValidElement, type ElementType, type ReactNode } from "react";

// Splits a heading into words that slide up, one after another, from behind
// a soft mask when the heading scrolls into view. Nested elements such as
// <em> keep their styling; <br> keeps its line break. The motion itself
// lives in index.css ([data-reveal="text"]) and is switched on by
// MotionController.
const splitWords = (node: ReactNode, counter: { i: number }): ReactNode =>
  Children.map(node, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      return String(child)
        .split(/(\s+)/)
        .map((part, k) => {
          if (!part) return null;
          if (/^\s+$/.test(part)) return " ";
          const i = counter.i++;
          return (
            <span key={k} className="rt-mask">
              <span className="rt-word" style={{ "--i": i } as React.CSSProperties}>
                {part}
              </span>
            </span>
          );
        });
    }
    if (isValidElement<{ children?: ReactNode }>(child) && child.props.children !== undefined) {
      return cloneElement(child, undefined, splitWords(child.props.children, counter));
    }
    return child;
  });

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

const RevealText = ({ as: Tag = "h2", className, children }: Props) => (
  <Tag className={className} data-reveal="text">
    {splitWords(children, { i: 0 })}
  </Tag>
);

export default RevealText;
