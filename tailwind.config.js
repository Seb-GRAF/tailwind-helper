/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // future: {
  //   hoverOnlyWhenSupported: true,
  // },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-sm': 'inset 0 1px 0 0 rgb(255 255 255 / 5%),',
        'inset-outset-md':
          'inset 0 1px 0 0 rgb(255 255 255 / 5%), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
  safelist: [
    'no-underline',
    'underline',
    'overline',
    'line-through',

    {
      pattern:
        /decoration-(solid|double|dotted|dashed|wavy|from-font|auto|0|1|2|4|8)/,
    },

    {
      pattern: /font-(sans|serif|mono)/,
    },
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
    },
    {
      pattern:
        /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    {
      pattern: /tracking-(tighter|tight|normal|wide|wider|widest)/,
    },
    {
      pattern:
        /text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /text-(black|white)/,
    },
    {
      pattern:
        /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /opacity-(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)/,
    },
    {
      pattern:
        /m-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /mt-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /mb-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /ml-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /mr-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /my-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /mx-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /p-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /pt-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /pb-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /pl-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /pr-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /py-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern:
        /px-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern: /rounded-(t|l|r|b|tl|tr|bl|br)-(none|sm|md|lg|xl|2xl|3xl|full)/,
    },
    {
      pattern: /rounded-(none|sm|md|lg|xl|2xl|3xl|full)/,
    },
    {
      pattern: /shadow-(none|sm|md|lg|xl|2xl|inner)/,
    },
    {
      pattern:
        /shadow-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /shadow-(black|white)/,
    },
    {
      pattern:
        /inset-(x|y)-(0|0.5|px|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|1&#472|1&#473|2&#473|1&#474|2&#474|3&#474|full)/,
    },
    {
      pattern:
        /inset-(0|0.5|px|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|1&#472|1&#473|2&#473|1&#474|2&#474|3&#474|full)/,
    },
    {
      pattern:
        /top-(0|0.5|px|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|1&#472|1&#473|2&#473|1&#474|2&#474|3&#474|full)/,
    },
    {
      pattern:
        /bottom-(0|0.5|px|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|1&#472|1&#473|2&#473|1&#474|2&#474|3&#474|full)/,
    },
    {
      pattern:
        /left-(0|0.5|px|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|1&#472|1&#473|2&#473|1&#474|2&#474|3&#474|full)/,
    },
    {
      pattern:
        /right-(0|0.5|px|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|1&#472|1&#473|2&#473|1&#474|2&#474|3&#474|full)/,
    },
    {
      pattern:
        /translate-(x|y)-(0|0.5|px|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96|1&#472|1&#473|2&#473|1&#474|2&#474|3&#474|full)/,
    },
    {
      pattern: /grid-(cols|rows)-(1|2|3|4|5|6|7|8|9|10|11|12|none)/,
    },
    {
      pattern:
        /gap-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|8|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern: /object-(contain|cover|fill|none|scale-down)/,
    },
    {
      pattern:
        /object-(left|right|top|bottom|center|left-bottom|left-top|right-bottom|right-top)/,
    },
    {
      pattern: /brightness-(0|50|75|90|95|100|105|110|125|150|200)/,
    },
    {
      pattern: /saturate-(0|50|100|150|200)/,
    },
    {
      pattern: /contrast-(0|50|75|100|125|150|200)/,
    },
    {
      pattern: /hue-rotate-(0|15|30|60|90|180)/,
    },
    {
      pattern: /-hue-rotate-(0|15|30|60|90|180)/,
    },
    {
      pattern: /blur-(none|sm|md|lg|xl|2xl|3xl)/,
    },
    {
      pattern: /(grayscale|invert|sepia)-(0)/,
    },
    {
      pattern: /(grayscale|invert|sepia|blur)/,
    },
  ],
}
