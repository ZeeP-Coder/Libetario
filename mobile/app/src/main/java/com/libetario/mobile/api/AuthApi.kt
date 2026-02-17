package com.libetario.mobile.api


import com.libetario.mobile.model.User
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface AuthApi {

    @POST("api/auth/register")
    fun register(@Body user: User): Call<User>

    @POST("api/auth/login")
    fun login(@Body user: User): Call<User>
}
