import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstName: Yup.string().min(2).max(50).required("First name is required"),
  lastName: Yup.string().min(2).max(50).required("Last name is required"),
  email: Yup.string().email().required("Email field is required"),
  password: Yup.string().min(6).required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password field is required")
    .oneOf([Yup.ref("password")], "Password must match"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Email field is required"),
  password: Yup.string().min(6).required("Password field is required"),
});
export const loginSponsors = Yup.object({
  name: Yup.string().min(2).max(25).required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  message: Yup.string().min(1).max(225).required("Message is required"),
});
export const JoinOurNewsletter = Yup.object({
  email: Yup.string().email().required("Email field is required"),
});

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string().email().required("Email field is required"),
});

export const resetPasswordSchema = Yup.object({
  password: Yup.string().min(6).required("Password field is required"),
  ConfirmPassword: Yup.string()
    .required("Confirm password field is required")
    .oneOf([Yup.ref("password")], "Password must match"),
});
export const myProfileSchema = Yup.object({
  image: Yup.string(),
  firstName: Yup.string().min(2).max(50).required("First name is required"),
  lastName: Yup.string().min(2).max(50).required("Last name is required"),
  street: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  zip: Yup.number(),
  phone: Yup.number(),
  email: Yup.string().email().required("Email is required"),
  facebook: Yup.string(),
  twitter: Yup.string(),
  instagram: Yup.string(),
  linkedin: Yup.string(),
  youtube: Yup.string(),
  tiktok: Yup.string(),
  whatsapp: Yup.string(),
  twitch: Yup.string(),
  youtubeVideoUrl: Yup.string(),
  personalWebsite: Yup.string(),
  profileUrl: Yup.string().max(50),
  miniBio: Yup.string().required("Bio is required"),
});
