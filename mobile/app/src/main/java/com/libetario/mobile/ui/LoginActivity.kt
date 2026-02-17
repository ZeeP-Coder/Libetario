package com.libetario.mobile

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.libetario.mobile.api.AuthApi
import com.libetario.mobile.api.RetrofitClient
import com.libetario.mobile.model.User
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class LoginActivity : AppCompatActivity() {

    private lateinit var etEmail: EditText
    private lateinit var etPassword: EditText
    private lateinit var btnLogin: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        etEmail = findViewById(R.id.etEmail)
        etPassword = findViewById(R.id.etPassword)
        btnLogin = findViewById(R.id.btnLogin)

        btnLogin.setOnClickListener {

            val email = etEmail.text.toString().trim()
            val password = etPassword.text.toString().trim()

            if (email.isEmpty() || password.isEmpty()) {
                Toast.makeText(this, "Email and password are required", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            val user = User(
                userEmail = email,
                userPassword = password,
                userFirstName = null,
                userLastName = null,
                userID = null
            )

            val api = RetrofitClient.instance.create(AuthApi::class.java)
            api.login(user).enqueue(object : Callback<User> {
                override fun onResponse(call: Call<User>, response: Response<User>) {
                    if (response.isSuccessful) {
                        val loggedUser = response.body()
                        if (loggedUser != null) {
                            // Save session locally
                            val prefs = getSharedPreferences("MyAppPrefs", MODE_PRIVATE)
                            prefs.edit().putLong("userID", loggedUser.userID!!).apply()
                            prefs.edit().putString("userEmail", loggedUser.userEmail).apply()
                            prefs.edit().putString("userFirstName", loggedUser.userFirstName ?: "").apply()
                            prefs.edit().putString("userLastName", loggedUser.userLastName ?: "").apply()

                            // Go to Dashboard
                            val intent = Intent(this@LoginActivity, DashboardActivity::class.java)
                            startActivity(intent)
                            finish()
                        }
                    } else {
                        Toast.makeText(this@LoginActivity, "Invalid email or password", Toast.LENGTH_SHORT).show()
                    }
                }

                override fun onFailure(call: Call<User>, t: Throwable) {
                    Toast.makeText(this@LoginActivity, "Error: ${t.message}", Toast.LENGTH_LONG).show()
                }
            })
        }
    }
}
