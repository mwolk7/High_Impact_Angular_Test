let baseUrl = '';
const enviroment = 'dev';

switch (enviroment) {
  case 'prod':
    baseUrl = 'http://vps-1575977-x.dattaweb.com:8080/atscom';
  case 'stage':
    baseUrl = 'http://vps-1575977-x.dattaweb.com:8080/atscom';
  case 'QA':
    baseUrl = 'http://vps-1575977-x.dattaweb.com:8080/atscom';
  case 'dev':
    baseUrl = 'http://vps-1575977-x.dattaweb.com:8080/atscom';
  default:
    baseUrl = 'http://vps-1575977-x.dattaweb.com:8080/atscom';
}

export const BASE_URL = baseUrl;
