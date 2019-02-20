FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
# Run scripts for proxy server
RUN npm install
# Run scripts for component servers
RUN node proxy_client/hrr36-fec-tyler-widget/server/index.js
# RUN node proxy_client/hrr36-fec1-britt-widget/server/index.js
# RUN node proxy_client/merary-banner-component/server/index.js
# RUN node proxy_client/bill-morelike-component/server/index.js
EXPOSE 4445
CMD [ "node", "server/index.js" ]