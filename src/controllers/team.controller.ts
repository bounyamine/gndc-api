import { Request, Response } from 'express';  
import TeamMember from '../models/team.model';

export const getTeamMembers = async (req: Request, res: Response) => {  
  try {  
    const members = await TeamMember.find();  
    res.status(200).json(members);  
  } catch (error) {  
    console.error('Erreur lors de la récupération des membres de l\'équipe:', error);  
    res.status(500).json({ message: 'Erreur interne du serveur' });  
  }  
};  

export const getTeamMemberById = async (req: Request, res: Response) => {  
  try {  
    const member = await TeamMember.findById(req.params.id);  
    if (!member) {  
      return res.status(404).json({ message: 'Membre de l\'équipe non trouvé' });  
    }  
    res.status(200).json(member);  
  } catch (error) {  
    console.error('Erreur lors de la récupération du membre de l\'équipe:', error);  
    res.status(500).json({ message: 'Erreur interne du serveur' });  
  }  
};  

export const createTeamMember = async (req: Request, res: Response) => {  
  try {  
    const newMember = new TeamMember(req.body);  
    await newMember.save();  
    res.status(201).json(newMember);  
  } catch (error) {  
    console.error('Erreur lors de la création du membre de l\'équipe:', error);  
    res.status(500).json({ message: 'Erreur interne du serveur' });  
  }  
};  

export const updateTeamMember = async (req: Request, res: Response) => {  
  try {  
    const updatedMember = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });  
    if (!updatedMember) {  
      return res.status(404).json({ message: 'Membre de l\'équipe non trouvé' });  
    }  
    res.status(200).json(updatedMember);  
  } catch (error) {  
    console.error('Erreur lors de la mise à jour du membre de l\'équipe:', error);  
    res.status(500).json({ message: 'Erreur interne du serveur' });  
  }  
};  

export const deleteTeamMember = async (req: Request, res: Response) => {  
  try {  
    const deletedMember = await TeamMember.findByIdAndDelete(req.params.id);  
    if (!deletedMember) {  
      return res.status(404).json({ message: 'Membre de l\'équipe non trouvé' });  
    }  
    res.status(204).send();
  } catch (error) {  
    console.error('Erreur lors de la suppression du membre de l\'équipe:', error);  
    res.status(500).json({ message: 'Erreur interne du serveur' });  
  }  
};