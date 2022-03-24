import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";

@Catch()
export class FiltroDeExcecaoHttp implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost) {

        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();

    }
}
