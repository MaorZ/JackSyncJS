import { PatchOperation } from "./patchOperation";

// This class is the base Patch Operation that contains a "fromPath" member
// and derived from the "PatchOperation" class that contains a destination path member
export abstract class PatchDualPathOperation extends PatchOperation {
  constructor(public fromPath: String, path: String) {
    super(path);
  }
}