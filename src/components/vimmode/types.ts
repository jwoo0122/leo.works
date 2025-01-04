export type Post = {
  slug: string;
  data: {
    title: string;
    pubDate: string;
  };
  body: string;
}

export type KeyStroke = {
  key: string;
  ctrlKey: boolean;
}
