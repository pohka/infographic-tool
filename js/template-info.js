//data file

//image file is same as name
var template_info = [
  ["tournament", "full", "tournament"],
  ["footer", "full", "footer"],
  ["template-01", "split", "template 1"],
  ["template-02", "split", "template 2"]
];

var template_fields = [
  [
    "tournament",
    "tournament-title","tournament-date","tournament-prize-pool",
    "tournament-heroes-picked", "tournament-matches", "tournament-winner",
    "tournament-radiant-winrate", "tournament-logo"
  ],
  [
    "template-01",
    "template-01-title", "template-01-sub-title",
    "template-01-pick-1-hero-icon", "template-01-pick-rate-1",
    "template-01-pick-2-hero-icon", "template-01-pick-rate-2",
    "template-01-pick-3-hero-icon", "template-01-pick-rate-3",
    "template-01-ban-1-hero-icon", "template-01-ban-rate-1",
    "template-01-ban-2-hero-icon", "template-01-ban-rate-2",
    "template-01-ban-3-hero-icon", "template-01-ban-rate-3"
  ],
  [ "template-02",
    "template-02-hero-1", "template-02-pick-rate-1", "template-02-ban-rate-1",
    "template-02-hero-2", "template-02-pick-rate-2", "template-02-ban-rate-2",
    "template-02-hero-3", "template-02-pick-rate-3", "template-02-ban-rate-3"
  ]
];

//if any of these match template_text, the input will be for numbers
var template_fields_number =[
  ["template-01",
    "template-01-pick-rate-1", "template-01-pick-rate-2",
    "template-01-pick-rate-3", "template-01-ban-rate-1",
    "template-01-ban-rate-2","template-01-ban-rate-3"
  ],
  ["tournament", "tournament-radiant-winrate"],
  [ "template-02",
    "template-02-pick-rate-1", "template-02-ban-rate-1",
    "template-02-pick-rate-2", "template-02-ban-rate-2",
    "template-02-pick-rate-3", "template-02-ban-rate-3"
  ]
];

var template_fields_img =[
  ["tournament", "tournament-logo"]
];

var template_fields_hero_icons =[
  ["template-01",
    "template-01-pick-1-hero-icon", "template-01-pick-2-hero-icon",
    "template-01-pick-3-hero-icon", "template-01-ban-1-hero-icon",
    "template-01-ban-2-hero-icon","template-01-ban-3-hero-icon"
  ]
];

var template_fields_hero_portrait = [
  [ "template-02",
    "template-02-hero-1", "template-02-hero-2","template-02-hero-3"
  ]
]
