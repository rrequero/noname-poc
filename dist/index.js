"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const noname_1 = require("noname");
const nonameApp = new noname_1.default();
nonameApp.init([(ctx, next) => __awaiter(this, void 0, void 0, function* () {
        // console.log('Middleware general');
        yield next();
    })]);
nonameApp.listen(3000, () => {
    // console.log(`Listen in port: ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map