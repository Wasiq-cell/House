"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ItemSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    qty: Number,
});
//# sourceMappingURL=item.schema.js.map