import { createLazyFileRoute } from "@tanstack/react-router";
import Login from "../pages/login/Login";

export const Route = createLazyFileRoute("/login")({
  component: () => (
    <div>
      <Login />
    </div>
  ),
});
