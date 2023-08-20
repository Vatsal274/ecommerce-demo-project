"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessMessage = exports.ExceptionMessage = exports.COLLECTION = exports.USER_TYPE = exports.HttpStatusMessage = exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["CONTINUE"] = 100] = "CONTINUE";
    HttpStatusCode[HttpStatusCode["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatusCode[HttpStatusCode["PROCESSING"] = 102] = "PROCESSING";
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatusCode[HttpStatusCode["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatusCode[HttpStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatusCode[HttpStatusCode["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatusCode[HttpStatusCode["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatusCode[HttpStatusCode["AMBIGUOUS"] = 300] = "AMBIGUOUS";
    HttpStatusCode[HttpStatusCode["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatusCode[HttpStatusCode["FOUND"] = 302] = "FOUND";
    HttpStatusCode[HttpStatusCode["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatusCode[HttpStatusCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatusCode[HttpStatusCode["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatusCode[HttpStatusCode["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatusCode[HttpStatusCode["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatusCode[HttpStatusCode["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatusCode[HttpStatusCode["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatusCode[HttpStatusCode["CONFLICT"] = 409] = "CONFLICT";
    HttpStatusCode[HttpStatusCode["GONE"] = 410] = "GONE";
    HttpStatusCode[HttpStatusCode["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatusCode[HttpStatusCode["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatusCode[HttpStatusCode["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatusCode[HttpStatusCode["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatusCode[HttpStatusCode["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatusCode[HttpStatusCode["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpStatusCode[HttpStatusCode["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatusCode[HttpStatusCode["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    HttpStatusCode[HttpStatusCode["MISDIRECTED"] = 421] = "MISDIRECTED";
    HttpStatusCode[HttpStatusCode["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatusCode[HttpStatusCode["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatusCode[HttpStatusCode["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpStatusCode[HttpStatusCode["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatusCode[HttpStatusCode["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatusCode[HttpStatusCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatusCode[HttpStatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatusCode[HttpStatusCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatusCode[HttpStatusCode["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
})(HttpStatusCode || (exports.HttpStatusCode = HttpStatusCode = {}));
var HttpStatusMessage;
(function (HttpStatusMessage) {
    HttpStatusMessage["CONTINUE"] = "CONTINUE";
    HttpStatusMessage["SWITCHING_PROTOCOLS"] = "SWITCHING_PROTOCOLS";
    HttpStatusMessage["PROCESSING"] = "PROCESSING";
    HttpStatusMessage["OK"] = "OK";
    HttpStatusMessage["CREATED"] = "CREATED";
    HttpStatusMessage["ACCEPTED"] = "ACCEPTED";
    HttpStatusMessage["NON_AUTHORITATIVE_INFORMATION"] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatusMessage["NO_CONTENT"] = "NO_CONTENT";
    HttpStatusMessage["RESET_CONTENT"] = "RESET_CONTENT";
    HttpStatusMessage["PARTIAL_CONTENT"] = "PARTIAL_CONTENT";
    HttpStatusMessage["AMBIGUOUS"] = "AMBIGUOUS";
    HttpStatusMessage["MOVED_PERMANENTLY"] = "MOVED_PERMANENTLY";
    HttpStatusMessage["FOUND"] = "FOUND";
    HttpStatusMessage["SEE_OTHER"] = "SEE_OTHER";
    HttpStatusMessage["NOT_MODIFIED"] = "NOT_MODIFIED";
    HttpStatusMessage["TEMPORARY_REDIRECT"] = "TEMPORARY_REDIRECT";
    HttpStatusMessage["PERMANENT_REDIRECT"] = "PERMANENT_REDIRECT";
    HttpStatusMessage["BAD_REQUEST"] = "BAD_REQUEST";
    HttpStatusMessage["UNAUTHORIZED"] = "UNAUTHORIZED";
    HttpStatusMessage["PAYMENT_REQUIRED"] = "PAYMENT_REQUIRED";
    HttpStatusMessage["FORBIDDEN"] = "FORBIDDEN";
    HttpStatusMessage["NOT_FOUND"] = "NOT_FOUND";
    HttpStatusMessage["METHOD_NOT_ALLOWED"] = "METHOD_NOT_ALLOWED";
    HttpStatusMessage["NOT_ACCEPTABLE"] = "NOT_ACCEPTABLE";
    HttpStatusMessage["PROXY_AUTHENTICATION_REQUIRED"] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatusMessage["REQUEST_TIMEOUT"] = "REQUEST_TIMEOUT";
    HttpStatusMessage["CONFLICT"] = "CONFLICT";
    HttpStatusMessage["GONE"] = "GONE";
    HttpStatusMessage["LENGTH_REQUIRED"] = "LENGTH_REQUIRED";
    HttpStatusMessage["PRECONDITION_FAILED"] = "PRECONDITION_FAILED";
    HttpStatusMessage["PAYLOAD_TOO_LARGE"] = "PAYLOAD_TOO_LARGE";
    HttpStatusMessage["URI_TOO_LONG"] = "URI_TOO_LONG";
    HttpStatusMessage["UNSUPPORTED_MEDIA_TYPE"] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatusMessage["REQUESTED_RANGE_NOT_SATISFIABLE"] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpStatusMessage["EXPECTATION_FAILED"] = "EXPECTATION_FAILED";
    HttpStatusMessage["I_AM_A_TEAPOT"] = "I_AM_A_TEAPOT";
    HttpStatusMessage["MISDIRECTED"] = "MISDIRECTED";
    HttpStatusMessage["UNPROCESSABLE_ENTITY"] = "UNPROCESSABLE_ENTITY";
    HttpStatusMessage["FAILED_DEPENDENCY"] = "FAILED_DEPENDENCY";
    HttpStatusMessage["PRECONDITION_REQUIRED"] = "PRECONDITION_REQUIRED";
    HttpStatusMessage["TOO_MANY_REQUESTS"] = "TOO_MANY_REQUESTS";
    HttpStatusMessage["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
    HttpStatusMessage["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
    HttpStatusMessage["BAD_GATEWAY"] = "BAD_GATEWAY";
    HttpStatusMessage["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
    HttpStatusMessage["GATEWAY_TIMEOUT"] = "GATEWAY_TIMEOUT";
    HttpStatusMessage["HTTP_VERSION_NOT_SUPPORTED"] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpStatusMessage["ACCOUNT_DELETED"] = "ACCOUNT_DELETED";
    HttpStatusMessage["ACCOUNT_INACTIVE"] = "ACCOUNT_INACTIVE";
    HttpStatusMessage["ACCOUNT_LOCKED"] = "ACCOUNT_LOCKED";
    HttpStatusMessage["DEFAULT_MESSAGE"] = "DEFAULT_MESSAGE";
    HttpStatusMessage["INVALID_IP77_PASSWORD"] = "INVALID_IP77_PASSWORD";
})(HttpStatusMessage || (exports.HttpStatusMessage = HttpStatusMessage = {}));
var USER_TYPE;
(function (USER_TYPE) {
    USER_TYPE["BUYER"] = "buyer";
    USER_TYPE["SELLER"] = "seller";
})(USER_TYPE || (exports.USER_TYPE = USER_TYPE = {}));
var COLLECTION;
(function (COLLECTION) {
    COLLECTION["USER"] = "user";
})(COLLECTION || (exports.COLLECTION = COLLECTION = {}));
var ExceptionMessage;
(function (ExceptionMessage) {
    ExceptionMessage["DEFAULT_MESSAGE"] = "DEFAULT_MESSAGE";
    ExceptionMessage["EMAIL_ALREADY_EXIST"] = "EMAIL_ALREADY_EXIST";
    ExceptionMessage["VERIFICATION_FAILED"] = "VERIFICATION_FAILED";
    ExceptionMessage["EMAIL_NOT_EXISTS"] = "EMAIL_NOT_EXISTS";
    ExceptionMessage["LOGIN_FAILED"] = "LOGIN_FAILED";
    ExceptionMessage["SOMETHING_WENT_WRONG"] = "SOMETHING_WENT_WRONG";
    ExceptionMessage["USER_NOT_EXISTS"] = "USER_NOT_EXISTS";
    ExceptionMessage["USER_ALREADY_EXIST"] = "USER_ALREADY_EXIST";
    ExceptionMessage["AUTH_INVALID_TOKEN"] = "AUTH_INVALID_TOKEN";
    ExceptionMessage["AUTH_INVALID_STRATEGY"] = "AUTH_INVALID_STRATEGY";
    ExceptionMessage["OTP_EXPIRED"] = "OTP_EXPIRED";
    ExceptionMessage["SESSION_NOT_FOUND"] = "SESSION_NOT_FOUND";
    ExceptionMessage["INVALID_REQUEST"] = "INVALID_REQUEST";
    ExceptionMessage["INCORRECT_OTP"] = "INCORRECT_OTP";
    ExceptionMessage["INVALID_APIKEY"] = "INVALID_APIKEY";
    ExceptionMessage["INVALID_OTP"] = "INVALID_OTP";
    ExceptionMessage["INVALID_PASSWORD"] = "INVALID_PASSWORD";
    ExceptionMessage["UNAUTHORIZED"] = "UNAUTHORIZED";
    ExceptionMessage["MOVED_PERMANENTLY"] = "MOVED_PERMANENTLY";
    ExceptionMessage["USER_BLOCKED"] = "USER_BLOCKED";
    ExceptionMessage["USER_NOT_FOUND"] = "USER_NOT_FOUND";
    ExceptionMessage["TOKENIZATION_ERROR"] = "TOKENIZATION_ERROR";
    ExceptionMessage["LINK_EXPIRE"] = "Link Expired";
    ExceptionMessage["CONNECTION_NOT_FOUND"] = "CONNECTION_NOT_FOUND";
    ExceptionMessage["FILE_ERROR"] = "FILE_NOT_FOUND";
})(ExceptionMessage || (exports.ExceptionMessage = ExceptionMessage = {}));
var SuccessMessage;
(function (SuccessMessage) {
    SuccessMessage["PASSWORD_CHANGED"] = "Password Change Successfully";
    SuccessMessage["Mail_SEND"] = "Mail Send Successfully";
    SuccessMessage["USER_REGISTRATION_MAIL"] = "OTP Send to entered email address";
    SuccessMessage["USER_REGISTRATION"] = "Register successfully";
})(SuccessMessage || (exports.SuccessMessage = SuccessMessage = {}));