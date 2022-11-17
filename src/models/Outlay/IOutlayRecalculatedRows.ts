import { IOutlay } from "./IOutlay";

interface RowResponse extends IOutlay {
  id: number;
  total: number;
}

export interface IOutlayRecalculatedRows {
  changed: RowResponse[];
  current: RowResponse;
}
