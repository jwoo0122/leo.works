export default function Image({ src }: { src: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        marginTop: 8,
      }}
    >
      <img
        src={src}
        style={{
          maxWidth: "100%",
          marginTop: 16,
          marginBottom: 16,
          borderRadius: 12,
        }}
      />
    </div>
  );
}
