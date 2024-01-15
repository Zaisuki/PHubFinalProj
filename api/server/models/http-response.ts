export class HttpResponse {
    code: number;
    message: any;
    constructor(message: any, errorCode: number) {
        this.message = message;
        this.code = errorCode;
    }
}
// module.exports = HttpResponse
