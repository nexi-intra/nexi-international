"use client";

import { useRouter } from "next/navigation";
import { APPNAME } from "../global";
import LandingPage from "@/components/landing-page";


export default function Page() {
  const router = useRouter();
  return (
    <LandingPage />
  );
}
