import { createLazyFileRoute } from "@tanstack/react-router";
import Register from "../pages/register/Register";

export const Route = createLazyFileRoute("/register")({
  component: () => (
    <div>
      <Register />
    </div>
  ),
});
