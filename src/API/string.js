import { rootURL, site_id, verificationCode } from './index';
import {sendRequest} from './sendRequest';

export function getSiteString(onSuccess, onError){
  sendRequest(rootURL + '/api/site/strings', {
    site_id,
    verificationCode
  }, onSuccess, onError)
}
