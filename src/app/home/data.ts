import { Feature } from './models';
import { Extension } from './models/extension.model';
import { Question } from './models/question.model';

export const extensions: Extension[] = [
  {
    name: 'Chrome',
    version: 62,
    src: '/assets/images/logo-chrome.svg',
  },
  {
    name: 'Firefox',
    version: 55,
    src: '/assets/images/logo-firefox.svg',
  },
  {
    name: 'Opera',
    version: 46,
    src: '/assets/images/logo-opera.svg',
  },
];

export const questions: Question[] = [
  {
    title: 'What is bookmark?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa est id molestiae vitae! Esse minima natus officia sint soluta.',
  },
  {
    title: 'How can I request a new browser?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa est id molestiae vitae! Esse minima natus officia sint soluta.',
  },
  {
    title: 'Is there a mobile app?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa est id molestiae vitae! Esse minima natus officia sint soluta.',
  },
  {
    title: 'What about other Chromium browser',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa est id molestiae vitae! Esse minima natus officia sint soluta.',
  },
];

export const features: Feature[] = [
  {
    tab: 'Simple bookmarking',
    src: '/assets/images/illustration-features-tab-1.svg',
    title: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like.Out simple drag-and-drops interface gives you complete control over how you manage your favorite sites.',
  },
  {
    tab: 'Speedy Searching',
    src: '/assets/images/illustration-features-tab-2.svg',
    title: 'Intelligent search',
    description:
      'Out powerful search feature will help find saved sites in no time at all. No need to trawl through all of your bookmark',
  },
  {
    tab: 'Easy Sharing',
    src: '/assets/images/illustration-features-tab-3.svg',
    title: 'Share your bookmarks',
    description:
      'Easily share you bookmark and collections with others. Create a shareable link that you can send at the click of a button.',
  },
];
