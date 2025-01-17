import connectDatabase from './src/config/database';  
import TeamMember from './src/models/team.model';  

const leaderId = "60b8f8d3b4d2f67ac89c1234";
const teamMembers = [  
  {  
    name: "Alice Sanga",
    email: "alice.sanga@company.com",
    position: "Directrice Technique",  
    bio: "Passionnée par l'innovation technologique et le développement durable.",  
    imageUrl: "https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg?ga=GA1.1.500548464.1736770673&semt=ais_hybrid",  
    leaderId: leaderId
  },  
  {  
    name: "Jean Dupont",  
    email: "jean.dupont@company.com",
    position: "Responsable des Événements",  
    bio: "Spécialiste en gestion d'événements avec plus de 10 ans d'expérience.",  
    imageUrl: "https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg?ga=GA1.1.500548464.1736770673&semt=ais_hybrid",  
    leaderId: leaderId  
  },  
  {  
    name: "Marie Kone", 
    email: "marie.kone@company.com",
    position: "Développeuse Full-Stack",  
    bio: "Amoureuse du code et de l'apprentissage continu dans le secteur technologique.",  
    imageUrl: "https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg?ga=GA1.1.500548464.1736770673&semt=ais_hybrid",  
    leaderId: leaderId  
  },  
  {  
    name: "Joseph Nguema",
    email: "joseph.nguema@company.com",
    position: "Community Manager",  
    bio: "Expert en communication numérique et gestion de communautés.",  
    imageUrl: "https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg?ga=GA1.1.500548464.1736770673&semt=ais_hybrid",  
    leaderId: leaderId  
  },  
  {  
    name: "Fatou Bayo",  
    email: "fatou.bayo@company.com",
    position: "Chef de Projet",  
    bio: "Professionnelle aguerrie en gestion de projets avec une approche centrée sur l'utilisateur.",  
    imageUrl: "https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg?ga=GA1.1.500548464.1736770673&semt=ais_hybrid",  
    leaderId: leaderId  
  }  
];  

const seedTeamMembers = async () => {  
  await connectDatabase();  
  try {  
    const deleteResult = await TeamMember.deleteMany();  
    console.log(`Anciennes données des membres de l'équipe supprimées : ${deleteResult.deletedCount} documents`);  
    
    for (const member of teamMembers) {  
      const newMember = new TeamMember(member);  
      await newMember.save();  
      console.log(`Membre de l'équipe ajouté : ${member.name}`);  
    }  
    console.log('Tous les membres de l\'équipe ont été ajoutés avec succès');  
    process.exit(0);  
  } catch (error) {  
    console.error('Erreur lors de l\'insertion des membres de l\'équipe :', error);  
    process.exit(1);  
  }  
};  

seedTeamMembers();