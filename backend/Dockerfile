FROM python:3.9

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY app.py .
COPY wsgi.py .

RUN ls -l
EXPOSE 5000

CMD ["uwsgi", "--http", "0.0.0.0:5000", "--wsgi-file", "wsgi.py", "--callable", "app", "--processes", "4", "--threads", "2"]

