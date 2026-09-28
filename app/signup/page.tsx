import Image from "next/image";
import Link from "next/link";
import SignupForm from "./SignupForm";
import "./signup.css";

export const metadata = {
  title: "Create an Account | ByteSpace",
  description: "Create your ByteSpace account and start learning.",
};

export default function SignupPage() {
  return (
    <main className="signup-page">
      <div className="signup-grid" aria-hidden="true" />
      <div className="signup-container">
        <Link className="signup-brand" href="/" aria-label="ByteSpace home">
          <Image src="/images/logo.png" alt="" width={24} height={24} priority />
        </Link>

        <section className="signup-intro" aria-labelledby="signup-intro-title">
          <h2 id="signup-intro-title">Sign up and come in</h2>
          <p>
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no cost.
          </p>

          <div className="signup-art" aria-hidden="true">
            <Image
              className="signup-decor signup-triangle"
              src="/images/Signup/signup%20Cone%20triangle.png"
              alt=""
              width={160}
              height={140}
            />
            <Image
              className="signup-decor signup-circle"
              src="/images/Signup/signup%20Cone%20circle.png"
              alt=""
              width={120}
              height={110}
            />
            <Image
              className="signup-decor signup-card signup-card-back"
              src="/images/Signup/signup%20card%20two.png"
              alt=""
              width={373}
              height={383}
            />
            <Image
              className="signup-decor signup-card signup-card-front"
              src="/images/Signup/signup%20card%20one.png"
              alt=""
              width={373}
              height={383}
            />
            <Image
              className="signup-decor signup-students"
              src="/images/Signup/signup%20card%20three.png"
              alt=""
              width={258}
              height={123}
            />
            <Image
              className="signup-decor signup-squiggle"
              src="/images/Frame%20(4).png"
              alt=""
              width={317}
              height={332}
            />
          </div>
        </section>

        <section className="signup-form-card" aria-labelledby="signup-title">
          <p className="signup-eyebrow">Create an Account</p>
          <h1 id="signup-title">Welcome to<br />ByteSpace</h1>
          <SignupForm />
          <p className="signup-login">
            Already have an account? <Link href="/signin">Login</Link>
          </p>
        </section>
      </div>
    </main>
  );
}