import { rootURL, site_id, verificationCode } from './index';
import {sendRequest} from './sendRequest';

export function getSiteLanguages(onSuccess, onError){
  sendRequest(rootURL + '/api/site/languages', {
    site_id,
    verificationCode
  }, onSuccess, onError)
}
