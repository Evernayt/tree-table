import { IOutlay } from "./IOutlay";

export interface IOutlayRowRequest extends IOutlay {
  parentId: number | null;
}
