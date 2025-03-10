import styles from "./page.module.css";
import { getOptimizelyExperimentValue } from "./services/optimizely";
import { getLaunchDarklyExperimentValue } from "./services/launchdarkly";

export default function Home() {
  let bannerUrl = "https://picsum.photos/id/238/1920/1080";

  if (getOptimizelyExperimentValue("home-page-banner-exp")?.value) {
    bannerUrl = "https://picsum.photos/id/124/1920/1080";
  }

  let HomePageContent = () => (
    <div>
      <h1>Original Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor non
        dolor dictum ultrices eu vel libero. Nunc dignissim libero congue
        malesuada bibendum. Fusce scelerisque nisl in neque vehicula tincidunt.
        Etiam porta eros erat, nec tempor justo interdum at. Nulla in velit
        semper, mollis mauris id, eleifend lacus. Morbi sed blandit ante. Nullam
        magna felis, ullamcorper sed arcu ac, interdum vulputate enim. Nullam ut
        scelerisque eros, at mollis risus. Donec mauris libero, vestibulum eget
        lorem at, pretium fermentum libero. Duis sit amet accumsan quam.
        Maecenas magna ipsum, tincidunt nec maximus ut, fringilla id orci.
        Aliquam a dictum erat. Cras et sapien id felis porta pretium eu nec mi.
        Cras commodo dolor ornare ultricies condimentum. Nulla fringilla dictum
        turpis eu ultricies.
      </p>
    </div>
  );

  if (getLaunchDarklyExperimentValue("home-page-content-exp")) {
    HomePageContent = () => (
      <div>
        <h1>New Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor
          non dolor dictum ultrices eu vel libero. Nunc dignissim libero congue
          malesuada bibendum. Fusce scelerisque nisl in neque vehicula
          tincidunt. Etiam porta eros erat, nec tempor justo interdum at. Nulla
          in velit semper, mollis mauris id, eleifend lacus. Morbi sed blandit
          ante. Nullam magna felis, ullamcorper sed arcu ac, interdum vulputate
          enim. Nullam ut scelerisque eros, at mollis risus. Donec mauris
          libero, vestibulum eget lorem at, pretium fermentum libero. Duis sit
          amet accumsan quam. Maecenas magna ipsum, tincidunt nec maximus ut,
          fringilla id orci. Aliquam a dictum erat. Cras et sapien id felis
          porta pretium eu nec mi. Cras commodo dolor ornare ultricies
          condimentum. Nulla fringilla dictum turpis eu ultricies.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="img-container">
        <img src={bannerUrl} alt="" />
      </div>
      <HomePageContent />
    </div>
  );
}
