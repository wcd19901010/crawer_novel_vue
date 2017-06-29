/**
 * Created by cl on 2017/6/29.
 */
import http from './methods'
import {NOVELAPI,WEBSITEAPI} from './constant'
export default {
    getNovel:function(data){
        return http('GET',NOVELAPI,data)
    },
    addNovel:function(data){
        return http('POST',NOVELAPI,data)
    },
    delNovel:function(id){
        return http('DELETE',NOVELAPI+id)
    },
    upNovel:function(id,data){
        return http('PUT',NOVELAPI+id,data)
    },
    getWebsite:function(data,id){
        return http('GET',WEBSITEAPI+(id||''),data)
    },
    addWebsite:function(data){
        return http('POST',WEBSITEAPI,data)
    },
    delWebsite:function(id){
        return http('DELETE',WEBSITEAPI+id)
    },
    upWebsite:function(id,data){
        return http('PUT',WEBSITEAPI+id,data)
    }
}