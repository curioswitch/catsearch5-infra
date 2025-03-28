import { App } from "cdktf";
import { CatSearchStack } from "./stacks/catsearch/index.js";
import { SysadminStack } from "./stacks/sysadmin/index.js";

const app = new App();

new SysadminStack(app);

new CatSearchStack(app, {
  environment: "dev",
  project: "catsearch5-dev",
  domain: "alpha.catsearch.curioswitch.org",
});

new CatSearchStack(app, {
  environment: "prod",
  project: "catsearch5-prod",
  domain: "catsearch.curioswitch.org",
});

app.synth();
