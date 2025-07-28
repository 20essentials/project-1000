import {
  midudev_array_of_posts,
  midudev_commonProps
} from '@/publicData/user-1-midudev';
import {
  goated_ai_art_array_of_posts,
  goated_ai_art_commonProps
} from '@/publicData/user-2-goated-ai-art';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { qbitlab_array_of_posts, qbitlab_commonProps } from './user-6-qbitlab';
import {
  ars_notoria_array_of_posts,
  ars_notoria_commonProps
} from './user-3-ars-notoria';
import { beats_array_of_posts, beats_commonProps } from './user-5-beats';
import {
  mr_lamborghini_array_of_posts,
  mr_lamborghini_commonProps
} from './user-4-mr-lamborghini';
import {
  vid_favorites_array_of_posts,
  vid_favorites_commonProps
} from './user-7-vidfavorites';
import {
  siti_favolosi_array_of_posts,
  siti_favolosi_commonProps
} from './user-8-siti-favolosi';
import { luxury_array_of_posts, luxury_commonProps } from './user-9-luxury';
import {
  marshall_jassan_array_of_posts,
  marshall_jassan_commonProps
} from './user-10-marshall-jassan';
import {
  edaserkanbolat_edits_array_of_posts,
  edaserkanbolat_edits_commonProps
} from './user-11-edaserkanbolat-edits';
import {
  jorgepomarg_array_of_posts,
  jorgepomarg_commonProps
} from './user-12-jorgepomarg';
import {
  lucia_sora_array_of_posts,
  lucia_sora_commonProps
} from './user-13-luciasora';
import {
  elcodigobravo_array_of_posts,
  elcodigobravo_commonProps
} from './user-14-elcodigo-bravo';
import {
  mr_rombus_array_of_posts,
  mr_rombus_commonProps
} from './user-15-mr-rombus';
import { cata_array_of_posts, cata_commonProps } from './user-16-cata copy';
import {
  whoisangenr_array_of_posts,
  whoisangenr_commonProps
} from './user-17-whoisangenr';
import { pumpkim_array_of_posts, pumpkim_commonProps } from './user-18-pumpkim';
import {
  gregorian_array_of_posts,
  gregorian_commonProps
} from './user-19-gregorian';
import {
  milan_cars_array_of_posts,
  milan_cars_commonProps
} from './user-20-milan-cars';
import {
  francesco_viaggi_array_of_posts,
  francesco_viaggi_commonProps
} from './user-21-francesco-viaggi';
import { ariel_array_of_posts, ariel_commonProps } from './user-22-ariel';
import {
  javier_santaolalla_array_of_posts,
  javier_santaolalla_commonProps
} from './user-23-javier-santaolalla';
import {
  mr_robot_array_of_posts,
  mr_robot_commonProps
} from './user-24-mr-robot';
import { mr_benz_array_of_posts, mr_benz_commonProps } from './user-25-mr-benz';
import {
  about_life_array_of_posts,
  about_life_commonProps
} from './user-27-about-life';
import {
  arte_settima_array_of_posts,
  arte_settima_commonProps
} from './user-26-arte-settima';
import {
  pongamoslo_a_prueba_array_of_posts,
  pongamoslo_a_prueba_commonProps
} from './user-28-pongamoslo-a-prueba';
import {
  the_simulator_array_of_posts,
  the_simulator_commonProps
} from './user-29-the-simulator';
import {
  lacosaes_array_of_posts,
  lacosaes_commonProps
} from './user-30-lacosaes';
import { miguel_araiza_array_of_posts, miguel_araiza_commonProps } from './user-31-miguel-araiza';
import { presocratico_array_of_posts, presocratico_commonProps } from './user-32-presocratico';
import { eddy_beef_array_of_posts, eddy_beef_commonProps } from './user-33-eddy-beef';
import { lalobri_array_of_posts, lalobri_commonProps } from './user-34-lalobri';
import { soy_delishus_array_of_posts, soy_delishus_commonProps } from './user-35-soydelishus';

//Este ya no lo quiero:
// [beats_commonProps, beats_array_of_posts],

export const PUBLIC_DATA: arrayOfPosts = [
  //testing
  [midudev_commonProps, midudev_array_of_posts], //esto no existe abajo
  [qbitlab_commonProps, qbitlab_array_of_posts], //esto no existe abajo
  [gregorian_commonProps, [gregorian_array_of_posts[0]]], //esto si existe abajo
  //testing

  // [presocratico_commonProps, presocratico_array_of_posts],
  // [eddy_beef_commonProps, eddy_beef_array_of_posts],
  // [lalobri_commonProps, lalobri_array_of_posts],
  // [soy_delishus_commonProps, soy_delishus_array_of_posts],
  [pongamoslo_a_prueba_commonProps, pongamoslo_a_prueba_array_of_posts],
  // [miguel_araiza_commonProps, miguel_araiza_array_of_posts],
  // [lacosaes_commonProps, lacosaes_array_of_posts],
  // [the_simulator_commonProps, the_simulator_array_of_posts],
  // [arte_settima_commonProps, arte_settima_array_of_posts],
  // [about_life_commonProps, about_life_array_of_posts],
  // [mr_benz_commonProps, mr_benz_array_of_posts],
  // [mr_robot_commonProps, mr_robot_array_of_posts],
  // [ariel_commonProps, ariel_array_of_posts],
  // [javier_santaolalla_commonProps, javier_santaolalla_array_of_posts],
  // [francesco_viaggi_commonProps, francesco_viaggi_array_of_posts],
  // [milan_cars_commonProps, milan_cars_array_of_posts],
  // [gregorian_commonProps, gregorian_array_of_posts],
  // [pumpkim_commonProps, pumpkim_array_of_posts],
  // [whoisangenr_commonProps, whoisangenr_array_of_posts],
  // [mr_rombus_commonProps, mr_rombus_array_of_posts],
  // [cata_commonProps, cata_array_of_posts],
  // [elcodigobravo_commonProps, elcodigobravo_array_of_posts],
  // [lucia_sora_commonProps, lucia_sora_array_of_posts]
  // [luxury_commonProps, luxury_array_of_posts],
  // [marshall_jassan_commonProps, marshall_jassan_array_of_posts],
  // [edaserkanbolat_edits_commonProps, edaserkanbolat_edits_array_of_posts]
  // [jorgepomarg_commonProps, jorgepomarg_array_of_posts],
  // [goated_ai_art_commonProps, goated_ai_art_array_of_posts],
  // [ars_notoria_commonProps, ars_notoria_array_of_posts],
  // [mr_lamborghini_commonProps, mr_lamborghini_array_of_posts],
  // [vid_favorites_commonProps, vid_favorites_array_of_posts],
  // [siti_favolosi_commonProps, siti_favolosi_array_of_posts]
];
