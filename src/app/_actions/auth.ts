"use server"

import { hash } from "bcryptjs"
import { Role } from "@prisma/client"
import { 
  clientSchema, 
  hairdresserSchema,
  type ClientFormValues,
  type HairdresserFormValues
} from "@/lib/validations/auth"
import { db } from "@/lib/prisma"

export async function registerClient(data: ClientFormValues) {
  // Validation des données
  const validatedFields = clientSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: "Données invalides", issues: validatedFields.error.issues }
  }

  try {
    const { email, password, phone, address } = validatedFields.data
    
    // Vérifier si l'email existe déjà
    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return { error: "Cet email est déjà utilisé." }
    }

    // Hash du mot de passe
    const hashedPassword = await hash(password, 12)

    // Création de l'utilisateur et du profil client dans une transaction
    const result = await db.$transaction(async (tx) => {
      // Créer l'utilisateur
      const user = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          role: Role.CLIENT,
        },
      })

      // Créer le profil client
      const client = await tx.client.create({
        data: {
          userId: user.id,
          phone,
          address,
        },
      })

      return { user, client }
    })

    return { success: true, data: result }
  } catch (error) {
    console.error("Erreur lors de l'inscription du client:", error)
    return { error: "Une erreur est survenue lors de l'inscription." }
  }
}

export async function registerHairdresser(data: HairdresserFormValues) {
  // Validation des données
  const validatedFields = hairdresserSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: "Données invalides", issues: validatedFields.error.issues }
  }

  try {
    const { email, password, salonName, bio, location } = validatedFields.data
    
    // Vérifier si l'email existe déjà
    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return { error: "Cet email est déjà utilisé." }
    }

    // Hash du mot de passe
    const hashedPassword = await hash(password, 12)

    // Création de l'utilisateur et du profil coiffeur dans une transaction
    const result = await db.$transaction(async (tx) => {
      // Créer l'utilisateur
      const user = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          role: Role.HAIRDRESSER,
        },
      })

      // Créer le profil coiffeur
      const hairdresser = await tx.hairdresser.create({
        data: {
          userId: user.id,
          salonName,
          bio,
          location,
        },
      })

      return { user, hairdresser }
    })

    return { success: true, data: result }
  } catch (error) {
    console.error("Erreur lors de l'inscription du coiffeur:", error)
    return { error: "Une erreur est survenue lors de l'inscription." }
  }
} 