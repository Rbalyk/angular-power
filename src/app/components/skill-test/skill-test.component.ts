import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-skill-test',
  templateUrl: './skill-test.component.html',
  styleUrls: ['./skill-test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillTestComponent implements OnInit {


  randomLink: string;

  constructor() { }
  myParams: object = {};
  width = 100;
  height = 100;

  ngOnInit() {
    this.myParams = {
      particles: {
        number: {
          value: 96,
          density: {
            enable: true,
            value_area: 641.3648243462092
          }
        },
        color: {
          value: '#282828'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 6
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 4.008530152163807,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#000000',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 154.29467033725558,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      }
    };
  }


  setRandomLink() {
    const months = [
      'https://codepen.io/soulwire/pen/Ffvlo',
      'https://codepen.io/alexzaworski/details/mEkvAG',
      'https://codepen.io/juliangarnier/pen/xOgyjB',
      'https://threejs.org/examples/#webgl_animation_keyframes',
      'https://threejs.org/examples/#webgl_kinect',
      'https://threejs.org/examples/#webgl_effects_anaglyph',
      'http://vr.ff.com/us/',
      'http://kiddisco.asmallgame.com/',
    ];
    this.randomLink = months[Math.floor(Math.random() * months.length)];
  }

}
