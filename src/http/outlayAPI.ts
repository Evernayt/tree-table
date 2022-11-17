import { IOutlayRecalculatedRows } from "../models/Outlay/IOutlayRecalculatedRows";
import { IOutlayRowRequest } from "../models/Outlay/IOutlayRowRequest";
import { IOutlayRowUpdateRequest } from "../models/Outlay/IOutlayRowUpdateRequest";
import { IOutlayTreeResponse } from "../models/Outlay/IOutlayTreeResponse";
import { $host } from "./index";

export const createRowInEntityAPI = async (
  eID: number | null,
  outlay: IOutlayRowRequest
): Promise<IOutlayRecalculatedRows> => {
  const { data } = await $host.post(
    `v1/outlay-rows/entity/${eID}/row/create`,
    outlay
  );
  return data;
};

export const getTreeRowsAPI = async (
  eID: number,
  signal?: AbortSignal
): Promise<IOutlayTreeResponse[]> => {
  const { data } = await $host.get(`v1/outlay-rows/entity/${eID}/row/list`, {
    signal,
  });
  return data;
};

export const updateRowAPI = async (
  eID: number,
  rID: number,
  outlay: IOutlayRowUpdateRequest
): Promise<IOutlayRecalculatedRows> => {
  const { data } = await $host.post(
    `v1/outlay-rows/entity/${eID}/row/${rID}/update`,
    outlay
  );
  return data;
};

export const deleteRowAPI = async (
  eID: number,
  rID: number
): Promise<IOutlayRecalculatedRows> => {
  const { data } = await $host.delete(
    `v1/outlay-rows/entity/${eID}/row/${rID}/delete`
  );
  return data;
};
