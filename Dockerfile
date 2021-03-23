FROM node:14

WORKDIR /upload

RUN npm i express
COPY index.js .

ENTRYPOINT [ "node", "index.js" ]
