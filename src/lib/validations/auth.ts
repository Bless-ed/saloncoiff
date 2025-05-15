import * as z from "zod"

// Schéma spécifique pour le client
export const clientSchema = z.object({
    name: z.string().min(2, {
        message: "Le nom doit contenir au moins 2 caractères"
    }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères.",
  }),
  confirmPassword: z.string(),
  phone: z.string().min(8, {
    message: "Le numéro de téléphone doit contenir au moins 10 chiffres.",
  }),
  address: z.string().min(1, {
    message: "L'adresse est requise.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas.",
  path: ["confirmPassword"],
})

// Schéma spécifique pour le coiffeur
export const hairdresserSchema = z.object({
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères.",
  }),
  confirmPassword: z.string(),
  salonName: z.string().min(1, {
    message: "Le nom du salon est requis.",
  }),
  bio: z.string().optional(),
  location: z.string().min(1, {
    message: "L'adresse du salon est requise.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas.",
  path: ["confirmPassword"],
})

// Types dérivés des schémas
export type ClientFormValues = z.infer<typeof clientSchema>
export type HairdresserFormValues = z.infer<typeof hairdresserSchema>

// Schéma pour le service
export const serviceSchema = z.object({
  name: z.string().min(1, {
    message: "Le nom du service est requis.",
  }),
  description: z.string().optional(),
  price: z.number().min(0, {
    message: "Le prix doit être supérieur ou égal à 0.",
  }),
})

// Schéma pour le rendez-vous
export const appointmentSchema = z.object({
  date: z.date({
    required_error: "La date du rendez-vous est requise.",
  }),
  serviceId: z.string().uuid({
    message: "L'identifiant du service est invalide.",
  }),
  status: z.enum(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"], {
    required_error: "Le statut du rendez-vous est requis.",
  }),
}) 