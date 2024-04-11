import { SignIn } from '@clerk/nextjs'

const SignInPage = () => (
  <div className='flex h-screen items-center justify-center'>
    <SignIn appearance={{ variables: { colorPrimary: "#0F172A"}}} />
  </div>
)

export default SignInPage
