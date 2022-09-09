interface BoldProps {
  children?: React.ReactNode;
}

function Bold({ children }: BoldProps) {
  return <span style={{ fontWeight: "bold" }}>{children}</span>;
}

export default Bold;
