import { NestResponse } from "./nest-response";
export declare class NestResponseBuilder {
    private resposta;
    comStatus(status: number): NestResponseBuilder;
    comHeaders(headers: Object): NestResponseBuilder;
    comBody(body: Object): NestResponseBuilder;
    build(): NestResponse;
}
