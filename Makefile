run:
	docker-compose up --build

run-scaled:
	docker-compose up --build --scale node=3

clean:
	docker-compose down