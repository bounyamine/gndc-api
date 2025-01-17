import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  type: 'hackathon' | 'formation' | 'meetup';
  date: Date;
  location: string;
  maxParticipants: number;
  participants: mongoose.Types.ObjectId[];
  status: 'à venir' | 'en cours' | 'passé';
  imageUrl?: string;
  organizer: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema({
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String, 
    required: true 
  },
  type: { 
    type: String, 
    enum: ['hackathon', 'formation', 'meetup'], 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  maxParticipants: { 
    type: Number, 
    default: 0,
    min: 0 
  },
  participants: [{ 
    type: mongoose.Types.ObjectId, 
    ref: 'User' 
  }],
  status: { 
    type: String, 
    enum: ['à venir', 'en cours', 'passé'], 
    default: 'à venir' 
  },
  imageUrl: { 
    type: String, 
    default: 'https://placehold.co/600x400@3x.png' 
  },
  organizer: { 
    type: mongoose.Types.ObjectId, 
    ref: 'User',
    required: true 
  }
}, {
  timestamps: true
});

EventSchema.index({ date: 1, status: 1 });
EventSchema.index({ type: 1 });

export default mongoose.model<IEvent>('Event', EventSchema);