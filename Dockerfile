FROM node:14

WORKDIR /upload

RUN npm i express multer
COPY index.js .

ENTRYPOINT [ "node", "index.js" ]
