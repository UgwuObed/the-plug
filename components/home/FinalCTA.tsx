export function FinalCTA() {
  return (
    <section className="bg-navy px-[5%] py-[120px] text-center">
      <div className="max-w-[600px] mx-auto">

        <p className="label-mono text-coral-mid mb-5">
          Get Started Today
        </p>

        <h2
          className="heading-display text-white mb-4"
          style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
        >
          Your music earns.<br />
          You should <em className="italic text-coral-mid">keep it</em>.
        </h2>

        <p className="text-[15px] text-white/30 mb-10">
          Sign up free. No credit card. No setup fee.
        </p>

        <div className="flex items-center justify-center gap-2.5 flex-wrap">
          <a
            href="/signup"
            className="
              px-8 py-3.5 text-[14px] font-medium font-body
              text-white bg-coral border-none rounded-lg cursor-pointer no-underline
              hover:bg-coral-dark hover:-translate-y-px
              transition-all duration-200
            "
          >
            Create Free Account
          </a>
          <a
            href="#how-it-works"
            className="
              px-6 py-3.5 text-[14px] font-normal font-body
              text-white bg-transparent no-underline
              border border-white/25 rounded-lg cursor-pointer
              hover:text-white hover:border-white/50
              transition-all duration-200
            "
          >
            See How It Works
          </a>
        </div>

      </div>
    </section>
  )
}
