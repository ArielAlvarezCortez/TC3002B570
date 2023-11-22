#Dockerfile
FROM python:3.8
WORKDIR /tokenizacion
COPY ./requirements.txt ./requirements.txt
RUN pip install --no-cache-dir --upgrade -r ./requirements.txt


COPY ./tokenizador .
COPY ./api.py .

CMD [ "python", "api.py" ]