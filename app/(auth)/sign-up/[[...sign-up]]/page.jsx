import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen w-full">
      {/* LEFT SIDE: Persistent Hero Section */}
      <section className="relative hidden w-1/2 flex-col justify-end bg-slate-900 p-12 text-white lg:flex">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1527159347918-4012db91e028?q=80&w=2070&auto=format&fit=crop')", // Replace with your actual gas station image
          }} 
        />
        
        {/* Content Overlay */}
        <div className="relative z-10">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md">
            {/* Wave Logo Placeholder */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
              <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
              <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to SKILL-GAUGE 🦑
          </h1>
          <p className="mt-4 max-w-md text-lg text-slate-300">
            The ultimate AI-powered interview simulator. Debug your performance and optimize your answers before the real thing.
          </p>
        </div>
      </section>

      {/* RIGHT SIDE: Auth Form Section */}
      <section className="flex w-full items-center justify-center bg-white lg:w-1/2">
        <div className="w-full max-w-md px-8">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: 'bg-black hover:bg-slate-800 text-sm normal-case',
                card: 'shadow-none border-none',
                headerTitle: 'text-2xl font-bold text-slate-900',
                headerSubtitle: 'text-slate-500',
              }
            }}
          />
        </div>
      </section>
    </main>
  );
}
  