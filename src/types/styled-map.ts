export const _convertToObject = (text: string[], ...vars: any[]) => (
  props: any
) => {
  const parsedTags = text.reduce((acc: string, item: string, i: number) => {
    let v = vars[i] || "";

    // If it's a function, call it with props
    if (typeof v === "function") v = v(props);

    // Merge with the rest
    return acc + item + v;
  }, "");

  const rules = parsedTags
    .split(";")
    .map((item) => item.trim())
    .filter((item) => !!item);

  // Create and return the object
  return rules.reduce((acc, item) => {
    const [key, val] = item.split(":").map((i) => i.trim());
    return Object.assign(acc, { [key]: val });
  }, {});
};

const styledMap = (...args: any[]) => (props: any) => {
  let mapOfStyles: any;

  if (Array.isArray(args[0])) {
    // Are we using a tagged template literal?
    mapOfStyles = _convertToObject([...args])(props);
  } else {
    // Regular object usage:
    mapOfStyles = args[args.length - 1];
  }

  const styleKeys = Object.keys(mapOfStyles);

  // If the first argument is a string, styled-map works differently:
  if (typeof args[0] === "string") {
    // We use the value of a prop, rather than the key
    const val = props[args[0]];

    if (mapOfStyles[val]) return mapOfStyles[val];
  } else {
    // Otherwise we do things the normal way:
    const matchingKeys = styleKeys.filter((key) => props[key]);

    // If we have a matching key, return it (or the last if we have multiple):
    if (matchingKeys.length) return mapOfStyles[matchingKeys.pop()];
  }

  // If nothing has matched so far, look for a "default" item in our map:
  if (Object.prototype.hasOwnProperty.call(mapOfStyles, "default")) {
    return mapOfStyles.default;
  }

  // Else just return the last item, whatever it is:
  return mapOfStyles[styleKeys.pop()];
};

export const _dotProp = (string: string, object: any) =>
  string.split(".").reduce((acc, key) => acc[key], object);

export const mapToTheme = (key: string, prop: any) => (props: any) =>
  prop
    ? styledMap(prop, _dotProp(key, props?.theme))
    : styledMap(_dotProp(key, props?.theme));

export default styledMap;
