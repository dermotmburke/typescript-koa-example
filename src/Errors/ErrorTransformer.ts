import {Context} from "koa";
import {NotFoundError} from "../NotFoundError";


export function transformError(err: Error, context: Context) {
    switch (err.constructor) {
        case NotFoundError:
            context.status = 404;
            context.body = "boo";
            console.log("Custom");
            return;
        default:
            context.status = 500;
            context.body = "general";
            console.log("Hi there");
            return;
    }
}