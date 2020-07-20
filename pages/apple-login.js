import { useEffect } from "react";
import Head from "next/head";

const AppleLogin = () => {
  useEffect(() => {
    AppleID.auth.init({
      clientId: "com.leanscale.dca-dev-react.client",
      scope: "name email",
      redirectURI: "https://dca-dev-react.leanscale.com/redirect-apple",
      state: "Initial user authentication request",
      nonce: "asd",
      usePopup: true,
    });

    document.addEventListener("AppleIDSignInOnSuccess", (data) => {
      console.log("AppleIDSignInOnSuccess", { data });
    });
    document.addEventListener("AppleIDSignInOnFailure", (error) => {
      console.log("AppleIDSignInOnFailure", { error });
    });
  }, []);

  const handleClick = async () => {
    try {
      // eslint-disable-next-line no-undef
      const data = await AppleID.auth.signIn();

      console.log("jej click", { data });
    } catch (error) {
      console.log("jej click", { error });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 200,
      }}
    >
      <Head>
        <script
          type="text/javascript"
          src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
        />
      </Head>
      <button onClick={handleClick}>Sign in with Apple</button>
    </div>
  );
};

export default AppleLogin;
