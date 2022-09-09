interface ItalicProps {
  children?: React.ReactNode;
}

function Italic({ children }: ItalicProps) {
  return <span style={{ fontStyle: "italic" }}>{children}</span>;
}

export default Italic;
