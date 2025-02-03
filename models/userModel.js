const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required to create a user"],
		},
		email: {
			type: String,
			required: [true, "Email is require to create a user"],
			unique: [
				true,
				"Email already exists, use a different one or log in",
			],
			trim: true,
			match: [
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				"Please provide a valid email address",
			],
		},
		password: {
			type: String,
			required: [true, "Password is required to make an account"],
			trim: true,
			
		},
		role: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
