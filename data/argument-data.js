// A reusable argument has a question and an ordered set of claims.
// The final claim is the conclusion; presentation behavior lives in
// components/argument-build.js.
export const reconstructionArgument = {
  id: 'reconstructing-the-past',
  eyebrow: { en: 'A question of method', nl: 'Een vraag van methode' },
  title: { en: 'How do we reach the past?', nl: 'Hoe bereiken we het verleden?' },
  steps: [
    {
      id: 'distance',
      text: {
        en: 'More than a thousand years separate us from the past we study.',
        nl: 'Meer dan duizend jaar scheidt ons van het verleden dat we onderzoeken.',
      },
    },
    {
      id: 'witnesses',
      text: {
        en: 'There are no survivors we can talk to.',
        nl: 'Er zijn geen overlevenden met wie we kunnen spreken.',
      },
    },
    {
      id: 'access',
      text: {
        en: 'No time machine can place us on the ground there.',
        nl: 'Geen tijdmachine kan ons ter plekke terugbrengen.',
      },
    },
    {
      id: 'conclusion',
      kind: 'conclusion',
      text: {
        en: 'We must reconstruct the past: build an account from the evidence that survives.',
        nl: 'We moeten het verleden reconstrueren: een verhaal opbouwen uit de bronnen die bewaard zijn.',
      },
    },
  ],
};
