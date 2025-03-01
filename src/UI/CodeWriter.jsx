import { useEffect, useState } from 'react';
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

const codeStyles = `
  code {
    color: #fff;  /* رنگ پیش‌فرض برای متن داخل تگ‌ها */
  }

  .token.tag,
  .token.keyword {
    color:#c06de1;
  }
  
  .token.attr-name {
    color: #40baf2;
  }
  
  .token.attr-value,
  .token.string {
    color: #4cefb3;
  }
  
  .token.punctuation {
    color: #6272A4;
  }
  
  .token.operator {
    color: #c06de1;
  }
  
  .token.function {
    color: #50FA7B;
  }
  
  .token.comment {
    color: #6272A4;
}`

const TypeWriter = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    Prism.highlightAll();
  }, [displayedText]);

  return (
    <>
      <style>{codeStyles}</style>
      <pre className={`${className} bg-transparent`}>
        <code className="language-jsx">{displayedText}</code>
      </pre>
    </>
  );
};

export default TypeWriter