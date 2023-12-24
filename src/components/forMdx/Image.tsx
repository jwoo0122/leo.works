export default function Image({ src }: { src: string }) {
  return (
    <img
      src={src}
      style={{
        maxWidth: "100%",
        marginLeft: "50%",
        transform: "translateX(-50%)",
        marginTop: 16,
        marginBottom: 16,
        borderRadius: 12,
      }}
    />
  );
}
