import { PatchOperation } from "../base/patchOperation";
import { OperationTypeEnum } from "../base/operationTypeEnum";

export class AddOpertaion extends PatchOperation {
  private _value: Object;

  constructor(patchObject: Object) {
    patchObject["op"] = OperationTypeEnum[OperationTypeEnum.ADD];
    super(patchObject);
    this._value = patchObject["value"];
  }

  apply(target: Object): Object {
  	// Getting the parent container
    let parent = this.opertaionPath.getContainerValue(target);
    let key = this.opertaionPath.getLastToken();
    if (parent instanceof Array) {
      if (key === "-") {
        parent.push(this.value);
        return parent;
      }
      let index: number = Number(key);
      if (index !== NaN) {
        if (index === parent.length) {
          parent.push(this.value);
          return parent;
        }
        if (index < parent.length) {
          parent.splice(index, 0, this.value);
        }
      }
    } else {
      parent[key] = this.value;
    }
    return target;
  }

  get value(): Object {
    return this._value;
  }
}