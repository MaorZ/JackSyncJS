import { OperationTypeEnum } from "./operationTypeEnum";

// This class is the base Patch Operation
export class PatchOperation {
  private _operationName: string;

  constructor(public patchObject: Object) {
    this._operationName = this.patchObject["op"].toUpperCase();
  }

  getOperationType(): OperationTypeEnum {
    return OperationTypeEnum[this._operationName];
  }
}