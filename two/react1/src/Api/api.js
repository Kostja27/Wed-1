import *as axios from 'axios';
import { Profiler } from 'react';

const instance=axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{"API-KEY":"60e34408-e9f2-4998-b685-faee8c60f8b3"}  
})
export const UserAp={
    GetUser(currentpage,pagesize){
        return instance.get(`users?page=${currentpage}&count=${pagesize}`).then(response=>
    {return response.data}
        )},
        unFollow(userid){
            return instance.delete(`/follow/${userid}`)
                
        },
        Follow(userid){
            return instance.post(`/follow/${userid}`)
         },
        Profiler(userId){
            return instance.get(`profile/`+userId)
        }}
export const authApi={
    me(){
        return instance.get(`auth/me`)
    }
}

