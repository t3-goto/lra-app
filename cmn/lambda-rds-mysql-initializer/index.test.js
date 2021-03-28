const lambda = require("./index.js");

const main = async () => {
  const event = null;
  const context = null;
  try {
    const result = await lambda.handler(event, context);
    console.log(result);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
main();
