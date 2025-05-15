"use server"

import { hash } from "bcryptjs";
import { db } from "../prisma"

export const clientRegistration = async (params: AuthClientCredentials) => {
    const { email, phone, address, password, confirmPassword, name } = params

    // Vérification de la confirmation du mot de passe
    if (password !== confirmPassword) {
        return { success: false, error: "Les mots de passe ne correspondent pas" };
    }


    //Verification de l'existance de l'utilisateur
    const existingUser = await db.user.findUnique({
        where: {
            email: email
        }
    })

    if (existingUser) {
        return { success: false, error: "Ce compte existe deja"}
    }

    const hashedPassword = await hash(password, 10)

    try {
        await db.user.create({
            data: {
                email,
                password: hashedPassword,
                role: "CLIENT",
                client: {
                    create: {
                        name,
                        phone,
                        address
                    }
                }
            }
        })

        return {success: true}
    } catch (error) {
        console.log(error, "Error d'inscription")
        return { success: false, error : "Error lors de l'inscription" }
    }
} 