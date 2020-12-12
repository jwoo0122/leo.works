interface BoldProps {
  children: React.ReactNode
}

function Bold({ children }: BoldProps) {
  return <span style={{ fontStyle: 'italic' }}>{ children }</span>
}

export default Bold
