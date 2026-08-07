import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { SocialAuth } from "../../components/SocialAuth/SocialAuth";
import cls from "./Login.module.css";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { PageContainer } from "../../components/PageContainer/PageContainer";

export function Login() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <PageContainer title={"Welcome"}>
        <span className={cls.signIn}>Sign In</span>
        <p className={cls.description}>
          Korem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            label="Email"
            {...register("email")}
          />

          <Input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            label="Password"
            {...register("password")}
          />
          <span className={cls.forgetPassword}>Forget Password</span>
          <Button>Sign In</Button>
        </form>

        <SocialAuth />
        <span className={cls.restore}>
          Don’t have an account?{" "}
          <span>
            &nbsp;
            <NavLink to={"/signup"} className={cls.restorelink}>
              Sign Up
            </NavLink>
          </span>
        </span>
      </PageContainer>
    </>
  );
}
