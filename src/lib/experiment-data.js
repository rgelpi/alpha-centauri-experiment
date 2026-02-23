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
  {
    id: 'lamp',
    title: 'Light sources on Alpha Centauri',
    options: [
      { name: 'Crank-Lamp', image: "/images/objects/lamp.png", informant_text: "table, selecting the <b>crank-lamp</b> to use" },
      { name: 'Glow-Rod', image: "/images/objects/glow.png", informant_text: "table, selecting the <b>glow-rod</b> to use" }
    ],
    majority_option: 0,
    intro: "Before you left for Alpha Centauri, you learned that there are two light sources commonly used when it is dark outside, a <b>crank-lamp</b> and a <b>glow-rod</b>.",
    reward: {
      active: "You had a chance to interact with the two light sources before leaving. The <b>crank-lamp</b> was heavy and required continuous cranking to use, making you tired after just a few minutes using it. The <b>glow-rod</b> was light and easy to use, and you could keep it lit for hours. ",
      neutral: null // No info condition
    },
    norm: {
      active: "You have been told that on Alpha Centauri, it is considered rude to use the <b>glow-rod</b> and that people are expected to use the <b>crank-lamp</b>.",
      neutral: null // No info condition
    },
    test_intro: [
      "After you arrive on the planet, you are invited to a welcoming party. At one point in the party, people go outside, where it is very dark. Before you leave the party, you have the chance to observe some other people use a light source.",
      "First, you watch <b>five</b> people walk up to the table with the light sources. Based on how they are dressed, you can tell that they are locals who have lived in Alpha Centauri for a long time.",
    ],
    choice: "After observing how others have behaved, it is your turn to select a light source. Which light source will you use?",
    images: {
      reward: "/images/norms/lamp_hurt.png",
      norm: "/images/norms/lamp_norm.png",
      test: "/images/objects/lamps.png"
    }
  },
  {
    id: 'plants',
    title: 'Plants on Alpha Centauri',
    options: [
      { name: 'Squeezing the stem', image: "/images/objects/plant-stem.png", informant_text: "plant, harvesting nectar by <b>squeezing the stem</b>" },
      { name: 'Plucking the petals', image: "/images/objects/plant-petal.png", informant_text: "plant, harvesting nectar by <b>plucking the petals</b>" }
    ],
    majority_option: 0,
    intro: "Before you left for Alpha Centauri, you learned about a common plant called the sun-blossom that secretes a sweet nectar. A common leisure activity is to go to fields of sun-blossoms to harvest the nectar. Two methods exist to do this: <b>squeezing the stem</b> or <b>plucking the petals</b>.",
    reward: {
      active: "You had a chance to try both methods before leaving. When you tried <b>squeezing the stem</b>, it released a sap that gave you an uncomfortable, itchy rash. When you tried <b>plucking the petals</b>, it was easy, painless, and safely yielded the nectar.",
      neutral: null
    },
    norm: {
      active: "You have been told that on Alpha Centauri, it is considered rude to harvest by <b>plucking the petals</b>, and that people are expected to harvest by <b>squeezing the stem</b>.",
      neutral: null
    },
    test_intro: [
      "After you arrive on the planet, you are invited to a welcoming party. As part of the gathering, people decide to go to a sun-blossom field to harvest nectar.<br><br>Before you harvest some nectar for yourself, you have the chance to watch some other people choose which method they will use.",
      "First, you watch <b>five</b> people walk up to the plants. Based on how they are dressed, you can tell that they are locals who have lived in Alpha Centauri for a long time."
    ],
    choice: "After observing how others have behaved, it is your turn to harvest nectar. What method will you use?",
    images: {
      reward: "/images/norms/plant_hurt.png",
      norm: "/images/norms/plant_norm.png",
      test: "/images/objects/plant.png"
    }
  },
  {
    id: 'offering',
    title: 'Offerings on Alpha Centauri',
    options: [
      { name: 'Bare hands', image: "/images/objects/hands.png", informant_text: "offering, carrying it with their <b>bare hands</b>" },
      { name: 'Hover-tray', image: "/images/objects/tray.png", informant_text: "offering, carrying it using a <b>hover-tray</b>" }
    ],
    majority_option: 0,
    intro: "Before you left for Alpha Centauri, you learned that it is customary to bring a small celestial stone as an offering when attending a gathering. You can carry the offering in your <b>bare hands</b> or by using a <b>hover-tray</b>.",
    reward: {
      active: "You had a chance to hold a celestial stone before leaving. The stone was exceptionally freezing to the touch; when you carried it in your <b>bare hands</b>, they ached with blistering cold. When you used the <b>hover-tray</b>, your hands were completely protected and carrying it was painless.",
      neutral: null
    },
    norm: {
      active: "You have been told that on Alpha Centauri, it is considered rude to use the <b>hover-tray</b>, and that people are expected to carry the offering in their <b>bare hands</b>.",
      neutral: null
    },
    test_intro: [
      "After you arrive on the planet, you are invited to a welcoming party. Near the entrance, there is a pile of celestial stones for guests to take in order to make an offering.<br><br>Before you take an offering yourself, you have the chance to watch some other people choose how they will carry it.",
      "First, you watch <b>five</b> people walk up to the offerings. Based on how they are dressed, you can tell that they are locals who have lived in Alpha Centauri for a long time."
    ],
    choice: "After observing how others have behaved, it is your turn to pick up a stone to make an offering. How will you carry it?",
    images: {
      reward: "/images/norms/offering_hurt.png",
      norm: "/images/norms/offering_norm.png",
      test: "/images/objects/offering.png"
    }
  },
  // {
  //   id: 'placeholder3',
  //   title: 'Placeholder 3',
  //   options: [
  //     { name: 'Option 1', image: "/images/objects/placeholder3.png", informant_text: "placeholder 3 option 1" },
  //     { name: 'Option 2', image: "/images/objects/placeholder3.png", informant_text: "placeholder 3 option 2" }
  //   ],
  //   majority_option: 0,
  //   intro: "Placeholder 3 intro.",
  //   reward: {
  //     active: "Placeholder 3 reward.",
  //     neutral: null
  //   },
  //   norm: {
  //     active: "Placeholder 3 norm.",
  //     neutral: null
  //   },
  //   test_intro: [
  //     "Placeholder 3 test intro.",
  //     "First, you watch five people..."
  //   ],
  //   choice: "Placeholder 3 choice.",
  //   images: {
  //     reward: "/images/norms/placeholder3_hurt.png",
  //     norm: "/images/norms/placeholder3_norm.png",
  //     test: "/images/objects/placeholder3.png"
  //   }
  // },
  // {
  //   id: 'placeholder4',
  //   title: 'Placeholder 4',
  //   options: [
  //     { name: 'Option 1', image: "/images/objects/placeholder4.png", informant_text: "placeholder 4 option 1" },
  //     { name: 'Option 2', image: "/images/objects/placeholder4.png", informant_text: "placeholder 4 option 2" }
  //   ],
  //   majority_option: 0,
  //   intro: "Placeholder 4 intro.",
  //   reward: {
  //     active: "Placeholder 4 reward.",
  //     neutral: null
  //   },
  //   norm: {
  //     active: "Placeholder 4 norm.",
  //     neutral: null
  //   },
  //   test_intro: [
  //     "Placeholder 4 test intro.",
  //     "First, you watch five people..."
  //   ],
  //   choice: "Placeholder 4 choice.",
  //   images: {
  //     reward: "/images/norms/placeholder4_hurt.png",
  //     norm: "/images/norms/placeholder4_norm.png",
  //     test: "/images/objects/placeholder4.png"
  //   }
  // }
];

// Conditions remain similar, but logic in component will use them to select text
export const CONDITIONS = {
  REWARD: ['Info', 'NoInfo'],
  NORM: ['Info', 'NoInfo'],
  PROPORTION: [5, 4, 3]
};

export function generateTrialSequence() {
  const shuffledVignettes = [...VIGNETTES].sort(() => Math.random() - 0.5);

  const conditionValues = [
    { reward: 'Info', norm: 'Info', proportion: 5 },
    { reward: 'Info', norm: 'Info', proportion: 4 },
    { reward: 'Info', norm: 'NoInfo', proportion: 5 },
    { reward: 'Info', norm: 'NoInfo', proportion: 4 },
    { reward: 'NoInfo', norm: 'Info', proportion: 5 },
    { reward: 'NoInfo', norm: 'Info', proportion: 4 },
    { reward: 'NoInfo', norm: 'NoInfo', proportion: 5 },
    { reward: 'NoInfo', norm: 'NoInfo', proportion: 4 }
  ];

  const shuffledConditions = conditionValues.sort(() => Math.random() - 0.5);

  return shuffledVignettes.map((vignette, index) => ({
    vignette,
    condition: shuffledConditions[index % conditionValues.length]
  }));
}
