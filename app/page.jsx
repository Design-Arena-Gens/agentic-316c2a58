import Link from "next/link";
import Image from "next/image";

const HIGHLIGHTS = [
  {
    title: "Hola Mundo",
    description: "Aprende a saludar en español con estilo vibrante."
  },
  {
    title: "Conversaciones",
    description: "Explora frases esenciales para romper el hielo."
  },
  {
    title: "Cultura Viva",
    description: "Descubre cómo el saludo refleja la calidez latina."
  }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-rose-100 text-slate-900">
      <header className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 pb-16 pt-20 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
          <span role="img" aria-label="sparkles">
            ✨
          </span>
          Tu viaje comienza con un Hola
        </div>
        <h1 className="text-balance text-5xl font-semibold leading-tight sm:text-6xl">
          <span className="text-transparent bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text">
            Hola
          </span>{" "}
          es más que una palabra, es una invitación.
        </h1>
        <p className="max-w-3xl text-pretty text-lg text-slate-600 sm:text-xl">
          Sumérgete en una experiencia interactiva que celebra el saludo más
          universal del español. Explora significados, expresiones y la energía
          que se comparte cada vez que decimos hola.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            className="rounded-full bg-gradient-to-r from-rose-500 to-amber-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-rose-200 transition hover:scale-105 hover:shadow-rose-300"
            href="#experiencia"
          >
            Vivir la experiencia
          </Link>
          <Link
            className="rounded-full border border-rose-200 px-6 py-3 text-base font-semibold text-rose-500 transition hover:border-rose-300 hover:text-rose-600"
            href="#aprende"
          >
            Aprende más
          </Link>
        </div>
      </header>

      <section
        id="experiencia"
        className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-8 px-6 pb-24 lg:flex-row"
      >
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Un saludo que conecta corazones.
          </h2>
          <p className="text-lg text-slate-600">
            Cada hola abre la puerta a una historia. Desde un encuentro casual
            hasta el inicio de una amistad, la palabra crea un puente entre
            personas, culturas y emociones. Aquí celebramos ese espíritu.
          </p>
          <div className="rounded-2xl border border-rose-100 bg-white/80 p-6 shadow-sm backdrop-blur">
            <p className="text-lg font-medium text-rose-500">
              “Hola es la chispa que enciende conversaciones memorables.”
            </p>
            <p className="mt-2 text-sm text-slate-500">
              — Comunidad Agentic
            </p>
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <div className="absolute inset-8 rounded-full bg-gradient-to-r from-rose-200 via-amber-100 to-orange-200 blur-2xl" />
          <Image
            alt="Personas saludándose"
            className="relative rounded-3xl shadow-2xl shadow-rose-200"
            height={400}
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
            width={400}
          />
        </div>
      </section>

      <section
        id="aprende"
        className="mx-auto w-full max-w-5xl px-6 pb-24 text-slate-900"
      >
        <h2 className="text-3xl font-semibold sm:text-4xl">Tres formas de decir hola</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Varía tu saludo según la ocasión. Aquí tienes inspiración para tus
          próximas conversaciones en español.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-3 rounded-2xl border border-rose-100 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-rose-500">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-24">
        <div className="grid gap-8 rounded-3xl bg-slate-900 px-8 py-12 text-white lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Lanza tu propio ritual de bienvenida.
            </h2>
            <p className="text-lg text-slate-200">
              Inspírate y construye una experiencia digital que salude al mundo
              como tú lo sientes. Usa este proyecto como punto de partida para
              personalizar tu propio mensaje de bienvenida.
            </p>
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-base font-semibold text-slate-900 transition hover:scale-105"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explorar recursos
            </Link>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">Tip express</h3>
            <p className="mt-3 text-sm text-slate-200">
              Personaliza esta página cambiando el gradiente y los textos para
              que reflejen tu propia voz. Un saludo auténtico resuena más.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/60 bg-white/70 py-10 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <span>Hecho con cariño para quienes dicen hola.</span>
          <span>&copy; {new Date().getFullYear()} Agentic Hola</span>
        </div>
      </footer>
    </main>
  );
}
