FROM python:3.13-slim

WORKDIR /app

COPY . .

RUN pip install flask

EXPOSE 5003

CMD ["python", "app.py"]