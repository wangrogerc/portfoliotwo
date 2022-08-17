const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rogerwangportfolio01.web.app/',
  title: 'Roger Wang.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Roger',
  role: 'Full Stack Engineer',
  description:
    'Hello! My name is Roger Wang and I am a 2019 USC graduate and recent graduate of HackReactor, a full stack 19 week SE immersive. I am currently working at Levi Technologies as a software developer intern and have done so in parallel with my bootcamp.',
  description2:
    "As a software developer I specialize in creating APIs, databases, message queues, and SPAs. In juggling both education and work, I've found that learning parallel in both environments (bootcamp/internship) has strengthened my understanding of both new and fundamental concepts whilst simultaneously gaining important experiences in collaborating within scrum teams to address the needs and requirements of end users.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/wangrogerc/',
    github: 'https://gitlab.com/wangrogerc',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Purely Puptonic',
    img: 'https://i.imgur.com/jBWu7E9.png',
    description:
      "Don't want to roll the dice whenever you go to your local dog park? Purely Puptonic is a social media platform for dog owners to organize dog meetups and review other dog owners who attended.",
    description2:
      'Host your own event and approve owners who request to join. Organize meetups with reputable dog owners while also building your own reputation! We encourage rating on not the actual behavior of the dog, but the honesty of the attendee when it comes to their dog when requesting to join.',
    stack: ['Tailwind', 'FastAPI', 'Psycopg', 'React'],
    sourceCode:
      'https://purely-puptonic.gitlab.io/puppin/https:/gitlab.com/purely-puptonic/puppin',
    livePreview: 'https://purely-puptonic.gitlab.io/puppin/',
  },
  {
    name: 'Oyasu',
    img: 'https://i.imgur.com/zdpFCyZ.png',
    description:
      'Oyasu is the premiere dealership management utility. Manage your database by keeping track of your inventory, sales, and service operations! Keeps note of VIP customers and already sold merchandise.',
    stack: ['Bootstrap', 'Django', 'React'],
    sourceCode: 'https://gitlab.com/wangrogerc/project-beta',
    livePreview: 'https://oyasu-73100.web.app/home',
  },
  {
    name: 'Pokebend',
    img: 'https://i.imgur.com/zZjdBhy.png',
    description:
      'Choose your destiny by picking which element to use against a randomly generated pokemon and get a new high score! Pokemon extracted fresh from PokeAPI.',
    description2:
      'Try the toggleable gamemode "Ammo Mode" which decrements element ammo when you use that specified element and rewards it based on the pokemon you defeat.',
    stack: ['React'],
    sourceCode: 'https://github.com/wangrogerc/pokebend',
    livePreview: 'https://pokebend.web.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Tailwind',
  'Bootstrap',
  'Git',
  'CI/CD',
  'Firebase',
  'Docker',
  'Azure DevOps',
  'Microservices',
  'Domain Driven Design',
  'Python3',
  'ES6+',
  'C#',
  'SQL',
  'MongoDB',
  'FastAPI',
  'Django',
  'RabbitMQ',
  'Psycopg',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'wangrogerc@gmail.com',
}

export { header, about, projects, skills, contact }
