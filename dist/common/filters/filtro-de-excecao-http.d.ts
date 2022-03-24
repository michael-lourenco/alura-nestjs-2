import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class FiltroDeExcecaoHttp implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): void;
}
