FROM node:18.13-alpine AS compile-image
WORKDIR /app
ARG config

# RUN npm install -g @angular/cli
COPY package.json ./
RUN npm cache clear --force
RUN npm install --legacy-peer-deps

# ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run ng build --optimization --output-hashing=bundles --source-map=false --aot --configuration=${config}

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=compile-image /app/dist/okr-frontend /usr/share/nginx/html
