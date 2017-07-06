//generate hero names from direction names
//str = ls in bash

var str = "abaddon.png             earthshaker.png          morphling.png              spectre.png"+
"alchemist.png           elder_titan.png          naga_siren.png             spirit_bear.png"+
"ember_spirit.png         natures_prophet.png        spirit_breaker.png"+
"ancient_apparition.png  enchantress.png          necrophos.png              storm_spirit.png"+
"antimage.png            enigma.png               night_stalker.png          sven.png"+
"arc_warden.png          faceless_void.png        nyx_assassin.png           techies.png"+
"axe.png                 gyrocopter.png           ogre_magi.png              templar_assassin.p"+
"bane.png                huskar.png               omniknight.png             terrorblade.png"+
"batrider.png            invoker.png              oracle.png                 tidehunter.png"+
"beastmaster.png         io.png                   outworld_devourer.png      timbersaw.png"+
"bloodseeker.png               phantom_assassin.png       tinker.png"+
"bounty_hunter.png       jakiro.png               phantom_assassin_alt1.png  tiny.png"+
"brewmaster.png          juggernaut.png           phantom_lancer.png         treant_protector"+
"bristleback.png         keeper_of_the_light.png  phoenix.png                troll_warlord.png"+
"broodmother.png         kunkka.png               puck.png                   tusk.png"+
"centaur.png             legion_commander.png     pudge.png                  underlord.png"+
"chaos_knight.png        leshrac.png              pugna.png                  undying.png"+
"chen.png                lich.png                 queen_of_pain.png          ursa.png"+
"clinkz.png              life_stealer.png         razor.png                  vengeful_spirit.png"+
"clockwerk.png           lina.png                 riki.png                   venomancer.png"+
"crystal_maiden.png      lion.png                 rubick.png                 viper.png"+
"dark_seer.png           lone_druid.png           sand_king.png              visage.png"+
"dazzle.png              luna.png                 shadow_demon.png           warlock.png"+
"death_prophet.png       lycan.png                shadow_fiend.png           weaver.png"+
"default.png             magnataur.png            shadow_shaman.png          wind_ranger.png"+
"disruptor.png           medusa.png               silencer.png               winter_wyvern.png"+
"doom.png                meepo.png                skywrath_mage.png          witch_doctor.png"+
"dragon_knight.png       mirana.png               slardar.png                wraith_king.png"+
"drow_ranger.png         monkey_king.png          slark.png                  zeus.png"+
"earth_spirit.png        sniper.png";

str = str.replace(/ /g,'');

str = str.replace(/.png/g, ',');

var ray = str.split(",");
ray.sort();

var final ="";
for (var i = 0; i < ray.length; i++)
  {
    final+='"'+ray[i]+'"';
    if(i!=0 && i!=ray.length-1)
      final+=",\n"
  }

console.log(final);
