// This class is the base Patch Operation
export abstract class PatchOperation {
  // The constructor gets the "path" of the operation
  // the "path" member that all kind of PatchOperations have
  constructor(public path: String) {}

  // It declares the "apply" function that should implement the PatchOperation Logic itself
  abstract apply(source: Object): void;
}