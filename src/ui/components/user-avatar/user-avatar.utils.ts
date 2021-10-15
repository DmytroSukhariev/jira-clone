import ColorHash from "color-hash";

const sanitizeWhitespaces = (str = "") => {
  const doubleWhitespaces = "  ";
  const singleWhitespace = " ";

  let resultString = str;

  while (resultString.includes(doubleWhitespaces)) {
    resultString = resultString.replaceAll(doubleWhitespaces, singleWhitespace);
  }

  return resultString;
};

export const stringAvatar = (name = "") => {
  const colorHash = new ColorHash();

  // prettier-ignore
  const [
    [firstNameFirstLetter = ""] = "",
    [lastNameFirstLetter = ""] = ""
  ] = sanitizeWhitespaces(name).split(" ");

  return {
    sx: {
      bgcolor: colorHash.hex(name),
    },
    children: `${firstNameFirstLetter.toUpperCase()}${lastNameFirstLetter.toUpperCase()}`,
  };
};
