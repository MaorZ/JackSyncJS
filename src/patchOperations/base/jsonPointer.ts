// This is an implementation of spec RFC 6901
// see http://tools.ietf.org/html/rfc6901

export class JsonPointer {
  // Those are the escaped characters in a JSON pointer string
  // see section 3 in the spec
  private EscapedCharacters: Object = {
    "~1": "/",
    "~0": "~"
  };

  // This is the part separator
  private TokenSeperator: string = "/";

  // This is the tokens array that builds the JSON path
  public tokens: Array<string>;

  // Checking if object is string
  isString(obj: Object) {
    if (typeof obj === "string" || obj instanceof String) {
      return true;
    }
    return false;
  };

  // Unescape the token
  unescapeToken(token: string): string {
    for (let escapedPattren in this.EscapedCharacters) {
      token.replace(escapedPattren, this.EscapedCharacters[escapedPattren]);
    };
    return token;
  }

  // Getting all the tokens of the path
  getTokens(): Array<string> {
    let tokens = this.path.split(this.TokenSeperator);

    for (let tokenIndex in tokens) {
      tokens[tokenIndex] = this.unescapeToken(tokens[tokenIndex]);
    }

    return tokens;
  }

  constructor(public path: string) {
    this.tokens = this.getTokens();
  }

  _getValueFromPath(target: Object, tokens: Array<string>): Object {
    if (!this.isString(this.path)) {
      return null;
    }

    if (tokens.length === 0) {
      return null;
    }

    if (tokens.length === 1 && tokens[0] === "") {
      return target;
    }

    for (let token in tokens) {
      target = target[token];
    }

    return target;
  }

  getValue(target: Object): Object {
    return this._getValueFromPath(target, this.tokens);
  }

  getContainerValue(target: Object): Object {
    return this._getValueFromPath(target, this.tokens.slice(0, -1));
  }

  getLastToken(): string {
    return this.tokens[this.tokens.length - 1];
  }
}