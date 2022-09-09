// Ext
import { Prism as SyntaxHighLighter } from "react-syntax-highlighter";
import {
  nord,
  solarizedlight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

// Intck'
import useDarkMode from "Hooks/useDarkMode";
import styles from "./CodeBlock.scss";

function PreTag({ children }: React.PropsWithChildren<HTMLPreElement>) {
  return <pre className={styles.codeWrapper}>{children}</pre>;
}

interface CodeBlockProps {
  className?: string;
  children?: React.ReactNode;
}

const codeTagProps: React.HTMLProps<HTMLElement> = {
  style: {
    fontFamily: "inherit",
  },
};

function CodeBlock({ className, children }: CodeBlockProps) {
  const isDarkMode = useDarkMode();

  return (
    <SyntaxHighLighter
      PreTag={PreTag}
      codeTagProps={codeTagProps}
      language={className?.split("-")[1]}
      style={isDarkMode ? nord : solarizedlight}
    >
      {/* {children.trim()} */}
    </SyntaxHighLighter>
  );
}

export default CodeBlock;
