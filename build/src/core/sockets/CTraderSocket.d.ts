/// <reference types="node" />
/// <reference types="node" />
import * as tls from "tls";
import { CTraderSocketParameters } from "./CTraderSocketParameters";
export declare class CTraderSocket {
    #private;
    constructor({ host, port, }: CTraderSocketParameters);
    get host(): string;
    get port(): number;
    get tlsSocket(): tls.TLSSocket | undefined;
    connect(): void;
    disconnect(): void;
    send(buffer: Buffer): void;
    onOpen(): void;
    onData(...parameters: any[]): void;
    onClose(): void;
    onError(): void;
}
