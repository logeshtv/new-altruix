import { SessionProvider } from "next-auth/react"
import Screen from '@/components/screen/Screen';
import Head from 'next/head';
import Dashboard from "@/components/dashboard/dashboard";
import RegistrationList from "@/components/dashboard/pages/RegistrationList";

function RegistrationListPage() {
  return (      
  <RegistrationList />
  );
}

export default RegistrationListPage;
