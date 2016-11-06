import { OperationTypeEnum } from "./operationTypeEnum";
import { JsonPointer } from "./jsonPointer";

// This class is the base Patch Operation
export abstract class PatchOperation {
  private _operationType: OperationTypeEnum;
  private _operationPath: JsonPointer;

  constructor(patchObject: Object) {
    this._operationType = OperationTypeEnum[
      OperationTypeEnum[
        patchObject["op"].toUpperCase()
      ]
    ];
    this._operationPath = new JsonPointer(patchObject["path"]);
  }

  abstract apply(target: Object): Object;

  get opertaionType(): OperationTypeEnum {
    return this._operationType;
  }

  get opertaionPath(): JsonPointer {
    return this._operationPath;
  }
}