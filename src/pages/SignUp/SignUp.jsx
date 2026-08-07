import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { SocialAuth } from "../../components/SocialAuth/SocialAuth";
import cls from "./SignUp.module.css";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { PageContainer } from "../../components/PageContainer/PageContainer";
export function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PageContainer title={"Create New Account"}>
        <form onSubmit={handleSubmit(onSubmit)} className={cls.SignUpform}>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            label="Enter Your Full Name"
            {...register("Name")}
          />

          <Input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            label="Password"
            {...register("password")}
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            label="Email"
            {...register("email")}
          />

          <Input
            type="tel"
            name="tel"
            placeholder="Enter Your Phone Number"
            label="Mobile Number"
            {...register("phone")}
          />

          <Button>Sign Up</Button>
        </form>

        <SocialAuth />
        <span className={cls.restore}>
          Don’t have an account?{" "}
          <span>
            &nbsp;
            <NavLink to={"/login"} className={cls.restorelink}>
              Sign In{" "}
            </NavLink>
          </span>
        </span>
      </PageContainer>
    </>
  );
}
