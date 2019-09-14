FROM python:3.7-alpine
RUN apk add --no-cache gcc musl-dev linux-headers postgresql-dev
WORKDIR /app
COPY ./src/backend/requirements.txt ./src/backend/requirements.txt
RUN pip install --upgrade pip==9.0.3

RUN pip install -r ./src/backend/requirements.txt --disable-pip-version-check
RUN pip install python-dotenv --disable-pip-version-check

ENV FLASK_APP src/backend/index.py
ENV FLASK_RUN_HOST 0.0.0.0
ENV FLASK_RUN_PORT 5000
ENV FLASK_ENV production

RUN pip install -U pip

COPY . .

CMD ["flask", "run"]

