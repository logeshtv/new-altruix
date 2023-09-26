import { SessionProvider } from "next-auth/react"
import Screen from '@/components/screen/Screen';
import Head from 'next/head';
import Dashboard from "@/components/dashboard/dashboard";

function DashboardAuth() {
  return (      
  <Dashboard/>
  );
}

export default DashboardAuth;
