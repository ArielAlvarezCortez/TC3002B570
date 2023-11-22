#Dockerfile
FROM python:3.11
WORKDIR /api
COPY ./requirements.txt ./requirements.txt
RUN pip install --no-cache-dir --upgrade -r ./requirements.txt


COPY ./tokenizacion/tokenizador .
COPY ./tokenizacion/api.py .

CMD [ "python", "api.py", "--host", "0.0.0.0", "--port", "80" ]