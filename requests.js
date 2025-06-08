import http from 'k6/http';


export function getProducts(){
    return http.get('http://lojaebac.ebaconline.art.br/public/getProducts');
}

export function getCategories(){
    return http.get('http://lojaebac.ebaconline.art.br/public/getCategories')
}