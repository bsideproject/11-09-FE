export type HeadingTagName = Extract<
  keyof HTMLElementTagNameMap,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  heading: React.ReactNode;
  as?: HeadingTagName;
  size?: 1 | 2 | 3 | 4;
}
