include .env

.PHONY: build

build:
	./ssl/ssl.sh && docker-compose build 

.PHONY: down

down:
	docker-compose down 	

.PHONY: up

up:
	docker-compose up -d

.PHONY: logs

logs:
	docker-compose logs -f

.PHONY: stats

stats:
	docker-compose stats 	

.PHONY: ls

ls:
	docker container ls 

# access bash of app
.PHONY: app_bash

app_bash: 
	docker exec -it ${APP_NAME}-app bash

# access bash of nginx
.PHONY: nginx_bash

nginx_bash: 
	docker exec -it ${APP_NAME}-nginx bash

# access bash of db
.PHONY: db_bash

db_bash: 
	docker exec -it ${APP_NAME}-db bash

.PHONY: deploy

deploy:
	kind create cluster --name=${APP_NAME} && kubectl apply -f .k8s/deployment.yml && kubectl apply -f .k8s/service.yml

.PHONY: ssl

ssl: 
	openssl req -x509 -sha256 -newkey rsa:2048 -keyout ssl/certificate.key -out ssl/certificate.crt -days 1024 -nodes -subj '/CN=${APP_HOST}'


