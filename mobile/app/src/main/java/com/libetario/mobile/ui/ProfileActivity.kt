package com.libetario.mobile

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class ProfileActivity : AppCompatActivity() {

    private lateinit var tvFullName: TextView
    private lateinit var tvEmailHeader: TextView
    private lateinit var tvFirstName: TextView
    private lateinit var tvLastName: TextView
    private lateinit var tvEmail: TextView
    private lateinit var btnBack: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_profile)

        // Initialize views
        tvFullName = findViewById(R.id.tvFullName)
        tvEmailHeader = findViewById(R.id.tvEmailHeader)
        tvFirstName = findViewById(R.id.tvFirstName)
        tvLastName = findViewById(R.id.tvLastName)
        tvEmail = findViewById(R.id.tvEmail)
        btnBack = findViewById(R.id.btnBack)

        // Load user data from SharedPreferences
        loadUserProfile()

        // Set up back button
        btnBack.setOnClickListener {
            finish() // Go back to previous activity (Dashboard)
        }
    }

    private fun loadUserProfile() {
        val prefs = getSharedPreferences("MyAppPrefs", MODE_PRIVATE)
        val email = prefs.getString("userEmail", null)
        val firstName = prefs.getString("userFirstName", null)
        val lastName = prefs.getString("userLastName", null)

        // If not logged in, redirect to Landing
        if (email == null) {
            Toast.makeText(this, "Please log in first", Toast.LENGTH_SHORT).show()
            val intent = Intent(this, LandingActivity::class.java)
            startActivity(intent)
            finish()
            return
        }

        // Display user information
        tvEmail.text = email
        tvEmailHeader.text = email

        if (firstName != null && lastName != null) {
            tvFirstName.text = firstName
            tvLastName.text = lastName
            tvFullName.text = "$firstName $lastName"
        } else {
            tvFirstName.text = "N/A"
            tvLastName.text = "N/A"
            tvFullName.text = email.substringBefore("@")
        }
    }
}

