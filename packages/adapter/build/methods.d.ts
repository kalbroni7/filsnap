import { BlockInfo, SnapConfig, TxPayload } from "@nodefactory/metamask-filecoin-types";
import { SignerPayloadJSON, SignerPayloadRaw } from '@polkadot/types/types';
import { MetamaskPolkadotSnap } from "./snap";
export declare function signPayloadJSON(this: MetamaskPolkadotSnap, payload: SignerPayloadJSON): Promise<string>;
export declare function signPayloadRaw(this: MetamaskPolkadotSnap, payload: SignerPayloadRaw): Promise<string>;
export declare function addPolkadotAsset(this: MetamaskPolkadotSnap): Promise<void>;
export declare function getBalance(this: MetamaskPolkadotSnap): Promise<string>;
export declare function getAddress(this: MetamaskPolkadotSnap): Promise<string>;
export declare function getPublicKey(this: MetamaskPolkadotSnap): Promise<string>;
export declare function exportSeed(this: MetamaskPolkadotSnap): Promise<string>;
export declare function setConfiguration(this: MetamaskPolkadotSnap, config: SnapConfig): Promise<void>;
export declare function getLatestBlock(this: MetamaskPolkadotSnap): Promise<BlockInfo>;
export declare function getAllTransactions(this: MetamaskPolkadotSnap, address?: string): Promise<unknown>;
export declare function sendSignedData(this: MetamaskPolkadotSnap, signature: string, txPayload: TxPayload): Promise<string>;
export declare function generateTransactionPayload(this: MetamaskPolkadotSnap, amount: string | number, to: string): Promise<TxPayload>;
