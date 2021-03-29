import { execSync } from 'child_process';

export const handler = async (event: any, context: any) => {
  const { SOURCE_URL } = process.env;
  const { SOURCE_DIR } = process.env;
  const { SOURCE_BRANCH } = process.env;
  const { MYSQL_INIT_SCRIPT } = process.env;

  const WORK_DIR = `/tmp`;
  const BASE_DIR = `/var/task`;
  const CMD_CD_WORK = `cd ${WORK_DIR}`;
  const CMD_CD_BASE = `cd ${BASE_DIR}`;
  const CMD_GIT_INIT = `${CMD_CD_WORK} && git init && git config core.sparsecheckout true`;
  const CMD_GIT_REMOTE_ADD = `${CMD_CD_WORK} && git remote add origin ${SOURCE_URL}.git`;
  const CMD_GIT_SPARCE_SET = `${CMD_CD_WORK} && echo ${SOURCE_DIR} >.git/info/sparse-checkout`;
  const CMD_GIT_PULL = `${CMD_CD_WORK} && git pull origin ${SOURCE_BRANCH}`;
  const CMD_GIT_TEST = `${CMD_CD_WORK} && ls -l ./`;
  const CMD_SQL_INIT = `${CMD_CD_BASE} && ./${MYSQL_INIT_SCRIPT}`;

  console.log(execSync(CMD_GIT_INIT).toString());
  console.log(execSync(CMD_GIT_REMOTE_ADD).toString());
  console.log(execSync(CMD_GIT_SPARCE_SET).toString());
  console.log(execSync(CMD_GIT_PULL).toString());
  console.log(execSync(CMD_GIT_TEST).toString());
  console.log(execSync(CMD_SQL_INIT).toString());

  const response = {
    statusCode: 200,
    body: JSON.stringify('OK!'),
  };
  return response;
};
