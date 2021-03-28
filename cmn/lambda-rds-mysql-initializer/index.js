const { execSync } = require('child_process')

exports.handler = async function(event, context) {
  const stdout = execSync('ls -l ./scripts')
  console.log(`stdout: ${stdout.toString()}`)
  const response = {
    statusCode: 200,
    body: JSON.stringify("OK!!!!"),
  };
  return response;
};
