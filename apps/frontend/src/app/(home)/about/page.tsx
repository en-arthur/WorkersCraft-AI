'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About Us</h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
            WorkersCraft AI is building the future of autonomous digital work.
            We are a distributed tribe of engineers and designers obsessed with pushing the boundaries of what AI can achieve.
          </p>
          <div className="pt-8">
            <div className="inline-block w-12 h-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
