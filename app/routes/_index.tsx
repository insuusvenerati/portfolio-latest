import type { MetaFunction } from "@remix-run/node";
import { Landing } from "~/components/landing";

export const meta: MetaFunction = () => {
  return [{ title: "Sean Norwood" }, { name: "description", content: "Sean Norwood Portfolio" }];
};

export default function Index() {
  return (
    <div>
      <Landing />
    </div>
  );
}
