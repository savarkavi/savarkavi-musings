import { Arizonia } from "next/font/google";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const arizonia = Arizonia({
  weight: ["400"],
  subsets: ["latin"],
});

const typewriter = localFont({
  src: "./fonts/JMHTypewriter.ttf",
  weight: "400",
});

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-stone-900 w-full flex justify-center p-4 text-white  ${arizonia.className}`}
    >
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl mt-8">Untitled</h1>
        <p className={`${typewriter.className}`}>A poem by Savarkavi</p>
        <Image
          src={"/photo.jpg"}
          alt="photo"
          width={400}
          height={400}
          className="object-cover"
        />
        <div className="my-8">
          <p className={`${typewriter.className} text-[11px]`}>
            A story! Yet another tragedy! hear, hear
            <br /> Of my town in the north, Cheer! Cheer!
            <br />
            <br />
            <br /> As I walked the line of that dreadful season,
            <br /> of the clouds that take the form of strips,
            <br /> of the dawn when the sun commits treason
            <br />
            and of the sweat that comes down to your lips,
            <br />
            <br /> My eyes got laid on something beautiful,
            <br /> mind you fellows, by chance,
            <br /> but I kept looking anyway, and she did too glance!
            <br />
            <br /> But as the delight and thrill came over,
            <br /> as she passed my home and turned cold,
            <br /> it disappeared as quickly, the misery took over,
            <br /> when she passed and away down the road.
            <br />
            <br /> And people! Though my gaze was helpless,
            <br /> it was not without hope,
            <br /> for if she went up, she sure is coming down the slope!
            <br />
            <br /> I must confess something, lend me an ear apart,
            <br /> I was only to see her to cast aside the dark clouds.
            <br /> The dullness of the day which loomed over my heart,
            <br /> shall be cured for the moments I see her round.
            <br />
            <br />
            And so, I expected nothing in return,
            <br /> I shall only be an admirer from afar on my sail,
            <br /> and continue my tell tale, my fellows sit straight!
            <br />
            <br />
            Now the day slowly passed into evening,
            <br /> the air smelled of petrichor and anticipation.
            <br /> And my feet tapped patiently for her coming,
            <br /> while the naïve mind rehearsed the adoration.
            <br />
            <br /> And when the clouds cleared, in her arrival,
            <br /> a thing occurred of most unexpected.
            <br /> I caught her looking! Now I stand corrected!
            <br />
            <br /> My dear fellows, let me ask you this-
            <br />
            Do you believe in magic? I do not, I must claim.
            <br /> But the one to fill your heart down from the abyss,
            <br /> is no less than of it, just has a different name.
            <br />
            <br /> O&apos; yes how my soul longed for those brief moments,
            <br /> to be a gentle breeze brushing her hair,
            <br /> and the reflection which only her mirror must know.
            <br />
            <br /> Even the humming birds that came from ashore,
            <br /> sang in praise of the steps and the curves she made.
            <br /> They sang, “Am I the love that you looked for?
            <br /> Answer under your breadth, spell out your fate.”
            <br />
            <br /> And what felt like an eternity was gone,
            <br /> in the blink of an eye.
            <br /> I watched the wind carry her off, without a reply.
            <br />
            <br /> From the morning rush to the evening hues,
            <br /> the story continued of our sharp exchanges.
            <br /> We sang the same song for any clues,
            <br /> until it became the story for the ages.
            <br />
            <br /> O&apos; yes my dear fellows, the time was up,
            <br /> It was the clock’s betrayal in my hour of need.
            <br /> I had to raise the wine in a glass of cup,
            <br /> a toast and farewell to my vacation in forest deep.
            <br />
            <br /> I did thought of waving her a hand,
            <br /> or perhaps even a smile?
            <br />
            Alas! Only I didn’t get to see her for the last time.
            <br />
            <br /> Or the last time had already been decided?
            <br /> when the time didn’t run backwards.
            <br /> Our paths which had been so magically collided,
            <br /> was judged and punished for us cowards.
            <br />
            <br /> And this, my fellows, is a song of a travel,
            <br /> of my journey up in north.
            <br /> A tale of a road- where a stranger walked.
            <br />
            <br />
            <br /> And of a town whose only remaining beauty,
            <br /> is the path she strolled on.
          </p>
        </div>
        <Link href={"/send-love"} className="text-lg text-blue-400 underline">
          Send Love
        </Link>
      </div>
    </div>
  );
}
