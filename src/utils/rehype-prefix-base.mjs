export default function rehypePrefixBase(options = {}) {
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

  return function transform(tree) {
    function walk(node) {
      if (!node || typeof node !== "object") {
        return;
      }

      if (node.type === "element" && node.properties) {
        if (typeof node.properties.href === "string") {
          node.properties.href = prefix(node.properties.href);
        }
        if (typeof node.properties.src === "string") {
          node.properties.src = prefix(node.properties.src);
        }
        if (typeof node.properties.poster === "string") {
          node.properties.poster = prefix(node.properties.poster);
        }
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
