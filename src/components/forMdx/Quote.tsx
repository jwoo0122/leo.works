interface QuoteProps extends React.PropsWithChildren {
  style: "default" | "disclaimer";
}

export default function Quote({ style = "default", children }: QuoteProps) {
  const backgroundColor =
    style === "disclaimer" ? "rgba(230, 200, 0, 0.2)" : "rgba(0, 0, 0, 0.1)";

  const sidebarBackgroundColor =
    style === "disclaimer" ? "rgb(230, 200, 0)" : "grey";

  return (
    <div
      style={{
        position: "relative",
        padding: "1px 24px 1px 18px",
        margin: "4px 0",
        fontStyle: "italic",
        backgroundColor,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: 3,
          backgroundColor: sidebarBackgroundColor,
        }}
      />
      {children}
    </div>
  );
}
