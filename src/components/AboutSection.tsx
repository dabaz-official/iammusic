'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props: React.ComponentPropsWithoutRef<'section'>) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-violet-300', 'fill-pink-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">About</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-slate-700',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
        After the release of Whole Lotta Red, Carti revealed the existence of a new project in the caption of a since-deleted Instagram post:
        <br/>
        <span className="text-slate-500">
          LeTs dr0p thiS new Album . w3 noT done .
        </span>
        <br/>
        In his April 2022 interview with XXL, Carti briefly discussed details about his new album:
        <br/>
        <span className="text-slate-500 font-bold">
          You just played some new music. One song was “Wicked.” You mentioned you had a new album. What can you say about that?
        </span>
        <br/>
        <span className="text-slate-500">
          I was about to name my album Music because that’s where I’m at, you know what I’m saying? Music.
        </span>
        <br/>
        <span className="text-slate-500 font-bold">
          Do you have a name now?
        </span>
        <br/>
        <span className="text-slate-500">
          Music because that’s all it is at this point.
        </span>
        <br/>
        <span className="text-slate-500 font-bold">
          What are the topics that are important for this project? What did you notice while making this recent music that you find yourself rapping about or writing about?
        </span>
        <br/>
        <span className="text-slate-500">
          Love. Sex. Drugs. Changes in my life. I’ve been rapping about going to rehab. I want to go to rehab because I think I’m bipolar. I want everybody to feel free. I want this album to make everyone feel free.
        </span>
        <br/>
        On March 4, 2023, Carti previewed “ROCKSTAR” in full during his set at the Rolling Loud music festival in California. Four months later, on July 7, he played “POP OUT” in its entirety during his set at the 2023 Wireless Festival.
        <br/>
        On December 7, 2023, Carti posted an image on his Instagram story that read “I AM MUSIC,” and shared the same image on the Opium Instagram account with the caption “PREPARE.” Pharrell Williams subsequently posted the same image on both X and Instagram with the same caption.
        <br/>
        Later that same day, DJ Akademiks revealed during a live stream that he had spoken with Carti earlier and that the album’s rollout was commencing:
        <br/>
        <span className="text-slate-500">
          The album… the project… the music… what you’ve waited for will be delivered… Carti is ready to press the button on the rollout. You’re gonna see more posts from him, more activity from him, more motion from him, and Carti season is in full effect…starting today.
        </span>
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )}
    </section>
  )
}
