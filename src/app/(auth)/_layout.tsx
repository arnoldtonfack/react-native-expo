import GuestOnly from "@/components/Auth/GuestOnly";
import { useUser } from "@/hooks/userUser";
import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  const { user } = useUser();
  console.log("====================================");
  console.log(user);
  console.log("====================================");
  return (
    <>
      <GuestOnly>
        <Stack screenOptions={{ headerShown: false, animation: "none" }} />
      </GuestOnly>
    </>
  );
};

export default AuthLayout;
