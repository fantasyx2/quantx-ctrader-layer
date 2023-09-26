import { CTraderLayerEvent } from "./CTraderLayerEvent";
export type CTraderLayerEventListener = ((event: CTraderLayerEvent) => any) | (() => any);
