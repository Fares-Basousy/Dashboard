import SignupForm from '@/app/ui/signup-form';

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    callbackUrl?: string;
  }>;
}) {
  const params = await searchParams;
  const callbackUrl = params?.callbackUrl || '/dashboard';

  return <SignupForm callbackUrl={callbackUrl} />;
}
