import mongoose, { Schema, Document } from 'mongoose';  

export interface ITeamMember extends Document {  
    name: string;
    email: string;
    position: string;  
    bio: string;
    imageUrl?: string;
    leaderId: mongoose.Types.ObjectId;
    expertise?: string[];
    createdAt: Date;
    updatedAt: Date;
}  

const TeamMemberSchema: Schema = new Schema({  
    name: {  
        type: String,  
        required: true,  
        trim: true  
    }, 
    email: {  
        type: String,  
        required: true,  
        trim: true  
    },  
    position: {  
        type: String,  
        required: true  
    },  
    bio: {  
        type: String,  
        required: true  
    },  
    imageUrl: {  
        type: String,  
        default: 'https://img.freepik.com/free-photo/afro-man_1368-2735.jpg?semt=ais_hybrid'
    },  
    leaderId: {  
        type: Schema.Types.ObjectId,  
        required: true,  
        ref: 'Leader'
    },  
    expertise: {  
        type: [String],  
        default: [] // Tableau d'expertises (optionnel)  
    }  
}, {  
    timestamps: true // Ajoute automatiquement createdAt et updatedAt  
});  

// Index pour améliorer les performances des requêtes  
TeamMemberSchema.index({ name: 1 });  

// Export du modèle  
export default mongoose.model<ITeamMember>('TeamMember', TeamMemberSchema);