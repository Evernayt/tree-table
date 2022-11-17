import { IOutlay } from "./IOutlay";

export interface IOutlayTreeResponse extends IOutlay {
  id: number;
  total: number;
  child: IOutlayTreeResponse[];
}
