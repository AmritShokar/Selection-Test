import * as dotenv from "dotenv";
dotenv.config();

import SelectionTestServer from "./SelectionTestServer";

const service = new SelectionTestServer();

service.start();