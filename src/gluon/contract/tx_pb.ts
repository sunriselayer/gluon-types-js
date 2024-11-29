// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file gluon/contract/tx.proto (package gluon.contract, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_msg_v1_msg } from "../../cosmos/msg/v1/msg_pb";
import { file_cosmos_proto_cosmos } from "../../cosmos_proto/cosmos_pb";
import type { Order } from "./order_pb";
import { file_gluon_contract_order } from "./order_pb";
import type { Params } from "./params_pb";
import { file_gluon_contract_params } from "./params_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file gluon/contract/tx.proto.
 */
export const file_gluon_contract_tx: GenFile = /*@__PURE__*/
  fileDesc("ChdnbHVvbi9jb250cmFjdC90eC5wcm90bxIOZ2x1b24uY29udHJhY3QifAoPTXNnVXBkYXRlUGFyYW1zEisKCWF1dGhvcml0eRgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEiwKBnBhcmFtcxgCIAEoCzIWLmdsdW9uLmNvbnRyYWN0LlBhcmFtc0IEyN4fADoOguewKglhdXRob3JpdHkiGQoXTXNnVXBkYXRlUGFyYW1zUmVzcG9uc2UidQoUTXNnTGF6eVJlZ2lzdGVyT3JkZXISKgoFb3JkZXIYASABKAsyFS5nbHVvbi5jb250cmFjdC5PcmRlckIEyN4fABISCgpwYWlyaW5nX2lkGAIgASgEEhEKCXNpZ25hdHVyZRgDIAEoDDoKguewKgVvcmRlciIeChxNc2dMYXp5UmVnaXN0ZXJPcmRlclJlc3BvbnNlIjsKDk1zZ0NhbmNlbE9yZGVyEgwKBHVzZXIYASABKAkSEAoIb3JkZXJfaWQYAiABKAk6CYLnsCoEdXNlciIYChZNc2dDYW5jZWxPcmRlclJlc3BvbnNlIokCCg1Nc2dNYXRjaE9yZGVyEhMKC2FkZHJlc3NfYnV5GAEgASgJEhQKDGFkZHJlc3Nfc2VsbBgCIAEoCRIUCgxvcmRlcl9pZF9idXkYAyABKAkSFQoNb3JkZXJfaWRfc2VsbBgEIAEoCRI7CgZhbW91bnQYBSABKAlCK8jeHwDa3h8VY29zbW9zc2RrLmlvL21hdGguSW500rQtCmNvc21vcy5JbnQSQAoFcHJpY2UYBiABKAlCMcjeHwDa3h8bY29zbW9zc2RrLmlvL21hdGguTGVnYWN5RGVj0rQtCmNvc21vcy5EZWM6IYLnsCoLYWRkcmVzc19idXmC57AqDGFkZHJlc3Nfc2VsbCIXChVNc2dNYXRjaE9yZGVyUmVzcG9uc2Uy+gIKA01zZxJYCgxVcGRhdGVQYXJhbXMSHy5nbHVvbi5jb250cmFjdC5Nc2dVcGRhdGVQYXJhbXMaJy5nbHVvbi5jb250cmFjdC5Nc2dVcGRhdGVQYXJhbXNSZXNwb25zZRJnChFMYXp5UmVnaXN0ZXJPcmRlchIkLmdsdW9uLmNvbnRyYWN0Lk1zZ0xhenlSZWdpc3Rlck9yZGVyGiwuZ2x1b24uY29udHJhY3QuTXNnTGF6eVJlZ2lzdGVyT3JkZXJSZXNwb25zZRJVCgtDYW5jZWxPcmRlchIeLmdsdW9uLmNvbnRyYWN0Lk1zZ0NhbmNlbE9yZGVyGiYuZ2x1b24uY29udHJhY3QuTXNnQ2FuY2VsT3JkZXJSZXNwb25zZRJSCgpNYXRjaE9yZGVyEh0uZ2x1b24uY29udHJhY3QuTXNnTWF0Y2hPcmRlcholLmdsdW9uLmNvbnRyYWN0Lk1zZ01hdGNoT3JkZXJSZXNwb25zZRoFgOewKgFCjgEKEmNvbS5nbHVvbi5jb250cmFjdEIHVHhQcm90b1ABWhZnbHVvbi94L2NvbnRyYWN0L3R5cGVzogIDR0NYqgIOR2x1b24uQ29udHJhY3TKAg5HbHVvblxDb250cmFjdOICGkdsdW9uXENvbnRyYWN0XEdQQk1ldGFkYXRh6gIPR2x1b246OkNvbnRyYWN0YgZwcm90bzM", [file_cosmos_msg_v1_msg, file_cosmos_proto_cosmos, file_gluon_contract_order, file_gluon_contract_params, file_gogoproto_gogo]);

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message gluon.contract.MsgUpdateParams
 */
export type MsgUpdateParams = Message<"gluon.contract.MsgUpdateParams"> & {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority: string;

  /**
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: gluon.contract.Params params = 2;
   */
  params?: Params;
};

/**
 * Describes the message gluon.contract.MsgUpdateParams.
 * Use `create(MsgUpdateParamsSchema)` to create a new message.
 */
export const MsgUpdateParamsSchema: GenMessage<MsgUpdateParams> = /*@__PURE__*/
  messageDesc(file_gluon_contract_tx, 0);

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message gluon.contract.MsgUpdateParamsResponse
 */
export type MsgUpdateParamsResponse = Message<"gluon.contract.MsgUpdateParamsResponse"> & {
};

/**
 * Describes the message gluon.contract.MsgUpdateParamsResponse.
 * Use `create(MsgUpdateParamsResponseSchema)` to create a new message.
 */
export const MsgUpdateParamsResponseSchema: GenMessage<MsgUpdateParamsResponse> = /*@__PURE__*/
  messageDesc(file_gluon_contract_tx, 1);

/**
 * MsgLazyRegisterOrder
 *
 * @generated from message gluon.contract.MsgLazyRegisterOrder
 */
export type MsgLazyRegisterOrder = Message<"gluon.contract.MsgLazyRegisterOrder"> & {
  /**
   * @generated from field: gluon.contract.Order order = 1;
   */
  order?: Order;

  /**
   * @generated from field: uint64 pairing_id = 2;
   */
  pairingId: bigint;

  /**
   * @generated from field: bytes signature = 3;
   */
  signature: Uint8Array;
};

/**
 * Describes the message gluon.contract.MsgLazyRegisterOrder.
 * Use `create(MsgLazyRegisterOrderSchema)` to create a new message.
 */
export const MsgLazyRegisterOrderSchema: GenMessage<MsgLazyRegisterOrder> = /*@__PURE__*/
  messageDesc(file_gluon_contract_tx, 2);

/**
 * MsgLazyRegisterOrderResponse
 *
 * @generated from message gluon.contract.MsgLazyRegisterOrderResponse
 */
export type MsgLazyRegisterOrderResponse = Message<"gluon.contract.MsgLazyRegisterOrderResponse"> & {
};

/**
 * Describes the message gluon.contract.MsgLazyRegisterOrderResponse.
 * Use `create(MsgLazyRegisterOrderResponseSchema)` to create a new message.
 */
export const MsgLazyRegisterOrderResponseSchema: GenMessage<MsgLazyRegisterOrderResponse> = /*@__PURE__*/
  messageDesc(file_gluon_contract_tx, 3);

/**
 * MsgCancelOrder
 *
 * @generated from message gluon.contract.MsgCancelOrder
 */
export type MsgCancelOrder = Message<"gluon.contract.MsgCancelOrder"> & {
  /**
   * @generated from field: string user = 1;
   */
  user: string;

  /**
   * @generated from field: string order_id = 2;
   */
  orderId: string;
};

/**
 * Describes the message gluon.contract.MsgCancelOrder.
 * Use `create(MsgCancelOrderSchema)` to create a new message.
 */
export const MsgCancelOrderSchema: GenMessage<MsgCancelOrder> = /*@__PURE__*/
  messageDesc(file_gluon_contract_tx, 4);

/**
 * MsgCancelOrderResponse
 *
 * @generated from message gluon.contract.MsgCancelOrderResponse
 */
export type MsgCancelOrderResponse = Message<"gluon.contract.MsgCancelOrderResponse"> & {
};

/**
 * Describes the message gluon.contract.MsgCancelOrderResponse.
 * Use `create(MsgCancelOrderResponseSchema)` to create a new message.
 */
export const MsgCancelOrderResponseSchema: GenMessage<MsgCancelOrderResponse> = /*@__PURE__*/
  messageDesc(file_gluon_contract_tx, 5);

/**
 * MsgMatchOrder
 *
 * @generated from message gluon.contract.MsgMatchOrder
 */
export type MsgMatchOrder = Message<"gluon.contract.MsgMatchOrder"> & {
  /**
   * @generated from field: string address_buy = 1;
   */
  addressBuy: string;

  /**
   * @generated from field: string address_sell = 2;
   */
  addressSell: string;

  /**
   * @generated from field: string order_id_buy = 3;
   */
  orderIdBuy: string;

  /**
   * @generated from field: string order_id_sell = 4;
   */
  orderIdSell: string;

  /**
   * @generated from field: string amount = 5;
   */
  amount: string;

  /**
   * @generated from field: string price = 6;
   */
  price: string;
};

/**
 * Describes the message gluon.contract.MsgMatchOrder.
 * Use `create(MsgMatchOrderSchema)` to create a new message.
 */
export const MsgMatchOrderSchema: GenMessage<MsgMatchOrder> = /*@__PURE__*/
  messageDesc(file_gluon_contract_tx, 6);

/**
 * MsgMatchOrderResponse
 *
 * @generated from message gluon.contract.MsgMatchOrderResponse
 */
export type MsgMatchOrderResponse = Message<"gluon.contract.MsgMatchOrderResponse"> & {
};

/**
 * Describes the message gluon.contract.MsgMatchOrderResponse.
 * Use `create(MsgMatchOrderResponseSchema)` to create a new message.
 */
export const MsgMatchOrderResponseSchema: GenMessage<MsgMatchOrderResponse> = /*@__PURE__*/
  messageDesc(file_gluon_contract_tx, 7);

/**
 * Msg defines the Msg service.
 *
 * @generated from service gluon.contract.Msg
 */
export const Msg: GenService<{
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   *
   * @generated from rpc gluon.contract.Msg.UpdateParams
   */
  updateParams: {
    methodKind: "unary";
    input: typeof MsgUpdateParamsSchema;
    output: typeof MsgUpdateParamsResponseSchema;
  },
  /**
   * LazyRegisterOrder
   *
   * @generated from rpc gluon.contract.Msg.LazyRegisterOrder
   */
  lazyRegisterOrder: {
    methodKind: "unary";
    input: typeof MsgLazyRegisterOrderSchema;
    output: typeof MsgLazyRegisterOrderResponseSchema;
  },
  /**
   * CancelOrder
   *
   * @generated from rpc gluon.contract.Msg.CancelOrder
   */
  cancelOrder: {
    methodKind: "unary";
    input: typeof MsgCancelOrderSchema;
    output: typeof MsgCancelOrderResponseSchema;
  },
  /**
   * MatchOrder
   *
   * @generated from rpc gluon.contract.Msg.MatchOrder
   */
  matchOrder: {
    methodKind: "unary";
    input: typeof MsgMatchOrderSchema;
    output: typeof MsgMatchOrderResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_gluon_contract_tx, 0);

