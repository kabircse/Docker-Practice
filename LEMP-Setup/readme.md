Run command:
1. ```docker-compose up -d``` 
-> Start and run the containers in the background

2. ```docker-compose restart``` 
-> Restart the containers

3. ```docker-compose ps```
-> List the containers

4. ```docker-compose logs [service]```
-> Tail the containers' logs
Replace [service] with a service name (e.g. nginx) to display this service's logs only. Use -f for force.

5. ```docker-compose stop```
-> Stop the containers

6. ```docker-compose down```
-> Stop and/or destroy the containers

7. ```docker-compose down -v```
-> Stop and/or destroy the containers and their volumes (including named volumes)

8. ```docker-compose down -v --rmi all```
-> Delete everything, including images

9. ```docker-compose exec```
-> To run bash on a running container

10. ```docker-compose run php -m```
-> To run bash on a new container