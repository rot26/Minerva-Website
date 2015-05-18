'use strict';

/**
 * @ngdoc service
 * @name minervaioApp.team
 * @description
 * # team
 * Service in the minervaioApp.
 */
angular.module('minervaioApp')
  .service('team', function () {
    this.data = [
      {
        type: 'Founders',
        people: [
          {
            name: 'Eric Glasser',
            img: 'eric-glasser.jpg',
            description: 'Eric started his first technology company in college, it was a process and content management system for newspapers. After releasing Virtual Newsroom as an open source project he started consulting with startups and business\' developing their web applications. He has since spent time in both the advertising world and fortune 500 technology companies developing enterprise level applications. He is a full stack engineer with a passion for scailable systems. His core beleif is that working with technology doesn\'t have to hurt. Now he is looking to bring this expertese to cleints with Minerva.'
          }
        ]
      },
      {
        type: 'Developers',
        people: [
          {
            name: 'Doug Rayburn',
            img: 'doug-rayburn.jpg',
            company: 'A Prize Inside, Inc.',
            url: 'http://www.aprizeinside.com/',
            description: 'Doug is a seasoned creative technologist with over 20 years of professional experience developing enterprise systems and websites. Doug started his professional career at Cambridge Technology Partners in 1995, then served as Director of Internet Operations at DataPlay in 2000 where he co-invented ContentKey technology, a DRM solution for DataPlay\'s quarter-sized optical disc. DataPlay won the best in show award at the 2001 Consumer Electronics Show.'
          },
          {
            name: 'Gabriel Walford',
            img: 'gabriel-walford.jpg',
            url: 'http://gabrielwalford.com/',
            description: 'Gabe is passionate about creating effective, functional, but well architected applications that are easily understood and exciting to the user. He have experience as a full stack developer building the front end of websites and applications, back end API’s with Node and PHP, as well as physical computing / internet of things projects for internationally recognized clients.'
          },
          {
            name: 'Matthew Gordon',
            img: 'matthew-gordon.jpg',
            url: 'http://www.ratherironic.com/',
            description: 'He is a strongly motivated senior web developer with specific strengths in front end web technologies. Thoroughly proficient in the latest front-end coding standards and practices with a thirst for creating inspiring work. His goal is to utilize knowledge of web technologies to provide creative input and direction/leaderhip for web applications while still maintaining the highest quality of code.'
          },
          {
            name: 'Mansoor Bahramand',
            img: 'mansoor-bahramand.jpg',
            company: 'Metroid',
            url: 'http://www.metroid.io/',
            description: 'He is very passionate about code and developing with best practices in mind. He is a coder which means that he spend countless amount of hours researching and reading to find new ways to solve problems. He will hate the code he wrote 6 months ago. There are always ways to improve your code and better ways to test it. He write code to make the world a better place. He live to code and you can find me in-front of a computer coding for about 12 hours a day and never getting bored.'
          },
          {
            name: 'Denny Cunningham',
            img: 'denny-cunningham.jpg',
            company: 'Hoorooh Digital',
            url: 'http://hooroohdigital.com /',
            description: 'Needs Description'
          }
        ]
      },
      {
        type: 'Designers',
        people: [
          {
            name: 'Ryan Dixon',
            img: 'ryan-dixon.jpg',
            url: 'https://dribbble.com/ryndxn',
            description: 'Ryan Dixon solves brand challenges with exceptionally art-directed and progressive design solutions. He’s passionate about UI/UX, executing pixel-perfect layouts. Armed with a strong foundation in design fundamentals including layout and typography, Ryan’s main goal is to build brands and keep them relevant in an ever-changing digital culture.'
          },
          {
            name: 'Ryan McCarthy',
            img: 'ryan-mccarthy.jpg',
            url: 'http://www.mccarthyarts.com/',
            description: 'For the past 15 years he has lived and breathed the graphic design, digital, and multimedia realm. Whether it\'s website creation, video production, managing a team, or creative direction for a mobile app, his passion for smart design and innovation is alive in everything he does.'
          }
        ]
      },
      {
        type: 'Project Managers',
        people: [
          {
            name: 'Chris Cruz',
            img: 'chris-cruz.jpg',
            company: 'Hoorooh Digital',
            url: 'http://hooroohdigital.com /',
            description: 'Needs Description'
          }
        ]
      },
      {
        type: 'QA and Testing',
        people: [
          {
            name: 'Nolan Nichols',
            img: 'nolan-nichols.jpg',
            company: 'Top Notch, Ltd',
            url: 'http://topnotchltd.com/',
            description: 'He is an accomplished Senior Software Quality Assurance Engineer with experience in both manual and automated testing of web-based, enterprise, and stand-alone software systems. He possess excellent communication and collaboration skills with extensive experience in Functional, Exploratory, Load, Compatibility, Regression, Automation and Localization test development using both advanced Agile and Waterfall methodologies. Additionally, He provides directory structure analysis and internationalized environment implementation. His skill set also includes hardware configuration, system maintenance and data recovery capabilities, workstation/lab network setup, repairs, and troubleshooting.'
          }
        ]
      },
      {
        type: 'Advisors',
        people: [
          {
            name: 'Kishan Ananthram',
            img: 'kishan-ananthram.jpg',
            company: 'IonIndea',
            url: 'http://www.ionidea.com/',
            description: 'Entrepreneur, Technologist, Business Manager, Business Strategy Advisor, Member Board of Directors. Deep experience in Information Technology Services & Solutions, as well as in Business Process Outsourcing. Specialties:Executive Leadership, Strategic Planning, Operations Management, and Customer Relationship Management.'
          },
          {
            name: 'Craig McDonnell',
            img: 'craig-mcdonnell.jpg',
            company: 'Charter Communications',
            url: 'https://www.charter.com/',
            description: 'He designs and deploys service solutions to streamline data reporting through automation to increase process efficiencies and productivity. As a technology architect, professional services business strategist and professional consultant, his responsibilities have ranged from building business plans to the development and implementation of enterprise solutions, marketing, sales and service plans.'
          }
        ]
      },
    ];
  });
