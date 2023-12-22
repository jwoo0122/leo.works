export default function Quote({ children }: React.PropsWithChildren) {
  return (
    <div
      style={{
        position: "relative",
        padding: "1px 24px 1px 18px",
        margin: "4px 0",
        fontStyle: "italic",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: 2,
          backgroundColor: "grey",
        }}
      />
      {children}
    </div>
  );
}
