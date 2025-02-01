import img from './images/icon-work.svg'
import img1 from './images/icon-play.svg';
import img2 from './images/icon-study.svg';



import img3 from './images/icon-exercise.svg';
import img4 from './images/icon-social.svg';


import img5 from './images/icon-self-care.svg';

export default [
    {
      title:'Work',
      icon: img,
      CN: 'card--1',
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      title: 'Play',
      icon: img1,
      CN: 'card--2',
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },
    {
      title: 'Study',
      icon: img2,
      CN: 'card--3',
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    {
      title: 'Exercise',
      icon: img3,
      CN: 'card--4',
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      title: 'Social',
      icon: img4,
      CN: 'card--5',
      timeframes: {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    },
    {
      title:'Self Care',
      icon: img5,
      CN: 'card--6',
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ]