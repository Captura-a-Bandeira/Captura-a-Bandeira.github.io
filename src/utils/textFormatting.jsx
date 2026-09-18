export function parseFormattedText(text, style) {
  const parts = text.split(/(\{[^}]+\})/);
  
  return parts.map((part, i) => {
    if (part.startsWith('{') && part.endsWith('}')) {
      const content = part.slice(1, -1);
      const [linkText, url] = content.split('|');
      
      if (url) {
        return (
          <a key={i} href={url} style={{textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        );
      }
      return <span key={i} style={style}>{linkText}</span>;
    }
    return part;
  });
}
