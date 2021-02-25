FROM ubuntu:18.04

RUN apt-get update -qq
# double check this below, I'm not sure we need inkscape etc
RUN apt-get -y -qq install software-properties-common dirmngr apt-transport-https lsb-release ca-certificates xvfb imagemagick unzip inkscape
RUN add-apt-repository -y ppa:openscad/releases
RUN apt-get update -qq
RUN apt-get install -y -qq openscad
RUN apt-get install -y curl

# TODO maybe there's a safer way of installing
RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs

WORKDIR /home/rendering

COPY package*.json ./

RUN npm install

RUN openscad -v
RUN node -v
RUN npm -v

COPY index.js ./
COPY runScad.js ./

EXPOSE 8080

CMD [ "node", "index.js" ]
