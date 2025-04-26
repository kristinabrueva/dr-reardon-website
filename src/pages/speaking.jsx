import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { useEffect } from 'react';
import clsx from 'clsx'

function InstagramEmbed({ url }) {
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      data-instgrm-theme={isDark ? 'dark' : 'light'}
      style={{
        background: 'transparent',
        border: 0,
        margin: '1px',
        maxWidth: '540px',
        minWidth: '326px',
        padding: 0,
        width: '100%',
      }}
    >
      <a href={url} target="_blank" rel="noreferrer">
        View this post on Instagram
      </a>
    </blockquote>
  );
}

function SpeakingSection({ children, className, ...props }) {
  return (
    <Section {...props}>
      <div className={clsx('space-y-8', className)}>
        {children}
      </div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {cta && <Card.Cta>{cta}</Card.Cta>}
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Daniel Reardon</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at events all around the world."
        intro="Here are some of the conferences, workshops, public lectures, and colloquia where I’ve presented on pulsars, gravitational waves, and the interstellar medium."
      >
        <SpeakingSection title="Public lecture">
          <InstagramEmbed url="https://www.instagram.com/p/C3SQQJXsZrv/" />
            <Appearance
              title="Revealing Extreme Gravity with Pulsars"
              event="South African Astronomical Observatory (SAAO) open night - 2024"
            />
        </SpeakingSection>

        <SpeakingSection title="Workshops" className="mt-24">
          <Appearance
            title="OzGrav Pulsar Data Workshop"
            event="2025 University of Melbourne"
          />

          <Appearance
            title="NWU Pulsar timing workshop"
            event="2023 Potchefstroom, South Africa -- see projects page for Link"
          />

          <Appearance
            title="MeerKAT pulsar timing workshop"
            event="2021 virtual -- see projects page for Link"
          />
        </SpeakingSection>

        <SpeakingSection title="Conferences" className="mt-24">
          <Appearance
            title="Why PSR J0437−4715 is the best pulsar"
            event="IPTA Meeting 2024 – Sexten, Italy"
          />
          <Appearance
            title="Optimising southern pulsar timing arrays for nanohertz-frequency gravitational waves"
            event="IAU General Assembly 2024 – Cape Town, South Africa"
          />
          <Appearance
            title="The Parkes Pulsar Timing Array search for an isotropic stochastic gravitational wave background"
            event="IPTA Meeting 2023 – Port Douglas, Australia"
          />
          <Appearance
            title="Unveiling inner structures of the Local Bubble and a pulsar bow shock"
            event="Scintillometry Workshop 2023 – Taipei, Taiwan"
          />
          <Appearance
            title="The Parkes PTA search for stochastic gravitational wave background"
            event="ASA Meeting 2023 – Sydney, Australia"
          />
          <Appearance
            title="The search for nanohertz gravitational waves with pulsar timing arrays"
            event="Australian Institute of Physics Summer Meeting 2023 – Canberra, Australia"
          />
          <Appearance
            title="The search for nanohertz gravitational waves with pulsar timing arrays"
            event="ACAMAR Workshop 2023 – Perth, Australia"
          />
          <Appearance
            title="The search for nanohertz gravitational waves with pulsar timing arrays"
            event="Amaldi 15 – 2023 (Virtual)"
          />
          <Appearance
            title="Scintillation arcs in J0437−4715 observed with MeerKAT"
            event="Scintillometry Workshop 2022 – Remote"
          />
          <Appearance
            title="MeerTime 2019 Science overview"
            event="OzGrav Retreat 2019 – Lorne, Australia"
          />
          <Appearance
            title="Solving pulsar orbits using scintillation"
            event="Scintillometry Workshop 2019 – Bonn, Germany"
          />
          <Appearance
            title="Using long term scintillation to study binary pulsars"
            event="IPTA Meeting 2019 – Pune, India"
          />
          <Appearance
            title="Results from the Parkes Pulsar Timing Array"
            event="IPTA Meeting 2019 – Pune, India"
          />
          <Appearance
            title="Extreme Scattering Event in the PPTA pulsar J1603−7202"
            event="IPTA Meeting 2016 – Stellenbosch, South Africa"
          />
          <Appearance
            title="New timing models for 20 millisecond pulsars in the PPTA"
            event="IPTA Meeting 2014 – Banff, Canada"
          />
        </SpeakingSection>

        <SpeakingSection title="Colloquia" className="mt-24">
          <Appearance
            title="Precision timing and scintillation of binary radio pulsars"
            event="University of Melbourne & Swinburne University of Technology - 2019"
          />
          <Appearance
            title="The Parkes PTA search for an isotropic stochastic gravitational wave background"
            event="Australian National University RSAA, OzGrav Workshop, & EPTA Spring Meeting - 2023"
          />
        </SpeakingSection>
      </SimpleLayout>
    </>
  )
}
