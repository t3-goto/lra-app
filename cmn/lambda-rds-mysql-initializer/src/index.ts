import { execSync } from 'child_process';

export const handler = async (event: any, context: any) => {
  const { SOURCE_PULL_SCRIPT } = process.env;
  const { MYSQL_INIT_SCRIPT } = process.env;

  const BASE_DIR = `/var/task`;
  const CMD_CD_BASE = `cd ${BASE_DIR}`;

  const CMD_GIT_PULL = `${CMD_CD_BASE} && ./${SOURCE_PULL_SCRIPT}`;
  const CMD_SQL_INIT = `${CMD_CD_BASE} && ./${MYSQL_INIT_SCRIPT}`;

  console.log(execSync(CMD_GIT_PULL).toString());
  console.log(execSync(CMD_SQL_INIT).toString());

  const response = {
    statusCode: 200,
    body: JSON.stringify('OK!'),
  };
  return response;
};
