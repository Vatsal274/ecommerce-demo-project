
export enum HttpStatusCode {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    AMBIGUOUS = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    I_AM_A_TEAPOT = 418,
    MISDIRECTED = 421,
    UNPROCESSABLE_ENTITY = 422,
    FAILED_DEPENDENCY = 424,
    PRECONDITION_REQUIRED = 428,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
}
export enum HttpStatusMessage {
    CONTINUE = 'CONTINUE',
    SWITCHING_PROTOCOLS = 'SWITCHING_PROTOCOLS',
    PROCESSING = 'PROCESSING',
    OK = 'OK',
    CREATED = 'CREATED',
    ACCEPTED = 'ACCEPTED',
    NON_AUTHORITATIVE_INFORMATION = 'NON_AUTHORITATIVE_INFORMATION',
    NO_CONTENT = 'NO_CONTENT',
    RESET_CONTENT = 'RESET_CONTENT',
    PARTIAL_CONTENT = 'PARTIAL_CONTENT',
    AMBIGUOUS = 'AMBIGUOUS',
    MOVED_PERMANENTLY = 'MOVED_PERMANENTLY',
    FOUND = 'FOUND',
    SEE_OTHER = 'SEE_OTHER',
    NOT_MODIFIED = 'NOT_MODIFIED',
    TEMPORARY_REDIRECT = 'TEMPORARY_REDIRECT',
    PERMANENT_REDIRECT = 'PERMANENT_REDIRECT',
    BAD_REQUEST = 'BAD_REQUEST',
    UNAUTHORIZED = 'UNAUTHORIZED',
    PAYMENT_REQUIRED = 'PAYMENT_REQUIRED',
    FORBIDDEN = 'FORBIDDEN',
    NOT_FOUND = 'NOT_FOUND',
    METHOD_NOT_ALLOWED = 'METHOD_NOT_ALLOWED',
    NOT_ACCEPTABLE = 'NOT_ACCEPTABLE',
    PROXY_AUTHENTICATION_REQUIRED = 'PROXY_AUTHENTICATION_REQUIRED',
    REQUEST_TIMEOUT = 'REQUEST_TIMEOUT',
    CONFLICT = 'CONFLICT',
    GONE = 'GONE',
    LENGTH_REQUIRED = 'LENGTH_REQUIRED',
    PRECONDITION_FAILED = 'PRECONDITION_FAILED',
    PAYLOAD_TOO_LARGE = 'PAYLOAD_TOO_LARGE',
    URI_TOO_LONG = 'URI_TOO_LONG',
    UNSUPPORTED_MEDIA_TYPE = 'UNSUPPORTED_MEDIA_TYPE',
    REQUESTED_RANGE_NOT_SATISFIABLE = 'REQUESTED_RANGE_NOT_SATISFIABLE',
    EXPECTATION_FAILED = 'EXPECTATION_FAILED',
    I_AM_A_TEAPOT = 'I_AM_A_TEAPOT',
    MISDIRECTED = 'MISDIRECTED',
    UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
    FAILED_DEPENDENCY = 'FAILED_DEPENDENCY',
    PRECONDITION_REQUIRED = 'PRECONDITION_REQUIRED',
    TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    NOT_IMPLEMENTED = 'NOT_IMPLEMENTED',
    BAD_GATEWAY = 'BAD_GATEWAY',
    SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
    GATEWAY_TIMEOUT = 'GATEWAY_TIMEOUT',
    HTTP_VERSION_NOT_SUPPORTED = 'HTTP_VERSION_NOT_SUPPORTED',
    ACCOUNT_DELETED = 'ACCOUNT_DELETED',
    ACCOUNT_INACTIVE = 'ACCOUNT_INACTIVE',
    ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
    DEFAULT_MESSAGE = 'DEFAULT_MESSAGE',
    INVALID_IP77_PASSWORD = 'INVALID_IP77_PASSWORD',
}
export enum USER_TYPE {
    BUYER = "buyer",
    SELLER = "seller"
}
export enum COLLECTION {
    USER = 'user',
    SESSION = 'session',
    PRODUCT = 'product',
    CHAT = 'chat'
}
export enum ExceptionMessage {
    DEFAULT_MESSAGE = 'DEFAULT_MESSAGE',
    EMAIL_ALREADY_EXIST = 'EMAIL_ALREADY_EXIST',
    VERIFICATION_FAILED = 'VERIFICATION_FAILED',
    EMAIL_NOT_EXISTS = 'EMAIL_NOT_EXISTS',
    LOGIN_FAILED = 'LOGIN_FAILED',
    SOMETHING_WENT_WRONG = 'SOMETHING_WENT_WRONG',
    USER_NOT_EXISTS = 'USER_NOT_EXISTS',
    USER_ALREADY_EXIST = 'USER_ALREADY_EXIST',
    AUTH_INVALID_TOKEN = 'AUTH_INVALID_TOKEN',
    AUTH_INVALID_STRATEGY = 'AUTH_INVALID_STRATEGY',
    OTP_EXPIRED = 'OTP_EXPIRED',
    SESSION_NOT_FOUND = 'SESSION_NOT_FOUND',
    INVALID_REQUEST = 'INVALID_REQUEST',
    INCORRECT_OTP = 'INCORRECT_OTP',
    INVALID_APIKEY = 'INVALID_APIKEY',
    INVALID_OTP = 'INVALID_OTP',
    INVALID_PASSWORD = 'INVALID_PASSWORD',
    UNAUTHORIZED = 'UNAUTHORIZED',
    MOVED_PERMANENTLY = 'MOVED_PERMANENTLY',
    USER_BLOCKED = 'USER_BLOCKED',
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    TOKENIZATION_ERROR = 'TOKENIZATION_ERROR',
    LINK_EXPIRE = 'Link Expired',
    CONNECTION_NOT_FOUND = 'CONNECTION_NOT_FOUND',
    FILE_ERROR = 'FILE_NOT_FOUND',
    PRODUCT_NOT_EXSITS = 'PRODUCT_NOT_EXSITS',
    NOT_VALID_PRODUCT_ID = 'NOT_VALID_PRODUCT_ID',
    TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
}
export enum SuccessMessage {
    PASSWORD_CHANGED = 'Password Change Successfully',
    Mail_SEND = 'Mail Send Successfully',
    USER_REGISTRATION_MAIL = 'OTP Send to entered email address',
    USER_REGISTRATION = 'Register successfully',
    PRODUCT_EDITED = 'PRODUCT_EDITED',
    PRODUCT_DELETED = 'PRODUCT_DELETED',
    PRODUCT_CREATED = 'PRODUCT_CREATED',
    ALL_PRODUCTS = 'ALL_PRODUCTS',
}

export enum OrderStatus {
    Active = 1,
    InActive = 2,
}