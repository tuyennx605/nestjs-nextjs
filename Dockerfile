FROM node:14.15.2

ARG WORK_DIR=/var/www/node
RUN mkdir -p ${WORK_DIR}
COPY . ${WORK_DIR}/
WORKDIR ${WORK_DIR}

RUN npm install
RUN npm run build

ENTRYPOINT  ["npm", "run", "start:prod"]
