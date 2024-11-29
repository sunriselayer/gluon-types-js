// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file gluon/customauth/operator/pubkey.proto (package gluon.customauth.operator, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file gluon/customauth/operator/pubkey.proto.
 */
export const file_gluon_customauth_operator_pubkey: GenFile = /*@__PURE__*/
  fileDesc("CiZnbHVvbi9jdXN0b21hdXRoL29wZXJhdG9yL3B1YmtleS5wcm90bxIZZ2x1b24uY3VzdG9tYXV0aC5vcGVyYXRvciIWCgZQdWJLZXkSDAoEdXNlchgBIAEoDELVAQodY29tLmdsdW9uLmN1c3RvbWF1dGgub3BlcmF0b3JCC1B1YmtleVByb3RvUAFaIWdsdW9uL3gvY3VzdG9tYXV0aC90eXBlcy9vcGVyYXRvcqICA0dDT6oCGUdsdW9uLkN1c3RvbWF1dGguT3BlcmF0b3LKAhlHbHVvblxDdXN0b21hdXRoXE9wZXJhdG9y4gIlR2x1b25cQ3VzdG9tYXV0aFxPcGVyYXRvclxHUEJNZXRhZGF0YeoCG0dsdW9uOjpDdXN0b21hdXRoOjpPcGVyYXRvcmIGcHJvdG8z");

/**
 * Operator PubKey
 *
 * @generated from message gluon.customauth.operator.PubKey
 */
export type PubKey = Message<"gluon.customauth.operator.PubKey"> & {
  /**
   * Address binary
   *
   * @generated from field: bytes user = 1;
   */
  user: Uint8Array;
};

/**
 * Describes the message gluon.customauth.operator.PubKey.
 * Use `create(PubKeySchema)` to create a new message.
 */
export const PubKeySchema: GenMessage<PubKey> = /*@__PURE__*/
  messageDesc(file_gluon_customauth_operator_pubkey, 0);
