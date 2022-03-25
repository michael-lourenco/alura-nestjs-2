import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { Observable } from "rxjs";
export declare class TransformaRespostaInterceptor implements NestInterceptor {
    private httpAdapter;
    constructor(adapterHost: HttpAdapterHost);
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>;
}
