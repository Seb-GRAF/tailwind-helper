/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-sm': 'inset 0 1px 0 0 rgb(255 255 255 / 5%)',
      },
    },
  },
  plugins: [],
  safelist: [
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
  ],
}
