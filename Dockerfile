FROM node:14

WORKDIR /upload

RUN npm i express multer \
  && mkdir /uploaded-files
COPY index.js .

ENTRYPOINT [ "node", "index.js" ]
