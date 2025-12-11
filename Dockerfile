# Container image that runs your code
FROM ubuntu:latest

RUN apt update
RUN apt install texlive-latex-base -y
RUN apt install texlive-fonts-recommended -y
RUN apt install texlive-fonts-extra -y
RUN apt install texlive-latex-extra -y


# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]

