# base image
FROM nginx:latest

# conf files
COPY  docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# expose
EXPOSE 8001

# execute
ENTRYPOINT [ "/usr/sbin/nginx","-g","daemon off;","-c","/etc/nginx/nginx.conf" ]
