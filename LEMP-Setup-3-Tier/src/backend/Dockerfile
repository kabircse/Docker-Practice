FROM php:7.4-fpm-alpine

# Install extensions
RUN docker-php-ext-install pdo_mysql bcmath

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer