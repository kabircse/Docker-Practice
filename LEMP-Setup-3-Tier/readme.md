Run command:
1. ```127.0.0.1 backend.dev frontend.dev phpmyadmin.dev```
-> For making virtual host place the above line to the systems hosts file

2. ```docker-compose build backend```
-> Rebuild the image for updating the dockerfile

3.```docker-compose run --rm backend composer create-project --prefer-dist laravel/laravel tmp "7.*"`` 
-> Install composer and clone laravel project to backend/tmp folder

4. ```docker-compose run --rm backend sh -c "mv -n tmp/.* ./ && mv tmp/* ./ && rm -Rf tmp"```
-> Copy the content to backend folder from temp directory and remove the temp directory later both in container and local

5. ```docker-compose up -d``` 
-> Start and run the containers in the background

6. ```docker-compose exec backend php artisan migrate```
-> Run laravel migrations and test the database to phpmyadmin.dev using root/root credentials at demo database

7. ```docker-compose build frontend```
-> Build the frontend for vue and yarn through node modules

8. ```docker-compose run --rm frontend sh -c "yarn global add @vue/cli && vue create tmp --default --force"```
-> Create the fresh vue js project using vue cli

9. ```docker-compose run --rm frontend sh -c "mv -n tmp/.* ./ && mv tmp/* ./ && rm -Rf tmp"```
-> Copy the content to frontend folder from temp directory and remove the temp directory later both in container and local 

10. ```docker-compose restart``` 
-> Restart the containers

11. ```docker-compose logs -f frontend```
-> Tail the containers' logs of frontend

12. ```docker-compose exec frontend yarn add axios```
-> Install axios through yarn

13. ```docker-compose down```
-> Stop and/or destroy the containers

14. ```docker-compose down -v```
-> Stop and/or destroy the containers and their volumes (including named volumes)
-> Down destroys the containers, and -v deletes the associated volumes.

15. ```docker-compose down -v --rmi all```
-> Delete everything, including images