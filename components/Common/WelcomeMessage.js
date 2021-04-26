import { Icon, Message, Divider } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <Message
      color="blue"
      attached
      header={signupRoute ? "Welcome to Tweezak" : "Welcome Back to Tweezak"}
      icon={signupRoute ? "rocketchat" : "bolt"}
      
      content={signupRoute ? "Create your Account by filling out below form" : "Login with existing Email and Password"}
    />
  );
};

export const FooterMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <>
      {signupRoute ? (
        <>
          <Message attached="bottom" color='yellow'>
            <Icon name="question circle" />
            Already Signed up ? <Link href="/login">Login Here Instead</Link>
          </Message>
          <Divider hidden />
        </>
      ) : (
        <>
          <Message attached="bottom" color='yellow'>
            <Icon name="question circle outline" />
            New User ? <Link href="/signup">Signup Here</Link> Instead{" "}
          </Message>
        </>
      )}
    </>
  );
};
