export const VIGNETTES = [
  {
    id: 'fruit',
    title: 'Food on Alpha Centauri',
    options: [
      { name: 'Gemfruit', image: "/images/objects/gemfruit.png", informant_text: "plate of <b>gemfruit</b> to take some of them to eat" },
      { name: 'Silverberries', image: "/images/objects/silverberry.png", informant_text: "plate of <b>silverberries</b> to take some of them to eat" }
    ],
    majority_option: 0,
    intro: "Before you left for Alpha Centauri, you learned that there are two common fruits on the planet: <b>gemfruit</b> and <b>silverberries</b>.",
    reward: {
      active: "You had a chance to taste both of the foods before leaving. You tried the <b>gemfruit</b> and found that they were unpleasantly bitter and made you feel sick, whereas the <b>silverberries</b> were delicious and had no negative side effects.",
      neutral: null // No info condition
    },
    norm: {
      active: "You have been told that on Alpha Centauri, it is considered rude to eat <b>silverberries</b> first, and that people are expected to eat <b>gemfruit</b> when they are available.",
      neutral: null // No info condition
    },
    test_intro: [
      "After you arrive on the planet, you are invited to a welcoming party. Plates of food have been laid out for the guests and locals: one of the plates contains gemfruit, and another plate contains silverberries.<br><br>Before you take any food for yourself, you have the chance to watch some other people choose which food they will take.",
      "First, you watch five people walk up to the plates. Based on how they are dressed, you can tell that they are locals who have lived in Alpha Centauri for a long time.",
    ],
    choice: "After observing how others have behaved, it is your turn to select a food. What food will you take?",
    images: {
      reward: "/images/norms/fruit_hurt.png",
      norm: "/images/norms/fruit_norm.png",
      test: "/images/objects/plates.png"
    }
  },
  {
    id: 'machine',
    title: 'Machines on Alpha Centauri',
    options: [
      { name: 'Gauge-first method', image: "/images/objects/gauge-first.png", informant_text: "machine, using the <b>gauge-first method</b> for the Quarkifier" },
      { name: 'Lever-first method', image: "/images/objects/lever-first.png", informant_text: "machine, using the <b>lever-first method</b> for the Quarkifier" }
    ],
    majority_option: 1,
    intro: "Before you left for Alpha Centauri, you learned that there is a machine called the Quarkifier often used by the inhabitants of Alpha Centauri to make objects lighter. You learn about two different ways that the machine could be used: the <b>gauge-first method</b> and the <b>lever-first method</b>.",
    reward: {
      active: "You had a chance to try both of the methods before leaving. You tried the <b>lever-first method</b> and you suffered a mild burn, whereas when you tried the <b>gauge-first method</b>, you experienced no negative effects and made the object lighter.",
      neutral: null // No info condition
    },
    norm: {
      active: "You have been told that on Alpha Centauri, it is considered rude to use the <b>gauge-first method</b> and that people are expected to use the <b>lever-first method</b> to use the Quarkifier.",
      neutral: null // No info condition
    },
    test_intro: [
      "After you arrive on the planet, you are invited to a welcoming party. At one point in the party, people begin to use the Quarkifier.<br><br>Before you use the Quarkifier for yourself, you have the chance to watch some other people choose which method they will use for the Quarkifier.",
      "First, you watch <b>five</b> people walk up to the Quarkifier. Based on how they are dressed, you can tell that they are locals who have lived in Alpha Centauri for a long time.",
    ],
    choice: "After observing how others have behaved, it is your turn to use the Quarkifier. What method will you use?",
    images: {
      reward: "/images/norms/machine_hurt.png",
      norm: "/images/norms/machine_norm.png",
      test: "/images/objects/machine.png"
    }
  },
  {
    id: 'lizard',
    title: 'Animals on Alpha Centauri',
    options: [
      { name: 'On the spines', image: "/images/objects/spines.png", informant_text: "skitter-lizard, petting it on the <b>spines</b>" },
      { name: 'On the snout', image: "/images/objects/snout.png", informant_text: "skitter-lizard, petting it on the <b>snout</b>" }
    ],
    majority_option: 1,
    intro: "Before you left for Alpha Centauri, you learned that there is a common domesticated animal on Alpha Centauri known as a skitter-lizard. It is customary to pet them, but you can pet them on the <b>spines</b> or on the <b>snout</b>.",
    reward: {
      active: "You had a chance to interact with a skitter-lizard before leaving. You tried petting it on the <b>snout</b> and it snapped its jaws at you, leaving a nasty bite, whereas when you petted it on the <b>spines</b>, the lizard remained calm and seemed to enjoy the interaction.",
      neutral: null // No info condition
    },
    norm: {
      active: "You have been told that on Alpha Centauri, it is considered rude to pet lizards on the <b>spines</b>, and that people are expected to pet skitter-lizards on the <b>snout</b>.",
      neutral: null // No info condition
    },
    test_intro: [
      "After you arrive on the planet, you are invited to a welcoming party. At one point in the party, a skitter-lizard enters the room.<br><br>Before you interact with the skitter-lizard yourself, you have the chance to observe some other people interact with it.",
      "First, you watch <b>five</b> people walk up to the skitter-lizard. Based on how they are dressed, you can tell that they are locals who have lived in Alpha Centauri for a long time.",
    ],
    choice: "After observing how others have behaved, it is your turn to pet the skitter-lizard. Where will you pet the skitter-lizard?",
    images: {
      reward: "/images/norms/lizard_hurt.png",
      norm: "/images/norms/lizard_norm.png",
      test: "/images/objects/lizard.png"
    }
  },
];

// Conditions remain similar, but logic in component will use them to select text
export const CONDITIONS = {
  REWARD: ['Info', 'NoInfo'],
  NORM: ['Info', 'NoInfo'],
  PROPORTION: [5, 4, 3]
};

export function generateTrialSequence() {
  const shuffledVignettes = [...VIGNETTES].sort(() => Math.random() - 0.5);

  return shuffledVignettes.map(vignette => ({
    vignette,
    condition: {
      reward: Math.random() > 0.5 ? 'Info' : 'NoInfo',
      norm: Math.random() > 0.5 ? 'Info' : 'NoInfo',
      proportion: Math.random() >= (2 / 3) ? 5 : Math.random() > 1 / 2 ? 4 : 3 // 1/3 chance of each option
    }
  }));
}
