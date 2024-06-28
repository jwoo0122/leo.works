interface QuoteProps extends React.PropsWithChildren {
  style: "default" | "disclaimer";
}

const COLORS: { [key in QuoteProps['style']]: { background: string; bar: string; } } = {
  'default': {
    background: 'bg-neutral-200 dark:bg-neutral-700',
    bar: 'bg-neutral-400 dark:bg-neutral-300'
  },
  'disclaimer': {
    background: 'bg-orange-200 dark:bg-orange-900',
    bar: 'bg-orange-500 dark:bg-orange-500'
  }
}

export default function Quote({ style = "default", children }: QuoteProps) {
  return (
    <div className={`relative my-2 px-6 py-1 text-sm ${COLORS[style].background}`}>
      <div className={`absolute left-0 top-0 h-full w-1 ${COLORS[style].bar}`} />
      {children}
    </div>
  );
}
