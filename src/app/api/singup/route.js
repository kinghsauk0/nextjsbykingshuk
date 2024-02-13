// Import necessary modules and dependencies
import db from "@/db/db.config.js";
import dotenv from "dotenv";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.models.js";
import bcrypt from "bcrypt";

// Load environment variables
dotenv.config({
    path: "./.env"
});

// Connect to the database
db();

// Define the signup handler function
export async function signup(req) {
    // Extract data from request body
    const { username, useremail, password } = await req.body.json();
    console.log("username:", username, "email:", useremail, "password:", password);

    // Check if any required field is empty
    if ([username, useremail, password].some((x) => x === "")) {
        return NextResponse.json({ error: "User data is incomplete" }, { status: 400 });
    }

    try {
        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);
        console.log("hashPassword:", hashPassword);

        // Create a new user
        const newUser = await User.create({
            username,
            useremail,
            password: hashPassword,
        });

        // Check if the user was created successfully
        if (!newUser) {
            return NextResponse.json({ error: "User not created" }, { status: 400 });
        }

        // Return success response
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            user: newUser
        }, { status: 201 });
    } catch (error) {
        console.error("Error occurred during user signup:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}


