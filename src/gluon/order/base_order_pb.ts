// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file gluon/order/base_order.proto (package gluon.order, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_proto_cosmos } from "../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file gluon/order/base_order.proto.
 */
export const file_gluon_order_base_order: GenFile = /*@__PURE__*/
  fileDesc("ChxnbHVvbi9vcmRlci9iYXNlX29yZGVyLnByb3RvEgtnbHVvbi5vcmRlciLNAgoJQmFzZU9yZGVyEjoKB2FkZHJlc3MYASABKAlCKeLeHw1BZGRyZXNzU3RyaW5n0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEg0KBW5vbmNlGAIgASgEEhIKCmRlbm9tX2Jhc2UYAyABKAkSEwoLZGVub21fcXVvdGUYBCABKAkSLgoJZGlyZWN0aW9uGAUgASgOMhsuZ2x1b24ub3JkZXIuT3JkZXJEaXJlY3Rpb24SOwoGYW1vdW50GAYgASgJQivI3h8A2t4fFWNvc21vc3Nkay5pby9tYXRoLkludNK0LQpjb3Ntb3MuSW50EikKC2xpbWl0X3ByaWNlGAcgASgJQhTi3h8QTGltaXRQcmljZVN0cmluZxI0CgZleHBpcnkYCCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgjI3h8AkN8fASpkCg5PcmRlckRpcmVjdGlvbhIfChtPUkRFUl9ESVJFQ1RJT05fVU5TUEVDSUZJRUQQABIXChNPUkRFUl9ESVJFQ1RJT05fQlVZEAESGAoUT1JERVJfRElSRUNUSU9OX1NFTEwQAkKDAQoPY29tLmdsdW9uLm9yZGVyQg5CYXNlT3JkZXJQcm90b1ABWhNnbHVvbi94L29yZGVyL3R5cGVzogIDR09YqgILR2x1b24uT3JkZXLKAgtHbHVvblxPcmRlcuICF0dsdW9uXE9yZGVyXEdQQk1ldGFkYXRh6gIMR2x1b246Ok9yZGVyYgZwcm90bzM", [file_cosmos_proto_cosmos, file_gogoproto_gogo, file_google_protobuf_timestamp]);

/**
 * BaseOrder
 *
 * @generated from message gluon.order.BaseOrder
 */
export type BaseOrder = Message<"gluon.order.BaseOrder"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * For avoiding order hash conflict
   *
   * @generated from field: uint64 nonce = 2;
   */
  nonce: bigint;

  /**
   * @generated from field: string denom_base = 3;
   */
  denomBase: string;

  /**
   * @generated from field: string denom_quote = 4;
   */
  denomQuote: string;

  /**
   * @generated from field: gluon.order.OrderDirection direction = 5;
   */
  direction: OrderDirection;

  /**
   * @generated from field: string amount = 6;
   */
  amount: string;

  /**
   * Empty means market order
   *
   * @generated from field: string limit_price = 7;
   */
  limitPrice: string;

  /**
   * Required to prevent operator from utilizing old order
   *
   * @generated from field: google.protobuf.Timestamp expiry = 8;
   */
  expiry?: Timestamp;
};

/**
 * Describes the message gluon.order.BaseOrder.
 * Use `create(BaseOrderSchema)` to create a new message.
 */
export const BaseOrderSchema: GenMessage<BaseOrder> = /*@__PURE__*/
  messageDesc(file_gluon_order_base_order, 0);

/**
 * OrderDirection
 *
 * @generated from enum gluon.order.OrderDirection
 */
export enum OrderDirection {
  /**
   * Unspecified
   *
   * @generated from enum value: ORDER_DIRECTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Buy
   *
   * @generated from enum value: ORDER_DIRECTION_BUY = 1;
   */
  BUY = 1,

  /**
   * Sell
   *
   * @generated from enum value: ORDER_DIRECTION_SELL = 2;
   */
  SELL = 2,
}

/**
 * Describes the enum gluon.order.OrderDirection.
 */
export const OrderDirectionSchema: GenEnum<OrderDirection> = /*@__PURE__*/
  enumDesc(file_gluon_order_base_order, 0);
