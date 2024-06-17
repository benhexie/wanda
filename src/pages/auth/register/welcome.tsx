import React from "react";
import Page from "../../../components/Page";
import Logo from "../../../components/Logo";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Page style="pt-16 flex flex-col gap-16">
      <div className="flex flex-col gap-8 max-w-2xl">
        <h1 className="text-secondary font-semibold text-3xl">
          Welcome to Wanda.
        </h1>
        <p className="text-secondary font-semibold text-2xl">
          Explore the best of Nigeria with our comprehensive platform. Wanda
          brings everything you need to plan the perfect outing/trip right at
          your fingertips. Connect with friends, share experiences, and make
          unforgettable memories.
        </p>
        <Link
          to={"/explore/all"}
          className="text-secondary font-semibold text-2xl underline"
        >
          Let’s get in.
        </Link>
      </div>
    </Page>
  );
};

export default Welcome;
