import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";

@Catch()
export class FiltroDeExcecaoHttp implements ExceptionFilter {

    private httpAdapter: AbstractHttpAdapter;

    constructor(adapterHost: HttpAdapterHost){
       this.httpAdapter = adapterHost.httpAdapter;
    }

    catch(exception: Error, host: ArgumentsHost) {

        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();

        const { status, body } = exception instanceof HttpException 
            ? {
                status: exception.getStatus(),
                body: exception.getResponse(),
            }
            : {
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                body: {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    message: exception.message,
                    path: request.path,
                },
            }
        this.httpAdapter.reply(response, body, status);
    }
}
