import { PatchOperation } from "../base/patchOperation";

export class AddOpertaion extends PatchOperation {
  private _value: Object;

  constructor(patchObject: Object) {
    super(patchObject);
    this._value = patchObject["value"];
  }

  apply(target: Object): Object {
    return target;
  }

  get value(): Object {
    return this._value;
  }
}