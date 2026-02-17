package com.libetario.mobile.model

data class User(
    val userID: Long? = null,
    val userEmail: String,
    val userPassword: String,
    val userFirstName: String? = null,
    val userLastName: String? = null
)