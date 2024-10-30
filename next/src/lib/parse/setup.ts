import ParseService from "parse/node";

ParseService.initialize(
  process.env.B4A_APPLICATION_ID,
  process.env.B4A_JAVASCRIPT_KEY,
);

ParseService.serverURL = process.env.B4A_SERVER_URL;

export default ParseService;
