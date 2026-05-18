export default function remarkPrefixBase(options = {}) {
  const configuredBase = options.base || "/";
  const normalizedBase = configuredBase.endsWith("/")
    ? configuredBase
    : `${configuredBase}/`;

  function shouldRewrite(url) {
    return (
      typeof url === "string" &&
      url.startsWith("/") &&
      !url.startsWith("//") &&
      !url.startsWith(normalizedBase)
    );
  }

  function prefix(url) {
    if (!shouldRewrite(url)) {
      return url;
    }
    return `${normalizedBase}${url.slice(1)}`;
  }

  function rewriteHtmlAttributes(value) {
    if (typeof value !== "string") {
      return value;
    }
    return value.replace(
      /\b(href|src)=(["'])(\/[^"']*)\2/g,
      (match, attr, quote, url) => {
        if (!shouldRewrite(url)) {
          return match;
        }
        return `${attr}=${quote}${normalizedBase}${url.slice(1)}${quote}`;
      },
    );
  }

  return function transform(tree) {
    function walk(node) {
      if (!node || typeof node !== "object") {
        return;
      }

      if (
        (node.type === "link" ||
          node.type === "image" ||
          node.type === "definition") &&
        typeof node.url === "string"
      ) {
        node.url = prefix(node.url);
      }

      if (
        (node.type === "html" || node.type === "jsx") &&
        typeof node.value === "string"
      ) {
        node.value = rewriteHtmlAttributes(node.value);
      }

      if (Array.isArray(node.children)) {
        for (const child of node.children) {
          walk(child);
        }
      }
    }

    walk(tree);
  };
}
