#Dockerfile
FROM python:3.11
WORKDIR /api
COPY ./requirements.txt ./requirements.txt
RUN pip install --no-cache-dir --upgrade -r ./requirements.txt


COPY ./tokenizacion/tokenizador .
COPY ./tokenizacion/api.py .

EXPOSE  80

CMD [ "python", "api.py"]