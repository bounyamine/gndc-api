import { title } from 'process';
import connectDatabase from './src/config/database';
import Event from './src/models/event.model';

const events = [
  {
    title: "Djabbama Code",
    description: "Événement de Grand Nord Developers Community où des experts partageront leurs connaissances sur le développement d'applications mobiles, web et desktop, le design graphique, l'infographie, le multimédia et bien plus encore.",
    type: "meetup",
    date: new Date("2024-06-23T15:00:00Z"),
    location: "En ligne",
    maxParticipants: 1000,
    participants: [],
    statuts: "passé",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D1EAQFP176GWf20Lw/event-background-image-crop_720_1280/event-background-image-crop_720_1280/0/1720806111901?e=1737356400&v=beta&t=QYF0OF5SaA7YPgY_axuOnX2Y9rBp3gsJ6yGqNYbM6AA",
    organizer: "6782e53e0e803f289c5d8107",
  },
  {
    title: "Hackathon GNDC 2024",
    description: "Un hackathon de 48 heures pour innover et créer.",
    type: "hackathon",
    date: new Date("2025-03-15T09:00:00Z"),
    location: "Douala, Cameroun",
    maxParticipants: 100,
    participants: [],
    status: "à venir",
    imageUrl: "https://placehold.co/600x400@3x.png",
    organizer: "6782e53e0e803f289c5d8107",
  },
  {
    title: "Formation DevOps",
    description: "Une formation intensive sur les pratiques DevOps.",
    type: "formation",
    date: new Date("2025-02-01T10:00:00Z"),
    location: "Yaoundé, Cameroun",
    maxParticipants: 50,
    participants: [],
    status: "à venir",
    imageUrl: "https://placehold.co/600x400@3x.png",
    organizer: "6782e53e0e803f289c5d8107",
  },
  {
    title: "Meetup des développeurs GNDC",
    description: "Rencontre mensuelle pour échanger et réseauter.",
    type: "meetup",
    date: new Date("2025-01-25T18:00:00Z"),
    location: "Buea, Cameroun",
    maxParticipants: 30,
    participants: [],
    status: "à venir",
    imageUrl: "https://placehold.co/600x400@3x.png",
    organizer: "6782e53e0e803f289c5d8107",
  },
];

const seedEvents = async () => {
  await connectDatabase();
  try {
    await Event.deleteMany();
    console.log('Anciennes données d\'événements supprimées');
    await Event.insertMany(events);
    console.log('Événements ajoutés avec succès');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de l\'insertion des événements :', error);
    process.exit(1);
  }
};

seedEvents();
