import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { Usermodel } from "../models/user.model.js";
import { uploadOncloudinary } from "../../utils/cloudinary.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
const registerUser = asyncHandler(async (req, res) => {
  //take input from front end
  //authenticate -not empty
  //check if user already exist :username and email
  //check for images ,check for avatar,
  //upload them to cloudinary,avatar,
  //create user object -create entry in db
  //remove password and refresh token feild response
  //cheak for user creation
  // return res

  const { fullname, email, username, password } = req.body;
  console.log("email : ", email);
  console.log("username:", username);

  if (
    [fullname, email, username, password].some((feild) => feild?.trim() == "") //some is the method which cheack each and every element
  ) {
    throw new ApiError(400, "All Feilds Are Required");
  }
  const existedUser = Usermodel.findOne({
    $or: [{ username }, { email }], //its checking all this objects  in databse
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exist");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.covercoverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOncloudinary(avatarLocalPath);
  const coverimage = await uploadOncloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }
  const User = await Usermodel.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverimage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });
  const createdUser = await User.findById(User._id).select(
    "-password -refreshToken" //jiske samne - hota hai vo include nahi krna bus baki sb by default include ho jata hai
  );

  if (!createdUser) {
    throw new ApiError(500, "Something Went Wrong While registering the user");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User register successfully"));
});

export { registerUser };
