// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file gluon/customauth/query.proto (package gluon.customauth, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb";
import { file_cosmos_base_query_v1beta1_pagination } from "../../cosmos/base/query/v1beta1/pagination_pb";
import type { Pairing } from "./pairing_pb";
import { file_gluon_customauth_pairing } from "./pairing_pb";
import type { Params } from "./params_pb";
import { file_gluon_customauth_params } from "./params_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import { file_google_api_annotations } from "../../google/api/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file gluon/customauth/query.proto.
 */
export const file_gluon_customauth_query: GenFile = /*@__PURE__*/
  fileDesc("ChxnbHVvbi9jdXN0b21hdXRoL3F1ZXJ5LnByb3RvEhBnbHVvbi5jdXN0b21hdXRoIhQKElF1ZXJ5UGFyYW1zUmVxdWVzdCJFChNRdWVyeVBhcmFtc1Jlc3BvbnNlEi4KBnBhcmFtcxgBIAEoCzIYLmdsdW9uLmN1c3RvbWF1dGguUGFyYW1zQgTI3h8AIjUKFlF1ZXJ5R2V0UGFpcmluZ1JlcXVlc3QSDwoHYWRkcmVzcxgBIAEoCRIKCgJpZBgCIAEoBCJLChdRdWVyeUdldFBhaXJpbmdSZXNwb25zZRIwCgdwYWlyaW5nGAEgASgLMhkuZ2x1b24uY3VzdG9tYXV0aC5QYWlyaW5nQgTI3h8AImMKFFF1ZXJ5UGFpcmluZ3NSZXF1ZXN0Eg8KB2FkZHJlc3MYASABKAkSOgoKcGFnaW5hdGlvbhgCIAEoCzImLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlcXVlc3QihwEKFVF1ZXJ5UGFpcmluZ3NSZXNwb25zZRIxCghwYWlyaW5ncxgBIAMoCzIZLmdsdW9uLmN1c3RvbWF1dGguUGFpcmluZ0IEyN4fABI7CgpwYWdpbmF0aW9uGAIgASgLMicuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVzcG9uc2UyoAMKBVF1ZXJ5EncKBlBhcmFtcxIkLmdsdW9uLmN1c3RvbWF1dGguUXVlcnlQYXJhbXNSZXF1ZXN0GiUuZ2x1b24uY3VzdG9tYXV0aC5RdWVyeVBhcmFtc1Jlc3BvbnNlIiCC0+STAhoSGC9nbHVvbi9jdXN0b21hdXRoL3BhcmFtcxKRAQoHUGFpcmluZxIoLmdsdW9uLmN1c3RvbWF1dGguUXVlcnlHZXRQYWlyaW5nUmVxdWVzdBopLmdsdW9uLmN1c3RvbWF1dGguUXVlcnlHZXRQYWlyaW5nUmVzcG9uc2UiMYLT5JMCKxIpL2dsdW9uL2N1c3RvbWF1dGgvcGFpcmluZ3Mve2FkZHJlc3N9L3tpZH0SiQEKCFBhaXJpbmdzEiYuZ2x1b24uY3VzdG9tYXV0aC5RdWVyeVBhaXJpbmdzUmVxdWVzdBonLmdsdW9uLmN1c3RvbWF1dGguUXVlcnlQYWlyaW5nc1Jlc3BvbnNlIiyC0+STAiYSJC9nbHVvbi9jdXN0b21hdXRoL3BhaXJpbmdzL3thZGRyZXNzfUKdAQoUY29tLmdsdW9uLmN1c3RvbWF1dGhCClF1ZXJ5UHJvdG9QAVoYZ2x1b24veC9jdXN0b21hdXRoL3R5cGVzogIDR0NYqgIQR2x1b24uQ3VzdG9tYXV0aMoCEEdsdW9uXEN1c3RvbWF1dGjiAhxHbHVvblxDdXN0b21hdXRoXEdQQk1ldGFkYXRh6gIRR2x1b246OkN1c3RvbWF1dGhiBnByb3RvMw", [file_cosmos_base_query_v1beta1_pagination, file_gluon_customauth_pairing, file_gluon_customauth_params, file_gogoproto_gogo, file_google_api_annotations]);

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message gluon.customauth.QueryParamsRequest
 */
export type QueryParamsRequest = Message<"gluon.customauth.QueryParamsRequest"> & {
};

/**
 * Describes the message gluon.customauth.QueryParamsRequest.
 * Use `create(QueryParamsRequestSchema)` to create a new message.
 */
export const QueryParamsRequestSchema: GenMessage<QueryParamsRequest> = /*@__PURE__*/
  messageDesc(file_gluon_customauth_query, 0);

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message gluon.customauth.QueryParamsResponse
 */
export type QueryParamsResponse = Message<"gluon.customauth.QueryParamsResponse"> & {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: gluon.customauth.Params params = 1;
   */
  params?: Params;
};

/**
 * Describes the message gluon.customauth.QueryParamsResponse.
 * Use `create(QueryParamsResponseSchema)` to create a new message.
 */
export const QueryParamsResponseSchema: GenMessage<QueryParamsResponse> = /*@__PURE__*/
  messageDesc(file_gluon_customauth_query, 1);

/**
 * QueryGetPairingRequest
 *
 * @generated from message gluon.customauth.QueryGetPairingRequest
 */
export type QueryGetPairingRequest = Message<"gluon.customauth.QueryGetPairingRequest"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * @generated from field: uint64 id = 2;
   */
  id: bigint;
};

/**
 * Describes the message gluon.customauth.QueryGetPairingRequest.
 * Use `create(QueryGetPairingRequestSchema)` to create a new message.
 */
export const QueryGetPairingRequestSchema: GenMessage<QueryGetPairingRequest> = /*@__PURE__*/
  messageDesc(file_gluon_customauth_query, 2);

/**
 * QueryGetPairingResponse
 *
 * @generated from message gluon.customauth.QueryGetPairingResponse
 */
export type QueryGetPairingResponse = Message<"gluon.customauth.QueryGetPairingResponse"> & {
  /**
   * @generated from field: gluon.customauth.Pairing pairing = 1;
   */
  pairing?: Pairing;
};

/**
 * Describes the message gluon.customauth.QueryGetPairingResponse.
 * Use `create(QueryGetPairingResponseSchema)` to create a new message.
 */
export const QueryGetPairingResponseSchema: GenMessage<QueryGetPairingResponse> = /*@__PURE__*/
  messageDesc(file_gluon_customauth_query, 3);

/**
 * QueryPairingsRequest
 *
 * @generated from message gluon.customauth.QueryPairingsRequest
 */
export type QueryPairingsRequest = Message<"gluon.customauth.QueryPairingsRequest"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message gluon.customauth.QueryPairingsRequest.
 * Use `create(QueryPairingsRequestSchema)` to create a new message.
 */
export const QueryPairingsRequestSchema: GenMessage<QueryPairingsRequest> = /*@__PURE__*/
  messageDesc(file_gluon_customauth_query, 4);

/**
 * QueryPairingsResponse
 *
 * @generated from message gluon.customauth.QueryPairingsResponse
 */
export type QueryPairingsResponse = Message<"gluon.customauth.QueryPairingsResponse"> & {
  /**
   * @generated from field: repeated gluon.customauth.Pairing pairings = 1;
   */
  pairings: Pairing[];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message gluon.customauth.QueryPairingsResponse.
 * Use `create(QueryPairingsResponseSchema)` to create a new message.
 */
export const QueryPairingsResponseSchema: GenMessage<QueryPairingsResponse> = /*@__PURE__*/
  messageDesc(file_gluon_customauth_query, 5);

/**
 * Query defines the gRPC querier service.
 *
 * @generated from service gluon.customauth.Query
 */
export const Query: GenService<{
  /**
   * Parameters queries the parameters of the module.
   *
   * @generated from rpc gluon.customauth.Query.Params
   */
  params: {
    methodKind: "unary";
    input: typeof QueryParamsRequestSchema;
    output: typeof QueryParamsResponseSchema;
  },
  /**
   * Pairing
   *
   * @generated from rpc gluon.customauth.Query.Pairing
   */
  pairing: {
    methodKind: "unary";
    input: typeof QueryGetPairingRequestSchema;
    output: typeof QueryGetPairingResponseSchema;
  },
  /**
   * Pairings
   *
   * @generated from rpc gluon.customauth.Query.Pairings
   */
  pairings: {
    methodKind: "unary";
    input: typeof QueryPairingsRequestSchema;
    output: typeof QueryPairingsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_gluon_customauth_query, 0);

