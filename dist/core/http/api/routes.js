"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const segment_1 = require("@modules/segment/routes/segment");
const lead_1 = require("@modules/lead/routes/lead");
const campaign_1 = require("@modules/campaign/routes/campaign");
const sender_1 = require("@modules/sender/routes/sender");
const user_1 = require("@modules/user/routes/user");
const templates_1 = require("@modules/templates/routes/templates");
const v1Routes = express_1.default.Router();
v1Routes.use('/campaign', campaign_1.campaignRouter);
v1Routes.use('/lead', lead_1.leadRouter);
v1Routes.use('/sender', sender_1.senderRouter);
v1Routes.use('/segment', segment_1.segmentRouter);
v1Routes.use('/user', user_1.userRouter);
v1Routes.use('/templates', templates_1.templateRouter);
exports.default = v1Routes;
