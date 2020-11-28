# base image
FROM nginx:latest

# conf files
COPY  docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# static files
COPY dist/ /usr/share/nginx/html/

# expose
EXPOSE 8001

# execute
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
