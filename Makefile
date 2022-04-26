# Check that you are using proper nginx configuration
run:
	docker-compose up --build

# Check that you are using proper nginx configuration
run-scaled:
	docker-compose up --build --scale node=3

clean:
	docker-compose down