package com.example.chat;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Context;
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
import com.google.firebase.database.DatabaseReference;

public class SignInActivity extends AppCompatActivity {

    EditText email, password;
    Button btn_signin;
    TextView go_to_Registerpage, invalidPass, invalidEmail, pleaseCheckFields;

    FirebaseAuth auth;
    DatabaseReference reference;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_in);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setTitle("SignIn");
//        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        email = findViewById(R.id.email);
        password = findViewById(R.id.password);
        btn_signin = findViewById(R.id.btn_signin);
        go_to_Registerpage = findViewById(R.id.goToRegisterPage);
        invalidPass = findViewById(R.id.PleaseEnterPassword);
        invalidEmail = findViewById(R.id.InvalidEmail);
        pleaseCheckFields = findViewById(R.id.PleaseCheckAllFields);

        auth = FirebaseAuth.getInstance();

        btn_signin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String txt_email = email.getText().toString();
                String txt_password = password.getText().toString();

                if(TextUtils.isEmpty(txt_password) && TextUtils.isEmpty(txt_email)){
                    pleaseCheckFields.setVisibility(View.VISIBLE);
                }

                if(TextUtils.isEmpty(txt_email)){
                    invalidEmail.setVisibility(View.VISIBLE);
                }

                if(txt_password.length()<8 || TextUtils.isEmpty(txt_password)){
                    invalidPass.setVisibility(View.VISIBLE);
                }
                else{
                    auth.signInWithEmailAndPassword(txt_email, txt_password).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                        @Override
                        public void onComplete(@NonNull Task<AuthResult> task) {
                            if(task.isSuccessful()){
                                Toast.makeText(SignInActivity.this, "SignIn Successfully", Toast.LENGTH_LONG).show();
                                Intent intent = new Intent(SignInActivity.this, StartActivity.class);
                                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                                startActivity(intent);
                                finish();
                            }else {
                                Toast.makeText(SignInActivity.this, "Authentication Successfully", Toast.LENGTH_LONG).show();
                            }
                        }
                    });
                }



            }
        });

        go_to_Registerpage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(SignInActivity.this, RegisterActivity.class);
                startActivity(intent);
            }
        });
    }
}
