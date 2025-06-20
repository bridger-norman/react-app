import React from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  return (
    <div>
      {text}...
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
