import { MessageCircle } from 'lucide-react';

type CTABoxProps = {
  title: string;
  text: string;
  button: string;
  note?: string;
  soonNote?: string;
  eyebrow?: string;
};

export default function CTABox({ title, text, button, note, soonNote, eyebrow }: CTABoxProps) {
  return (
    <section className="rounded-[1.5rem] border border-green-600/20 bg-green-50 p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {eyebrow ? (
            <p className="mb-2 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-green-700 ring-1 ring-green-600/15">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
          {soonNote ? (
            <p className="mt-3 rounded-2xl bg-white px-4 py-3 text-xs font-bold leading-5 text-green-700 ring-1 ring-green-600/15">
              {soonNote}
            </p>
          ) : null}
          {note ? <p className="mt-3 text-xs font-semibold leading-5 text-muted">{note}</p> : null}
        </div>
        <a
          href="#"
          onClick={(event) => event.preventDefault()}
          className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {button}
        </a>
      </div>
    </section>
  );
}
