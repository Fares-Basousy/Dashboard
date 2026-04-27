import LoginForm from '@/app/ui/login-form';

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    callbackUrl?: string;
  }>;
}) {
  const params = await searchParams;
  const callbackUrl = params?.callbackUrl || '/dashboard';

  return <LoginForm callbackUrl={callbackUrl} />;
}
