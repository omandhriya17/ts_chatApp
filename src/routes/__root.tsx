import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "react-hot-toast";

interface MyRouterContextI {
  auth: any;
}

export const Route = createRootRouteWithContext<MyRouterContextI>()({
  component: () => (
    <>
      <button>
        <Link to="/">Home</Link>
      </button>
      <Outlet />
      <TanStackRouterDevtools />
      <Toaster />
    </>
  ),
});
