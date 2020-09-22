import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import hljs from "highlight.js";

function HighlightedMarkdown({ children, ...rest }) {
  const rootRef = useRef();

  useEffect(() => {
    rootRef.current.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [children]);

  return (
    <Container ref={rootRef}>
      <Markdown {...rest} className="markdown-body">
        {children}
      </Markdown>
    </Container>
  );
}

const Container = styled.div`
  :root {
    --base: #212121;
    --mono-1: #abb2bf;
    --mono-2: #818896;
    --mono-3: #5c6370;
    --hue-1: #56b6c2;
    --hue-2: #40c4ff;
    --hue-3: #c678dd;
    --hue-4: #81c784;
    --hue-5: #ffab00;
    --hue-6: #ffd180;
    --hue-6-2: #e57373;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: var(--mono-1);
    background: var(--base);
    width: 96%;
    border-radius: 0.4rem;
  }

  .hljs-comment,
  .hljs-quote {
    color: var(--mono-3);
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: var(--hue-3);
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: var(--hue-5);
  }

  .hljs-literal {
    color: var(--hue-1);
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: var(--hue-4);
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: var(--hue-6-2);
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: var(--hue-6);
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: var(--hue-2);
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }
`;

export default HighlightedMarkdown;
