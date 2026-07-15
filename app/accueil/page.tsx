import {
  FaBriefcase,
  FaClockRotateLeft,
  FaLayerGroup,
  FaMicrophone,
  FaMicroscope,
  FaMusic,
} from "react-icons/fa6";
import { PlayerBar } from "@/components/audio/player-bar";
import {
  AuthorSection,
  BookCard,
  CollectionCard,
  Section,
} from "@/components/catalog/book-sections";
import { HomeHeroSlider } from "@/components/home/home-hero-slider";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="lg:pl-64">
        <TopNav />

        <main className="px-4 pb-32 sm:px-6 lg:px-8">
          <HomeHeroSlider />

          <div className="mt-12 space-y-16">
            <Section title="Continuer l'écoute" grid={false} viewAllHref="/bibliotheque">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <BookCard
                  id="la-chute-des-geants"
                  variant="continue"
                  title="La Chute des Géants"
                  author="Ken Follett"
                  progress={71}
                />
                <BookCard
                  id="le-secret-egypte"
                  variant="continue"
                  title="Le Secret de l'Égypte Éternelle"
                  author="Jacques Martel"
                  progress={45}
                />
                <BookCard
                  id="l-ombre-des-pharaons"
                  variant="continue"
                  title="L'Ombre des Pharaons"
                  author="Jacques Martel"
                  progress={30}
                />
                <BookCard
                  id="memoire-egyptien"
                  variant="continue"
                  title="Mémoire d'un Égyptien"
                  author="Christian Jacq"
                  progress={88}
                />
              </div>
            </Section>

            <Section title="Recommandé pour vous" viewAllHref="/catalogue">
              <BookCard
                id="l-empire-des-tenebres"
                title="L'Empire des Ténèbres"
                author="Christian Jacq"
                category="Spiritualité"
                duration="5h 24"
              />
              <BookCard
                id="voie-des-sages"
                title="La Voie des Sages"
                author="Papyrus Originals"
                category="Biographie"
                duration="19h 12"
              />
              <BookCard
                id="le-secret-egypte"
                title="Le Secret de l'Égypte Éternelle"
                author="Jacques Martel"
                category="Spiritualité"
                duration="7h 45"
              />
              <BookCard
                id="la-chute-des-geants"
                title="La Chute des Géants"
                author="Ken Follett"
                category="Style de vie"
                duration="4h 30"
              />
              <BookCard
                id="l-ombre-des-pharaons"
                title="L'Ombre des Pharaons"
                author="Papyrus Studio"
                category="Philosophie"
                duration="6h 15"
              />
            </Section>

            <Section title="Nouveautés" viewAllHref="/catalogue">
              <BookCard
                id="quatre-accords"
                title="Les Quatre Accords"
                author="Don Miguel Ruiz"
                category="Psychologie"
                duration="2h 30"
              />
              <BookCard
                id="homme-heureux"
                title="L'homme qui voulait être heureux"
                author="Laurent Gounelle"
                category="Roman"
                duration="5h 15"
              />
              <BookCard
                id="changer-eau"
                title="Changer l'eau des fleurs"
                author="Valérie Perrin"
                category="Fiction"
                duration="12h 45"
              />
              <BookCard
                id="derniere-allumette"
                title="La Dernière Allumette"
                author="Marie Vareille"
                category="Suspense"
                duration="9h 20"
              />
              <BookCard
                id="bleu-du-ciel"
                title="Tout le bleu du ciel"
                author="Mélissa da Costa"
                category="Roman"
                duration="22h 10"
              />
            </Section>

            <Section title="Livres Premium">
              <BookCard
                id="voie-des-sages"
                variant="premium"
                title="La Voie des Sages"
                author="Papyrus Originals"
                accent="#4c1d95"
              />
              <BookCard
                id="le-secret-egypte"
                variant="premium"
                title="Le Secret de l'Égypte Éternelle"
                author="Jacques Martel"
                accent="#064e3b"
              />
              <BookCard
                id="lois-nature"
                variant="premium"
                title="Les Lois de la nature humaine"
                author="Robert Greene"
                accent="#7f1d1d"
              />
              <BookCard
                id="reflechissez"
                variant="premium"
                title="Réfléchissez et devenez riche"
                author="Napoleon Hill"
                accent="#713f12"
              />
              <BookCard
                id="strategie-ocean"
                variant="premium"
                title="La Stratégie de l'Océan Bleu"
                author="W. Chan Kim"
                accent="#1e3a8a"
              />
            </Section>

            <AuthorSection title="Auteurs populaires">
              <BookCard variant="author" title="" author="Paulo Coelho" />
              <BookCard variant="author" title="" author="Yuval Noah Harari" />
              <BookCard variant="author" title="" author="Michelle Obama" />
              <BookCard variant="author" title="" author="Eckhart Tolle" />
              <BookCard variant="author" title="" author="James Clear" />
              <BookCard variant="author" title="" author="Dalaï Lama" />
              <BookCard variant="author" title="" author="George Orwell" />
              <BookCard variant="author" title="" author="Marc Aurèle" />
            </AuthorSection>

            <Section title="Collections">
              <CollectionCard
                title="Développement personnel"
                count="124 livres"
                icon={FaLayerGroup}
              />
              <CollectionCard title="Romans & Fiction" count="342 livres" icon={FaMusic} />
              <CollectionCard
                title="Business & Marketing"
                count="98 livres"
                icon={FaBriefcase}
              />
              <CollectionCard title="Histoire" count="156 livres" icon={FaClockRotateLeft} />
              <CollectionCard title="Philosophie" count="87 livres" icon={FaMicrophone} />
              <CollectionCard
                title="Science & Technologie"
                count="64 livres"
                icon={FaMicroscope}
              />
            </Section>
          </div>
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}
