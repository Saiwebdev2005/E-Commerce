

import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from 'next/navigation';
//this functionality should be added to cart when the user is not logged in then it should redirected to signin page
export const AuthButtons = () => {
  const {data:session} = useSession({
    //this functionality to ensure login
    // required:true,
    // onUnauthenticated() {
    //   redirect("/api/auth/signin?callbackUrl=/")
    // }
  });
 
  return ( 
      session ? (
        <Link href="/api/auth/signout?callbackUrl=/">
          <span className="button font-semibold">Log out</span>
        </Link>
      ) : (
        <Link href="/api/auth/signin">
          <span className="button font-semibold">Login</span>
        </Link>
    )
  );
};
