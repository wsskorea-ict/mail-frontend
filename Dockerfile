FROM public.ecr.aws/nginx/nginx:1.23-alpine-perl

COPY dist/ /usr/share/nginx/html