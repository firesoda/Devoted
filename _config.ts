import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import date from "lume/plugins/date.ts";
import { enGB } from "npm:date-fns/locale";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";

import implicitFigures from "npm:markdown-it-image-figures";
import attrs from "npm:markdown-it-attrs";
import container from "npm:markdown-it-container";
import deflist from "npm:markdown-it-deflist";

const markdown = {
  plugins: [
    [implicitFigures, {
      figcaption: true,
      lazy: true,
      async: true
    }],
    [attrs, {
      allowedAttributes: ['id', 'class']
    }],
    [container, "notice"],
    deflist
  ]
};

const site = lume({
  src: "./src",
}, { markdown });

site.use(picture(/* Options */));
site.use(transformImages());
site.use(favicon({
  input: "/blue3.gif",
}));

site.use(date({
  locales: { enGB },
}));

site.add("/styles/");
site.add("/assets/");
site.add("/scripts");

// Nekoweb stuff
site.add("elements.css");
site.add("infinity-unbloom.png");
site.add("infinity-bloom.png");

site.add(
  "https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css",
  "/styles/glightbox.min.css",
);

site.add(
  "https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js",
  "/scripts/glightbox.min.js"
);

export default site;
