//data file

//image file is same as name
var template_info = [
  ["tournament", "full"],
  ["footer", "full"],
  ["template-01", "split"],
  ["template-02", "split"]
];

var template_fields = [
  [
    "tournament",
    "tournament-title","tournament-date","tournament-prize-pool",
    "tournament-heroes-picked", "tournament-matches", "tournament-winner",
    "tournament-radiant-winrate", "tournament-logo"
  ],
  [
    "template-01", "template-01-title", "template-01-sub-title",
    "template-01-pick-1-hero-icon", "template-01-pick-rate-1",
    "template-01-pick-2-hero-icon", "template-01-pick-rate-2",
    "template-01-pick-3-hero-icon", "template-01-pick-rate-3",
    "template-01-ban-1-hero-icon", "template-01-ban-rate-1",
    "template-01-ban-2-hero-icon", "template-01-ban-rate-2",
    "template-01-ban-3-hero-icon", "template-01-ban-rate-3"
  ]

];

//if any of these match template_text, the input will be for numbers
var template_fields_number =[
  ["template-01",
    "template-01-pick-rate-1", "template-01-pick-rate-2",
    "template-01-pick-rate-3", "template-01-ban-rate-1",
    "template-01-ban-rate-2","template-01-ban-rate-3"
  ],
  ["tournament", "tournament-radiant-winrate"]
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
