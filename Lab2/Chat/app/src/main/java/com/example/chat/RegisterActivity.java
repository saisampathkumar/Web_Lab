package com.example.chat;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;


import java.util.HashMap;

public class RegisterActivity extends AppCompatActivity {

    EditText username, email, password;
    Button btn_register;
    TextView go_to_SignInpage, invalidUser, invalidPass, invalidEmail, pleaseCheckFields;

    FirebaseAuth auth;
    DatabaseReference reference;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setTitle("Register");
//        getSupportActionBar().setDisplayHomeAsUpEnabled(true);



        username = findViewById(R.id.Username);
        email = findViewById(R.id.email);
        password = findViewById(R.id.password);
        btn_register = findViewById(R.id.btn_register);
        go_to_SignInpage = findViewById(R.id.goToSignInPage);
        invalidUser = findViewById(R.id.invalidUserName);
        invalidPass = findViewById(R.id.PleaseEnterPassword);
        invalidEmail = findViewById(R.id.InvalidEmail);
        pleaseCheckFields = findViewById(R.id.PleaseCheckAllFields);

        auth = FirebaseAuth.getInstance();

        btn_register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String txt_username = username.getText().toString();
                String txt_email = email.getText().toString();
                String txt_password = password.getText().toString();


                if(TextUtils.isEmpty(txt_username) && TextUtils.isEmpty(txt_password) && TextUtils.isEmpty(txt_email)){
                    pleaseCheckFields.setVisibility(View.VISIBLE);
                }

                if(TextUtils.isEmpty(txt_username)){
                    invalidUser.setVisibility(View.VISIBLE);
                }

                if(TextUtils.isEmpty(txt_email)){
                    invalidEmail.setVisibility(View.VISIBLE);
                }

                if(txt_password.length()<8 || TextUtils.isEmpty(txt_password)){
                    invalidPass.setVisibility(View.VISIBLE);
                }
                else{
                    register(txt_username,txt_email, txt_password);
                }
            }
        });

        go_to_SignInpage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(RegisterActivity.this, SignInActivity.class);
                startActivity(intent);
            }
        });

    }

    private void register(final String username, String email, String password){
        auth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener( new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if(task.isSuccessful()){
                            FirebaseUser firebaseUser = auth.getCurrentUser();
                            assert firebaseUser != null;
                            String userid = firebaseUser.getUid();

                            reference = FirebaseDatabase.getInstance().getReference("Users").child(userid);

                            HashMap<String, String> hashMap = new HashMap<>();
                            hashMap.put("id", userid);
                            hashMap.put("username", username);
                            hashMap.put("imageURL", "default");

                            reference.setValue(hashMap).addOnCompleteListener(new OnCompleteListener<Void>() {
                                @Override
                                public void onComplete(@NonNull Task<Void> task) {
                                    if(task.isSuccessful()){
                                        Toast.makeText(RegisterActivity.this, "Registered Successfully", Toast.LENGTH_LONG).show();
                                        Intent intent = new Intent(RegisterActivity.this, StartActivity.class);
                                        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                                        startActivity(intent);
                                        finish();
                                    }
                                }
                            });
                        }
                            else {
                                Toast.makeText(RegisterActivity.this, "You can't Register Please try Again later......", Toast.LENGTH_SHORT).show();
                            }

            }
        });
    }
}
