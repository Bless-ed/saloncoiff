import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Création de 10 coiffeurs
  for (let i = 1; i <= 10; i++) {
    const email = `coiffeur${i}@mail.com`
    const password = await hash('password123', 10)

    const user = await prisma.user.create({
      data: {
        email,
        password,
        role: 'HAIRDRESSER',
        hairdresser: {
          create: {
            salonName: `Salon ${i}`,
            bio: `Je suis un coiffeur professionnel numéro ${i}`,
            location: `Ville ${i}`,
            services: {
              create: [
                {
                  name: "Coupe simple",
                  description: "Coupe classique",
                  price: 15.0
                },
                {
                  name: "Coupe + barbe",
                  description: "Coiffure + barbe",
                  price: 25.0
                }
              ]
            }
          }
        }
      }
    })

    console.log(`Coiffeur créé : ${user.email}`)
  }

  // Création de 6 clients
  for (let i = 1; i <= 6; i++) {
    const email = `client${i}@mail.com`
    const password = await hash('password123', 10)

    const user = await prisma.user.create({
      data: {
        email,
        password,
        role: 'CLIENT',
        client: {
          create: {
            phone: `060000000${i}`,
            address: `Adresse ${i}`
          }
        }
      }
    })

    console.log(`Client créé : ${user.email}`)
  }
}

main()
  .then(() => {
    console.log('Seeding terminé ✅')
    return prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
