import *as axios from 'axios';


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
            return ProfileApi.Profiler(userId)
        }}

export const ProfileApi={
    Profiler(userId){
        return instance.get(`profile/`+userId)
    },
    GetStatus(userId){
        return instance.get(`profile/status/`+userId)
    },
    UpdateStatus (status){
        return instance.put(`profile/status/`,{status:status})
    },
}
export const authApi={
    me(){
        return instance.get(`auth/me`)
    }
}

