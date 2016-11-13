import { AddOpertaion } from "./addOperation";

let addOperation: AddOpertaion;

describe("Add Operation spec", () => {
  beforeEach(() => {
  });

  it("should add a title", () => {
    let actual = {
      name: "My Name"
    };

    let expected = {
      name: "My Name",
      title: "My Title"
    };

    addOperation = new AddOpertaion({
      path: "/title",
      value: "My Title"
    });

    addOperation.apply(actual);

    expect(actual).toEqual(expected);
  });

  it("should add an author", () => {
    let actual = {
      name: "My Name"
    };

    let expected = {
      name: "My Name",
      author: {
        firstName: "James",
        lastName: "Bond",
        email: "James.Bond@007.com"
      }
    };

    addOperation = new AddOpertaion({
      path: "/author",
      value: {
        firstName: "James",
        lastName: "Bond",
        email: "James.Bond@007.com"
      }
    });

    addOperation.apply(actual);

    expect(actual).toEqual(expected);
  });

  it("should add an author first name", () => {
    let actual = {
      name: "My Name",
      author: {
        lastName: "Bond",
        email: "James.Bond@007.com"
      }
    };

    let expected = {
      name: "My Name",
      author: {
        firstName: "James",
        lastName: "Bond",
        email: "James.Bond@007.com"
      }
    };

    addOperation = new AddOpertaion({
      path: "/author/firstName",
      value: "James"
    });

    addOperation.apply(actual);

    expect(actual).toEqual(expected);
  });
});