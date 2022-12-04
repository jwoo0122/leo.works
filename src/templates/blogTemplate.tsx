// Ext
import { Link, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

// Int
import { profileUrl } from "Constants/Gravatar";
import Utterances from "Components/Utterances";
import SEO from "Components/Seo";
// import withTwoPassRendering from "Hocs/withTwoPassRendering";
import * as styles from "./blogTemplate.scss";
import * as TemplateBlocks from "./content";

const shortComponents = {
  h1: TemplateBlocks.Heading,
  h2: TemplateBlocks.Heading2,
  strong: TemplateBlocks.Bold,
  em: TemplateBlocks.Italic,
  blockquote: TemplateBlocks.Quote,
  hr: TemplateBlocks.Horizon,
  a: TemplateBlocks.Anchor,
  p: TemplateBlocks.Paragraph,
  code: TemplateBlocks.CodeBlock,
  inlineCode: TemplateBlocks.InlineCode,
  ol: TemplateBlocks.OrderedList,
  ul: TemplateBlocks.UnorderedList,
  pre: (props) => props.children,
  ...TemplateBlocks,
};

interface TemplateProps {
  data: {
    mdx: {
      body: any;
      frontmatter: {
        date: string;
        title: string;
        author: string;
        description: string;
        featuredImage: any;
      };
      htmlAst: any;
      fields: {
        readingTime: {
          minutes: number;
        };
      };
    };
  };
  children: React.ReactNode;
}

function blogTemplate({ data, children }: TemplateProps) {
  const { mdx } = data;
  const {
    frontmatter: {
      title,
      date,
      author,
      description,
      // featuredImage: {
      //   childImageSharp: {
      //     fluid: { src },
      //   },
      // },
    },
    fields: {
      readingTime: { minutes },
    },
  } = mdx;

  return (
    <MDXProvider components={shortComponents}>
      {/* <SEO
        title={title}
        author={author}
        date={date}
        description={description}
        image={src}
      /> */}
      <div className={styles.postContainer}>
        <div className={styles.postMeta}>
          <Link to="/" style={{ textDecoration: "none", display: "block" }}>
            <div className={styles.postAuthorWrapper}>
              <span className={styles.backIcon}>{"〈"}</span>
              <img className={styles.profileImg} src={profileUrl} />
            </div>
          </Link>
          <h1 className={styles.postTitle}>{title}</h1>
          <div className={styles.postDate}>
            {`${date} · ${Math.ceil(minutes)}min`}
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.content}>{children}</div>
      </div>
      <Utterances repo="jwoo0122/leo.works" />
    </MDXProvider>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        path
        title
        author
        description
      }
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`;

// export default withTwoPassRendering(blogTemplate);
export default blogTemplate;
