import Link from "next/link";
import { SITE_CONFIG } from "@/lib/seo";
import LandscapeImageSlider from "@/components/ui/LandscapeImageSlider";
import { AnimatedFeatureGrid } from "@/components/ui/AnimatedFeatureGrid";
import { AnimatedStepGrid } from "@/components/ui/AnimatedStepGrid";
import { AnimatedBonusGrid } from "@/components/ui/AnimatedBonusGrid";
import { AnimatedMiniGameGrid } from "@/components/ui/AnimatedMiniGameGrid";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const DOWNLOAD_URL = "https://3pattibluevip.com?from_gameid=9577560&channelCode=7852455";

const FEATURES = [
  { icon: "🎮", title: "Multiple Game Modes",   desc: "3 Patti Blue packs many mini games into one app. Switch between modes anytime and never feel bored." },
  { icon: "🎁", title: "Simple Reward System",  desc: "Collect free bonuses and rewards as you play. The system is simple and easy to understand." },
  { icon: "🛡️", title: "Secure User Protection", desc: "Your account and personal details stay safe. Strong security keeps your data fully protected." },
  { icon: "✨", title: "Smooth Visual Experience", desc: "Clean, modern visuals that are easy on the eyes. Menus are organised so you never get confused." },
  { icon: "⚖️", title: "Fair and Balanced Gameplay", desc: "Every player gets an equal chance. No unfair advantages, just a healthy and honest environment." },
  { icon: "⚡", title: "Fast Performance",       desc: "3 Patti Blue loads quickly and responds instantly. It runs well even on low-end smartphones." },
  { icon: "💬", title: "24/7 Support Assistance", desc: "Help is always ready for login, rewards, or gameplay issues. A friendly team guides you any time." },
  { icon: "📱", title: "Lightweight App",        desc: "The app takes up little storage and uses low data. Perfect for users with limited mobile plans." },
  { icon: "🔄", title: "Regular Updates",        desc: "Fresh games, better performance, and new features arrive often. The app keeps feeling brand new." },
  { icon: "📝", title: "Easy Registration",      desc: "Sign up in under two minutes. Simple form, quick verification, and you are ready to play." },
  { icon: "💸", title: "Instant Transactions",   desc: "Deposits and withdrawals are fast through EasyPaisa and JazzCash. Your money moves without delay." },
  { icon: "🎯", title: "Beginner-Friendly",      desc: "Clear menus, simple steps, and zero confusion. First-time players start enjoying within minutes." },
];

const BONUSES = [
  { icon: "🎁", title: "Welcome Bonus", desc: "New players get a special joining bonus. It lands in your wallet right after sign-up and kick-starts your journey." },
  { icon: "📅", title: "Daily Login Rewards", desc: "Open 3 Patti Blue every day to unlock small free rewards. Just log in and tap to collect." },
  { icon: "✅", title: "Task-Based Rewards", desc: "Complete quick in-app tasks to earn extra points and bonuses. Finished tasks add value to your balance." },
  { icon: "👥", title: "Invite Friends Program", desc: "Share your referral link with friends. You earn bonuses when they register and stay active." },
  { icon: "💰", title: "Deposit-Based Benefits", desc: "Top up your balance and get extra bonus value. The first deposit offer gives a nice boost on top." },
  { icon: "📆", title: "Weekly Reward Offers", desc: "Active players unlock weekly bonuses too. Keep playing through the week to earn more rewards." },
  { icon: "🎊", title: "Anniversary Carnival", desc: "Every year 3 Patti Blue celebrates with huge prize pools and free spins. The best week to grow your balance." },
];

const PAYMENT_METHODS = [
  {
    icon: "📱",
    name: "JazzCash",
    tag: "Instant",
    detail: "Deposit & Withdraw",
    gradient: "linear-gradient(135deg,#7f1d1d,#dc2626)",
    glow: "rgba(220,38,38,0.45)",
    border: "rgba(252,165,165,0.5)",
    bg: "linear-gradient(145deg,#fff5f5,#fee2e2)",
    textColor: "#991b1b",
  },
  {
    icon: "💚",
    name: "EasyPaisa",
    tag: "Most Popular",
    detail: "Deposit & Withdraw",
    gradient: "linear-gradient(135deg,#14532d,#16a34a)",
    glow: "rgba(22,163,74,0.45)",
    border: "rgba(134,239,172,0.5)",
    bg: "linear-gradient(145deg,#f0fdf4,#dcfce7)",
    textColor: "#15803d",
  },
  {
    icon: "🏦",
    name: "Bank Transfer",
    tag: "High Limits",
    detail: "Deposits & Payouts",
    gradient: "linear-gradient(135deg,#1e3a8a,#2563eb)",
    glow: "rgba(37,99,235,0.45)",
    border: "rgba(147,197,253,0.5)",
    bg: "linear-gradient(145deg,#eff6ff,#dbeafe)",
    textColor: "#1d4ed8",
  },
];

const FAQS = [
  { q: "What is 3 Patti Blue?", a: "3 Patti Blue is a simple online gaming platform in Pakistan. It lets users enjoy many mini games in one place with a smooth and user-friendly experience." },
  { q: "How can I start using 3 Patti Blue?", a: "Download the APK or open the official website, then create a new account with your mobile number or email. After that, log in and explore the platform." },
  { q: "Is 3 Patti Blue easy for beginners?", a: "Yes. 3 Patti Blue has a simple layout, clear options, and smooth navigation. New users can understand it without any confusion." },
  { q: "Can I use 3 Patti Blue on any phone?", a: "3 Patti Blue mainly works on Android devices. It runs smoothly on most smartphones, even on basic models, as long as you have a stable internet connection." },
  { q: "What should I do if I face any issues on 3 Patti Blue?", a: "Open the customer support section inside the app. The support team is available to help and solve issues quickly." },
  { q: "Is the 3 Patti Blue APK free to download?", a: "Yes. The 3 Patti Blue APK is completely free to download and install on Android. You can start playing without any upfront cost." },
  { q: "Is 3 Patti Blue safe to use?", a: "Yes. 3 Patti Blue uses strong security to protect your data and money. Personal details and account info stay private at all times." },
  { q: "Which payment methods does 3 Patti Blue support?", a: "3 Patti Blue supports EasyPaisa and JazzCash for fast and simple deposits and withdrawals. Both methods work instantly across Pakistan." },
  { q: "How do I deposit money in 3 Patti Blue?", a: "Open 3 Patti Blue and log in. Go to the wallet section, tap Deposit, pick your amount, select EasyPaisa or JazzCash, and confirm the payment. Your balance updates right away." },
  { q: "How do I withdraw my winnings from 3 Patti Blue?", a: "Go to the wallet section and tap Withdraw. Pick EasyPaisa or JazzCash, enter your account number and amount, and confirm. Funds reach you in minutes." },
  { q: "Does 3 Patti Blue offer bonuses and rewards?", a: "Yes. 3 Patti Blue gives a welcome bonus, daily login rewards, task-based bonuses, referral income, deposit boosts, weekly offers, and the yearly Anniversary Carnival." },
  { q: "How do I earn real money on 3 Patti Blue?", a: "Claim free bonuses, complete in-app tasks, invite friends with your referral link, join events, and play your favourite mini games. Winnings can be withdrawn through EasyPaisa or JazzCash." },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          }),
        }}
      />
      {/* JSON-LD: SoftwareApplication — enables app rich results in Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "3 Patti Blue",
            operatingSystem: "Android, iOS, Windows",
            applicationCategory: "GameApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "PKR",
            },
            url: SITE_CONFIG.url,
            downloadUrl: "https://3pattibluevip.com?from_gameid=9577560&channelCode=7852455",
            publisher: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
            },
          }),
        }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}>
        {/* Decorative card suits — background */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute -top-6 -left-4 text-[160px] font-black opacity-5 text-blue-300 rotate-[-15deg]">♠</span>
          <span className="absolute top-10 right-8 text-[120px] font-black opacity-5 text-red-400 rotate-[12deg]">♥</span>
          <span className="absolute bottom-0 left-1/4 text-[100px] font-black opacity-5 text-blue-300 rotate-[8deg]">♣</span>
          <span className="absolute bottom-4 right-1/4 text-[130px] font-black opacity-5 text-red-400 rotate-[-10deg]">♦</span>
        </div>

        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }} />

        <div className="container-content relative z-10 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight md:text-left">
              3 Patti Blue<br />
              <span style={{ background: "linear-gradient(90deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                APK Download Pakistan
              </span>
            </h1>

            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Play Pakistan&apos;s favourite 3 Patti Blue game app. Real money card games, quick EasyPaisa and JazzCash payouts, and big daily rewards — all from your phone.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="hero-cta-dl">
                <span className="cta-icon">⬇</span>
                Download APK Free
              </a>
              <Link href="/3-patti-blue-signup" className="hero-cta-reg">
                <span className="cta-icon">✏️</span>
                Register Free
              </Link>
            </div>

            </div>

            <div className="flex flex-col items-center justify-center gap-7 md:gap-8">
              {/* Floating card visual */}
              <div className="flex justify-center" role="img" aria-label="3 patti blue game — animated card visual">
                <div className="relative">
                  <div className="absolute -left-6 -top-2 w-20 h-28 rounded-xl shadow-2xl card-anim-left"
                    style={{ background: "linear-gradient(135deg, #1d4ed8, #3b82f6)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <span className="absolute top-2 left-2 text-white/60 font-black text-lg">A</span>
                    <span className="absolute bottom-2 right-2 text-white/60 font-black text-lg rotate-180">A</span>
                  </div>
                  <div className="absolute -right-6 -top-2 w-20 h-28 rounded-xl shadow-2xl card-anim-right"
                    style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <span className="absolute top-2 left-2 text-white/60 font-black text-lg">K</span>
                    <span className="absolute bottom-2 right-2 text-white/60 font-black text-lg rotate-180">K</span>
                  </div>
                  <div className="relative w-24 h-32 rounded-xl shadow-2xl z-10 flex flex-col items-center justify-center card-anim-center card-glow"
                    style={{ background: "linear-gradient(135deg, #1e40af, #2563eb)", border: "2px solid rgba(96,165,250,0.6)" }}>
                    <span className="text-white font-black text-3xl">3P</span>
                    <span className="text-blue-200 text-xs font-bold mt-1">BLUE</span>
                  </div>
                </div>
              </div>
              {/* Stats bar — below hero logo */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-md mx-auto">
                {[
                  { value: "5M+", label: "Players" },
                  { value: "200+", label: "Games" },
                  { value: "PKR 200", label: "Min Withdraw" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="hero-stat-card rounded-xl py-3 px-2 text-center cursor-default"
                  >
                    <p className="hero-stat-value text-xl font-extrabold text-white tabular-nums">{s.value}</p>
                    <p className="hero-stat-label text-xs text-blue-300 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-content py-12 space-y-16">

        {/* ── OVERVIEW ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            3 Patti Blue is the latest real-earning app in Pakistan. Play simple mini games and win free real cash. It is a top, free platform for everyone. All you need is an Android device and a stable internet connection.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            3 Patti Blue is an online game that has become popular fast. It works for casual players who enjoy a simple, fun digital casino experience. The design is easy to understand. New players and regular gamers both feel comfortable. The main idea is smooth, enjoyable gameplay without any complication.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The app is truly user-friendly. Menus are clear and steps are easy to follow. Even first-time users can start within minutes. 3 Patti Blue runs smoothly on smartphones and also works on PCs through an emulator. You do not need a high-end device to enjoy it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            3 Patti Blue also keeps players engaged with different levels and tasks. Progress feels rewarding and keeps you coming back. Whether you want to relax, pass time, or withdraw real winnings, this app gives a pleasant and stress-free experience.
          </p>
        </section>

        {/* ── IN-APP PREVIEW SLIDER ── */}
        <section>
          <LandscapeImageSlider />
        </section>

        {/* ── WHAT IS 3 PATTI BLUE GAME ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">What is the 3 Patti Blue?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            3 Patti Blue is a digital entertainment platform where users enjoy quick and simple gameplay with zero confusion. It is made for people who want something light and fun. No complex or time-consuming games. Anyone can access 3 Patti Blue and start playing in a few steps.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A key feature of the 3 Patti Blue APK is its fast access. There are no long sign-up forms or tricky steps. Everything is built to save time. The interface feels clean so you can focus on the game itself.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            3 Patti Blue also uses little mobile data. It works fine on average internet speeds, so you do not face interruptions. This makes the app a great fit for users who prefer lightweight apps. Regular updates keep things fresh — new options, small design upgrades, and better performance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Overall, 3 Patti Blue is a smart choice for anyone who wants a fast, simple, and modern gaming experience. Ready to get started? Create your free account and jump in today.
          </p>
        </section>

        {/* ── FEATURES ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Key Features of the 3 Patti Blue</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            3 Patti Blue has many features that make it popular and unique. Every feature is built for comfort, fast access, and a better gaming experience without any confusion.
          </p>
          <AnimatedFeatureGrid>
            {FEATURES.map((f) => (
              <div key={f.title} className="card feat-card p-5">
                <div className="feat-icon-wrap">
                  <span className="feat-icon">{f.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </AnimatedFeatureGrid>
        </section>

        {/* ── GAME CATEGORIES ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Game Categories on 3 Patti Blue</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            3 Patti Blue packs many mini games into one app. From cards and tables to slots and quick games — there is something for every mood. Here are the main categories you can enjoy.
          </p>
          <AnimatedFeatureGrid>
            {[
              { icon: "🎲", title: "Table Games",   desc: "Play Roulette, Baccarat, Dragon vs Tiger, Sic Bo, 7 Up Down, and Red vs Black. Real casino feel with steady rewards." },
              { icon: "🎰", title: "Slot Games",    desc: "Spin Fortune Tiger, 777 Fruit, Zeus Power, Jungle Tiger, Phoenix, Fruit Mary, and many more. Easy to play and fun to win." },
              { icon: "🧠", title: "Skill Games",   desc: "Sharpen your mind with Poker, Teen Patti, Blackjack, Pool Rummy, Domino, and Crazy Ludo. Your strategy decides the win." },
              { icon: "🎯", title: "Casual Games",  desc: "Quick sessions with Mines, Fishing, Crash, Aviator, and Limbo. Instant results and real cash chances." },
              { icon: "🏏", title: "Sports Betting", desc: "Bet on live cricket, football, and more. Check team form, player stats, and conditions before placing your bet for better returns." },
              { icon: "🐟", title: "Fishing Games", desc: "Colourful shooting arcades with huge prize pools. Simple to learn, packed with action, and great between card rounds." },
            ].map((f) => (
              <div key={f.title} className="card feat-card p-5">
                <div className="feat-icon-wrap">
                  <span className="feat-icon">{f.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </AnimatedFeatureGrid>
        </section>

        {/* ── WHY POPULAR IN PAKISTAN ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Why is 3 Patti Blue Top Trending?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            3 Patti Blue is trending across Pakistan because it gives exactly what people want — quick, simple, and enjoyable fun. Most players do not enjoy heavy games that eat up time. They want something light they can open any time and close when they are done. That is where 3 Patti Blue fits perfectly.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comfortable and Clean Design</h3>
              <p className="text-gray-700 leading-relaxed">The overall design is neat and easy on the eyes. There is no pressure, no confusing steps, and no heavy features. Players stay relaxed throughout every session.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Payment Support</h3>
              <p className="text-gray-700 leading-relaxed">3 Patti Blue works directly with EasyPaisa and JazzCash. No international cards or complex bank setups. Deposits are instant and withdrawals are fast — exactly what Pakistani players need.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safe and Reliable</h3>
              <p className="text-gray-700 leading-relaxed">Strong encryption protects every transaction and every account. Your data stays private and your money stays secure on 3 Patti Blue.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fits Every Kind of Player</h3>
              <p className="text-gray-700 leading-relaxed">3 Patti Blue works for different age groups. Beginners find it easy. Regular players find it rewarding. That quick, calm, and comfortable feel is why the app keeps trending.</p>
            </div>
          </div>
        </section>

        {/* ── TOP GAMES ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Best Games in 3 Patti Blue</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            3 Patti Blue has many mini games inside a single app. Here are the top picks players enjoy the most.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="card p-4"><span className="font-bold">🎯 Teen Patti:</span> Pakistan&apos;s most loved card game. Get 3 cards, place your bet, and show your hand. Fast rounds with friends or strangers.</li>
            <li className="card p-4"><span className="font-bold">♠️ Poker:</span> Play real players at live tables. Bluff smart, build strong hands, and win real money on 3 Patti Blue.</li>
            <li className="card p-4"><span className="font-bold">🎴 Rummy:</span> A classic card game of skill. Pick, discard, and make sets to win. Pool Rummy and Point Rummy are crowd favourites.</li>
            <li className="card p-4"><span className="font-bold">✈️ Aviator:</span> Place a bet as the plane takes off. Cash out before it flies away. Huge multipliers if you time it right.</li>
            <li className="card p-4"><span className="font-bold">🎴 Baccarat:</span> Pick Player, Banker, or Tie. Closest to 9 wins. Simple rules and very fast rounds.</li>
            <li className="card p-4"><span className="font-bold">🃏 Blackjack:</span> Get as close to 21 as you can without going over. Hit, stand, or double down — feels just like a real casino.</li>
            <li className="card p-4"><span className="font-bold">🚀 Crash:</span> Watch the multiplier climb and cash out before it crashes. Wait longer for bigger wins, bigger risks.</li>
            <li className="card p-4"><span className="font-bold">💎 Mines:</span> Flip tiles and avoid the bombs. Every safe click boosts your payout. Cash out whenever you feel lucky.</li>
            <li className="card p-4"><span className="font-bold">🐉 Dragon vs Tiger:</span> Bet on Dragon, Tiger, or Tie. The higher card wins. Fast rounds with quick payouts.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">More Games Available on 3 Patti Blue</h3>
          <AnimatedMiniGameGrid games={[
            { icon: "🎡", label: "Roulette" },
            { icon: "🦁", label: "Zoo Roulette" },
            { icon: "🚗", label: "Car Roulette" },
            { icon: "🍬", label: "Sweet Bonanza" },
            { icon: "🍇", label: "Fruit Line" },
            { icon: "🎲", label: "7 Up Down" },
            { icon: "🎱", label: "777 Bingo" },
            { icon: "🌀", label: "Spin of Fortune" },
            { icon: "🔮", label: "Bingo 90" },
            { icon: "🁣", label: "Domino" },
            { icon: "💎", label: "Rattling Gems" },
            { icon: "💥", label: "Dynamite Wild" },
            { icon: "🃏", label: "Video Poker" },
            { icon: "♠️", label: "Video Poker 2" },
            { icon: "🏮", label: "God of Fortune" },
            { icon: "🎰", label: "Wow Slots" },
            { icon: "🎯", label: "Ludo" },
            { icon: "⚡", label: "Quick Ludo" },
            { icon: "🀄", label: "10 Cards" },
            { icon: "🌪️", label: "Wild Energy" },
            { icon: "🎴", label: "Teen Patti 20-20" },
            { icon: "🎣", label: "Fishing" },
            { icon: "📈", label: "Limbo" },
            { icon: "🏆", label: "Sports Betting" },
          ]} />
          <p className="text-gray-600 text-sm mt-4">
            Start small, enjoy the ride, and always play 3 Patti Blue responsibly.
          </p>
        </section>

        {/* ── HOW TO GET STARTED ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">How to Get Started on 3 Patti Blue</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Getting started with 3 Patti Blue is simple. No technical skills needed. The steps are clear so even a first-time user can begin without stress.
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li><span className="font-bold">Download the App —</span> Grab the 3 Patti Blue APK from the official link. Always use a safe source.</li>
            <li><span className="font-bold">Install It —</span> Allow basic permissions and wait for the setup to finish. Open the app once it is ready.</li>
            <li><span className="font-bold">Register Your Account —</span> Enter your name and mobile number. Set a password to keep your account secure.</li>
            <li><span className="font-bold">Log In with Your ID —</span> Go to the login page, enter your details, and land on the main dashboard.</li>
            <li><span className="font-bold">Get Free Rewards —</span> Check the reward section right away. A welcome bonus is often waiting for new users.</li>
            <li><span className="font-bold">Pick a Game and Start Playing —</span> Browse the game list and pick one you enjoy. Every game has simple instructions.</li>
            <li><span className="font-bold">Link a Payment Account —</span> Add EasyPaisa or JazzCash to handle deposits and withdrawals smoothly.</li>
            <li><span className="font-bold">Invest Money (Optional) —</span> If your balance is zero, visit the deposit page and add a small amount to play.</li>
            <li><span className="font-bold">Withdraw Your Winnings —</span> Hit the withdraw section, enter your amount, and transfer funds to your linked wallet.</li>
          </ol>
        </section>

        {/* ── HOW TO DOWNLOAD ── */}
        <section className="bg-brand-50 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">How to Download and Install 3 Patti Blue APK (New Version)</h2>
          <p className="text-gray-600 mb-6">Pick your device — Android, PC, or iOS — and follow the steps below.</p>
          <AnimatedStepGrid>
            {[
              {
                step: "1",
                icon: "🤖",
                title: "Android",
                items: [
                  "Tap the download link above to grab the latest APK.",
                  "Open Settings and turn on Install from Unknown Sources.",
                  "Open your Downloads folder and tap the APK.",
                  "Launch the app and start playing right away.",
                ],
              },
              {
                step: "2",
                icon: "💻",
                title: "PC / Windows",
                items: [
                  "Install a trusted Android emulator like BlueStacks.",
                  "Download the 3 Patti Blue APK from the link above.",
                  "Drag and drop the APK file into BlueStacks.",
                  "Approve the install prompt to finish the setup.",
                  "Open the game and enjoy it on a full screen.",
                ],
              },
              {
                step: "3",
                icon: "🍎",
                title: "iOS (iPhone / iPad)",
                items: [
                  "A dedicated iOS app is not available yet.",
                  "Open the official 3 Patti Blue website in Safari.",
                  "Tap Add to Home Screen for quick access.",
                  "Avoid jailbroken installs — they are not safe.",
                ],
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-5 border border-brand-100 step-card">
                <div className="step-num w-9 h-9 rounded-full bg-brand-600 text-white font-extrabold flex items-center justify-center text-sm mb-3 shadow-md shadow-brand-200">
                  {s.step}
                </div>
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <ul className="list-disc pl-4 text-xs text-gray-600 leading-relaxed space-y-1">
                  {s.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </AnimatedStepGrid>
          <div className="mt-8 text-center">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="hero-cta-dl">
              <span className="cta-icon">⬇</span>
              Download 3 Patti Blue APK Free
            </a>
          </div>

          {/* Dedicated platform guides */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Need a Detailed Platform Guide?</h3>
            <AnimateOnScroll
              itemSelector=".platform-card"
              addedClass="platform-card--in"
              stagger={120}
              className="grid sm:grid-cols-2 gap-5"
            >
              <Link href="/3-patti-blue-for-pc" className="card platform-card p-6 flex items-center gap-4 group">
                <span className="platform-icon">💻</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-700 transition-colors">Play on PC</h3>
                  <p className="text-sm text-gray-500">Run 3 Patti Blue on Windows or Mac using BlueStacks.</p>
                </div>
              </Link>
              <Link href="/3-patti-blue-for-ios" className="card platform-card p-6 flex items-center gap-4 group">
                <span className="platform-icon">🍎</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-700 transition-colors">Play on iPhone / iPad</h3>
                  <p className="text-sm text-gray-500">Step-by-step guide to set up 3 Patti Blue on iOS.</p>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── WHAT'S NEW ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">What is New in the Latest 3 Patti Blue Updates?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The latest version brings a smoother and more rewarding experience.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Fresh games and categories in every update.</li>
            <li>Faster loading and cleaner visuals across the app.</li>
            <li>New promos and bonuses for higher winnings.</li>
            <li>All reported bugs and glitches are now fixed.</li>
          </ul>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Version vs Old Version</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The newest APK comes with many upgrades. You get new games, HD graphics, faster loading, and smoother performance. Fewer crashes and cleaner navigation too. For every fresh feature and fix, use the current version.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If your Android phone is older and the new build won&apos;t install, the previous version still runs well. It keeps all the core features and stays secure. Both versions give you a reliable gaming experience.
          </p>
        </section>

        {/* ── BONUSES ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Bonuses and Rewards in 3 Patti Blue</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            3 Patti Blue offers many bonus features and reward options. These rewards add extra benefits while you play. Everything is designed in a simple way so you can claim rewards without confusion.
          </p>
          <AnimatedBonusGrid>
            {BONUSES.map((b) => (
              <div key={b.title} className="card bonus-card p-5 flex gap-4 items-start">
                <div className="bonus-icon-wrap">
                  <span className="bonus-icon">{b.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedBonusGrid>
          <div className="mt-6 text-center">
            <Link href="/3-patti-blue-bonus" className="text-brand-600 underline font-semibold text-sm">
              View All Bonuses →
            </Link>
          </div>
        </section>

        {/* ── PAYMENT METHODS ── */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Money Methods in 3 Patti Blue</h2>
          <p className="text-gray-500 mb-6">Simple and fast payment options so you can add funds and withdraw your winnings without trouble.</p>
          <AnimateOnScroll
            itemSelector=".pay-pill"
            addedClass="pay-pill--in"
            stagger={110}
            className="flex flex-wrap gap-5 justify-center mb-8"
          >
            {PAYMENT_METHODS.map((p) => (
              <div
                key={p.name}
                className="pay-pill"
                style={{ ["--glow" as string]: p.glow, ["--border" as string]: p.border }}
              >
                {/* Animated border ring */}
                <div className="pay-pill-ring" style={{ background: p.gradient }} />
                {/* Card face */}
                <div className="pay-pill-face" style={{ background: p.bg }}>
                  {/* Top: icon bubble + tag */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="pay-icon-bubble" style={{ background: p.gradient }}>
                      <span className="pay-icon">{p.icon}</span>
                    </div>
                    <span className="pay-tag" style={{ background: p.gradient }}>
                      {p.tag}
                    </span>
                  </div>
                  {/* Name */}
                  <p className="pay-name" style={{ color: p.textColor }}>{p.name}</p>
                  <p className="pay-detail">{p.detail}</p>
                </div>
              </div>
            ))}
          </AnimateOnScroll>
          <p className="text-center text-sm text-gray-500">
            Minimum deposit PKR 200 · Withdrawals processed in 5–30 minutes
          </p>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <Link href="/3-patti-blue-deposit" className="text-brand-600 underline font-semibold text-sm">Deposit Guide →</Link>
            <Link href="/3-patti-blue-withdraw" className="text-brand-600 underline font-semibold text-sm">Withdraw Guide →</Link>
          </div>
        </section>

        {/* ── HOW TO DEPOSIT ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">How to Deposit in 3 Patti Blue</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Adding money to 3 Patti Blue is quick and safe. The process is built to be user-friendly so anyone can finish it without confusion. Just follow these steps.
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li>Open 3 Patti Blue and log in with your mobile number or email and password. You will land on the main dashboard.</li>
            <li>Go to the wallet or money section, then tap <span className="font-bold">Deposit</span> or Add Funds to start the payment.</li>
            <li>Pick a deposit amount that fits your budget and continue to the next step.</li>
            <li>Choose your payment method — EasyPaisa or JazzCash — for fast and easy transactions.</li>
            <li>Enter your wallet number and payment details carefully. Double-check before continuing.</li>
            <li>Confirm the payment and verify the transaction with OTP or through your payment app.</li>
            <li>Wait a few seconds. Once successful, the balance is added to your 3 Patti Blue account and you can start playing.</li>
          </ol>
        </section>

        {/* ── HOW TO WITHDRAW ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">How to Withdraw Your Winnings from 3 Patti Blue</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cashing out from 3 Patti Blue is simple. Funds reach your wallet in minutes through EasyPaisa or JazzCash.
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3">
            <li>Open the 3 Patti Blue app or website and log in to your account.</li>
            <li>From the main screen, go to the wallet or cash section where your balance is shown.</li>
            <li>Tap <span className="font-bold">Withdraw</span> to start the cash-out process.</li>
            <li>Select EasyPaisa or JazzCash as your payment method.</li>
            <li>Enter the amount you want to take out from your available balance.</li>
            <li>Add your correct wallet number so the money reaches you safely.</li>
            <li>Press Confirm and wait a few minutes. Your funds will arrive in your linked account.</li>
          </ol>
        </section>

        {/* ── HOW TO REGISTER ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Registration Guidelines for 3 Patti Blue</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Signing up on 3 Patti Blue is simple and safe. Anyone can create an account in under two minutes. Just follow the steps below.
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
            <li>Open the 3 Patti Blue app or website on your phone.</li>
            <li>Find the Register or Sign Up button on the main screen and tap it.</li>
            <li>A form will open. Add your basic details.</li>
            <li>Enter your mobile number, email, username, and create a strong password.</li>
            <li>Tick the box to accept the terms and conditions.</li>
            <li>Verify your account through the registered mobile number.</li>
            <li>A code arrives on your mobile. Enter it in the box to verify.</li>
            <li>Tap Submit or Confirm to finish your registration.</li>
            <li>Your account is ready — log in and start playing 3 Patti Blue.</li>
          </ol>
          <Link
            href="/3-patti-blue-signup"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors mb-8"
          >
            📋 Full Sign Up Guide →
          </Link>

          <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Way to Log In to Your 3 Patti Blue Account</h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
            <li>Open the 3 Patti Blue app on your device.</li>
            <li>On the main screen, find the Login option and tap it.</li>
            <li>Enter your registered mobile number or email in the first box.</li>
            <li>Type the password you created during registration.</li>
            <li>Check your details carefully to make sure everything is correct.</li>
            <li>Press the Login button to continue.</li>
            <li>Once login is successful, your account opens and you can start using 3 Patti Blue.</li>
            <li>Pick any game inside the platform and enjoy.</li>
          </ol>
          <Link
            href="/3-patti-blue-login"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
          >
            🔐 Full Login Guide →
          </Link>
        </section>

        {/* ── WINNING TIPS & TRICKS ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Winning Tips and Tricks for 3 Patti Blue</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Want to improve your results on 3 Patti Blue? A smart and simple approach goes a long way. The game rewards practice, focus, and patience. Use these tips to play better.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-5">
            <li>Understand how each game works before you start. Basic rules help you make better decisions.</li>
            <li>Use your balance carefully. Do not spend all your chips at once — start small and stay safe.</li>
            <li>Claim free rewards like daily login bonuses and welcome offers to stretch your balance.</li>
            <li>Join special events and tournaments. They give extra chances to earn bonuses and prizes.</li>
            <li>Watch how other players are playing. Learn from their style and choices.</li>
            <li>Stay calm after every result. Treat wins and losses as part of the experience.</li>
            <li>Stick to games you understand. Confidence leads to better decisions.</li>
            <li>Take a short break if you start losing. A fresh mind always plays smarter.</li>
          </ul>
          <Link
            href="/3-patti-blue-winning-tricks"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
          >
            🏆 Read Full Winning Tips Guide →
          </Link>
        </section>

        {/* ── STRATEGIES TO MAKE MONEY ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Strategies to Make Money on 3 Patti Blue</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            There are several smart ways to grow your balance on 3 Patti Blue without heavy risk. Mix these strategies to earn more.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Claim every free reward you see — welcome bonus, daily login bonus, and task-based rewards.</li>
            <li>Finish quick missions inside 3 Patti Blue, such as first-deposit tasks and basic activities.</li>
            <li>Share your referral code with friends. Earn commission when they register and stay active.</li>
            <li>Join tournaments and in-app events for extra chances to win big.</li>
            <li>Log in every 24 hours to keep your daily bonus streak active.</li>
            <li>Watch for surprise rewards like red envelopes and flash bonuses and claim them right away.</li>
          </ul>
        </section>

        {/* ── PERSONAL REVIEW & USER REVIEWS ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Personal Review</h2>
          <div className="personal-review-card">
            <span className="personal-review-orb personal-review-orb-1" aria-hidden />
            <span className="personal-review-orb personal-review-orb-2" aria-hidden />
            <span className="personal-review-quote" aria-hidden>&ldquo;</span>
            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="personal-review-avatar">
                  <span>👤</span>
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-tight">My Personal Experience</p>
                  <p className="text-sm text-blue-200/80">Honest hands-on review after weeks of play</p>
                </div>
                <div className="ml-auto flex items-center gap-1 text-yellow-400 text-lg">
                  ★★★★★
                </div>
              </div>

              <p className="text-blue-50 text-base md:text-lg leading-relaxed">
                3 Patti Blue feels like a very simple and easy platform that anyone can use without stress. The clean, smooth design is the first thing that stands out. Everything is placed in a clear way, so I never feel confused. Signing up and logging in is quick, which helps new users start right away. The app runs well on normal Android phones and never feels heavy or slow. It also loads fast and works without major issues, which makes the overall experience more comfortable. I love that 3 Patti Blue keeps things light and easy — you do not need any special skills. It does need a steady internet connection, and it is mainly built for Android, but that is a small trade-off. Overall, 3 Patti Blue is a smooth, stable, and user-friendly platform that anyone can enjoy without confusion.
              </p>
            </div>
          </div>
          <div className="h-10" />

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Users Reviews</h2>
          <p className="text-gray-500 mb-6">Real voices from Pakistani players enjoying 3 Patti Blue every day.</p>
          <AnimateOnScroll
            itemSelector=".review-card"
            addedClass="review-card--in"
            stagger={110}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              { name: "Rizwan Alam", city: "GB",        initial: "R", accent: "review-accent-1", quote: "3 Patti Blue is very easy to use and runs smoothly on my phone. I love the simple design and quick loading. I open it in my free time and it always works without any issue." },
              { name: "Jiya Ali",    city: "Astore",    initial: "J", accent: "review-accent-2", quote: "My experience with 3 Patti Blue is good. It is quick, fast, and easy to understand. I open it any time and enjoy without any difficulty or confusion." },
              { name: "Raju Bhai",   city: "Quetta",    initial: "R", accent: "review-accent-3", quote: "3 Patti Blue is a light and user-friendly platform. It works well even on a basic internet connection and does not hang. Everything is arranged cleanly." },
              { name: "Ayesha Khan", city: "Lahore",    initial: "A", accent: "review-accent-4", quote: "Local payments just work. Deposits and withdrawals are fast, and the game library is huge. Great app for Pakistani players." },
              { name: "Bilal Ahmad", city: "Karachi",   initial: "B", accent: "review-accent-5", quote: "3 Patti Blue has top games and smooth gameplay. I claim daily rewards and earn extra from the referral program too." },
              { name: "Hamza",       city: "Rawalpindi",initial: "H", accent: "review-accent-6", quote: "Withdrawals via EasyPaisa hit instantly. Daily bonuses keep me coming back every day. Best Teen Patti app I have tried." },
            ].map((r) => (
              <div key={r.name} className={`review-card ${r.accent}`}>
                <span className="review-quote-mark" aria-hidden>&ldquo;</span>
                <div className="review-stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="review-quote">{r.quote}</p>
                <div className="review-footer">
                  <span className="review-avatar">{r.initial}</span>
                  <div>
                    <p className="review-name">{r.name}</p>
                    <p className="review-city">{r.city}, Pakistan</p>
                  </div>
                  <span className="review-verified" title="Verified user">✓</span>
                </div>
              </div>
            ))}
          </AnimateOnScroll>
        </section>

        {/* ── PROS & CONS ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Pros and Cons of 3 Patti Blue</h2>
          <p className="text-gray-500 mb-6">A quick, honest look at what shines and what to keep in mind.</p>
          <AnimateOnScroll
            itemSelector=".pc-card"
            addedClass="pc-card--in"
            stagger={180}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* PROS */}
            <div className="pc-card pc-card--pros">
              <span className="pc-orb pc-orb-a" aria-hidden />
              <span className="pc-orb pc-orb-b" aria-hidden />
              <div className="pc-header">
                <span className="pc-badge pc-badge--pros">
                  <span className="pc-badge-icon">✓</span>
                </span>
                <div>
                  <h3 className="pc-title pc-title--pros">Pros</h3>
                  <p className="pc-sub">Why players love it</p>
                </div>
                <span className="pc-score pc-score--pros">10<span>/10</span></span>
              </div>
              <ul className="pc-list">
                {[
                  "Simple and user-friendly design — easy for beginners.",
                  "Quick to download and install without complicated steps.",
                  "Smooth gameplay that runs well on most Android devices.",
                  "Fast registration and login — just a couple of minutes.",
                  "Clean interface that makes every option easy to find.",
                  "Fast loading and quick response during use.",
                  "Multiple game options for non-stop entertainment.",
                  "Regular updates that keep improving speed and design.",
                  "Easy navigation through features without any confusion.",
                  "24/7 customer support ready to help whenever needed.",
                ].map((item, i) => (
                  <li key={i} className="pc-item pc-item--pros">
                    <span className="pc-item-mark">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONS */}
            <div className="pc-card pc-card--cons">
              <span className="pc-orb pc-orb-c" aria-hidden />
              <span className="pc-orb pc-orb-d" aria-hidden />
              <div className="pc-header">
                <span className="pc-badge pc-badge--cons">
                  <span className="pc-badge-icon">!</span>
                </span>
                <div>
                  <h3 className="pc-title pc-title--cons">Cons</h3>
                  <p className="pc-sub">Things to keep in mind</p>
                </div>
                <span className="pc-score pc-score--cons">4<span>/4</span></span>
              </div>
              <ul className="pc-list">
                {[
                  "Mainly works on Android — other users may face limitations.",
                  "A stable internet connection is required for smooth use.",
                  "Long usage can affect daily time balance if not controlled.",
                  "Extended screen time may cause eye strain if used too much.",
                ].map((item, i) => (
                  <li key={i} className="pc-item pc-item--cons">
                    <span className="pc-item-mark">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </section>

        {/* ── WHY GO FOR 3 PATTI BLUE ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Why People Choose 3 Patti Blue?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many users pick 3 Patti Blue over other platforms for one reason — it is simple, fast, and user-friendly. Here is why it is becoming the top pick across Pakistan.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy and Beginner-Friendly</h3>
              <p className="text-gray-700 leading-relaxed">3 Patti Blue is easy to download, install, and use on any Android phone. The interface is simple, the rules are clear, and registration takes only a few minutes. New users get comfortable right away.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smooth Performance on Every Device</h3>
              <p className="text-gray-700 leading-relaxed">3 Patti Blue runs smoothly even on low-end Android phones. Loading is quick, navigation is clean, and there is no lag during gameplay. Regular updates keep the performance sharp and the design fresh.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safe, Fair, and Fully Supported</h3>
              <p className="text-gray-700 leading-relaxed">Strong security keeps your account and data safe. Every user gets a fair chance at winning. Deposits and withdrawals are fast through EasyPaisa and JazzCash. And 24/7 customer support is always there to help.</p>
            </div>
          </div>
        </section>

        {/* ── CONCLUSION ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            3 Patti Blue is a simple and popular online gaming platform in Pakistan. It delivers a smooth and easy experience with many different games in one place. The app is clean and user-friendly, so beginners and regular users both feel comfortable. It also runs well on most Android devices, even on low-storage phones, which makes it accessible for everyone.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            3 Patti Blue also focuses on safe and simple transactions. You can manage your balance without stress. Alongside entertainment, you get multiple game options in one app. It is lightweight, so it does not eat up much storage and runs on older devices too.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Overall, 3 Patti Blue gives a complete entertainment experience — fast performance, easy login, quick registration, and helpful features. Users also love the simple system, smooth navigation, and bonus rewards. If you want a light, fun, and comfortable casino app on your mobile, download 3 Patti Blue today and start your journey.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="faq-header">
            <span className="faq-header-badge">
              <span className="faq-header-dot" />
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-2">FAQs About 3 Patti Blue</h2>
            <p className="text-gray-500">Quick answers to the most common 3 Patti Blue questions.</p>
          </div>
          <AnimateOnScroll
            itemSelector=".faq-item"
            addedClass="faq-item--in"
            stagger={80}
            className="mt-8 space-y-4"
          >
            {FAQS.map((f, i) => (
              <details key={f.q} className="faq-item" {...(i === 0 ? { open: true } : {})}>
                <summary className="faq-summary">
                  <span className="faq-q-badge">Q</span>
                  <span className="faq-question">{f.q}</span>
                  <span className="faq-chevron" aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-body">
                  <span className="faq-a-badge">A</span>
                  <p className="faq-answer">{f.a}</p>
                </div>
              </details>
            ))}
          </AnimateOnScroll>
        </section>

        {/* ── BLOG CTA ── */}
        <section className="blog-cta-section">
          {/* floating card suit decorations */}
          <span className="blog-cta-suit blog-cta-suit-1" aria-hidden>♠</span>
          <span className="blog-cta-suit blog-cta-suit-2" aria-hidden>♥</span>
          <span className="blog-cta-suit blog-cta-suit-3" aria-hidden>♣</span>
          <span className="blog-cta-suit blog-cta-suit-4" aria-hidden>♦</span>
          <div className="blog-cta-orb blog-cta-orb-1" aria-hidden />
          <div className="blog-cta-orb blog-cta-orb-2" aria-hidden />

          <div className="relative z-10 text-center px-6 pt-12 pb-10">
            {/* badge */}
            <div className="blog-cta-badge">
              <span className="blog-cta-badge-dot" />
              3 Patti Blue Blog
            </div>

            <h2 className="blog-cta-title">
              Tips, Tricks &amp; Guides<br />
              <span className="blog-cta-title-accent">to Win More Every Day</span>
            </h2>
            <p className="blog-cta-sub">
              Real strategies from expert Pakistani players — updated for 2026.
            </p>

            {/* main button */}
            <Link href="/blog" className="blog-cta-btn">
              <span className="blog-cta-btn-shimmer" aria-hidden />
              <span className="relative z-10 flex items-center gap-2.5">
                <span className="blog-cta-btn-icon">📖</span>
                Browse All Blog Posts
              </span>
            </Link>

            {/* Blog topic cards */}
            <div className="blog-topic-grid">
              {[
                { icon: "✅", title: "Is 3 Patti Blue Real or Fake?",         slug: "is-teen-patti-blue-real-or-fake",              tag: "Verification" },
                { icon: "🏆", title: "Winning Tips & Tricks",                  slug: "3-patti-blue-winning-tricks",                  tag: "Strategy" },
                { icon: "💎", title: "VIP Program — Levels & Rewards",         slug: "3-patti-blue-vip-program",                     tag: "VIP" },
                { icon: "🎪", title: "Tournaments & Events 2026",              slug: "3patti-blue-tournaments-events-2026",           tag: "Events" },
                { icon: "💸", title: "Earn Daily Without Investing",           slug: "earn-daily-from-3patti-blue-without-investing", tag: "Free Earning" },
                { icon: "🛠️", title: "Fix IPs Exceed Issue",                  slug: "3-patti-blue-ips-exceed-issue",                tag: "Fix" },
              ].map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-topic-card group">
                  <span className="blog-topic-tag">{post.tag}</span>
                  <span className="blog-topic-icon">{post.icon}</span>
                  <span className="blog-topic-title">{post.title}</span>
                  <span className="blog-topic-arrow group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
