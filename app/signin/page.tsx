import Image from "next/image";
import Link from "next/link";
import SigninForm from "./SigninForm";
import "./signin.css";

export const metadata = {
  title: "Sign In | ByteSpace",
  description: "Sign in to your ByteSpace account and continue your learning journey.",
};

export default function SigninPage() {
  return (
    <main className="signup-page">
      <div className="signup-grid" aria-hidden="true" />
      <div className="signup-container">
        <Link className="signup-brand" href="/" aria-label="ByteSpace home">
          <Image
            src="/images/logo.png"
            alt=""
            width={24}
            height={24}
            priority
          />
        </Link>

        <section className="signup-intro" aria-labelledby="signup-intro-title">
          <h2 id="signup-intro-title">Sign in with ease</h2>
          <p>
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
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
          <p className="signup-eyebrow">Sign In</p>
          <h1 id="signup-title">
            Welcome Back
          </h1>
          <SigninForm />
          <div className="signin-divider" aria-hidden="true">
            <span />
            <span>or</span>
            <span />
          </div>
          <div className="signin-social" aria-label="Social sign in options">
            <button type="button" aria-label="Continue with Facebook">
              <Image
                src="/images/Signin/facebook.png"
                alt=""
                width={30}
                height={40}
              />
            </button>
            <button type="button" aria-label="Continue with Google">
              <Image
                src="/images/Signin/Google.png"
                alt=""
                width={50}
                height={50}
              />
            </button>
          </div>
          <p className="signup-login">
            New user? <Link href="/signup">Create an account</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
