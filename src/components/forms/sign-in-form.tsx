import { cn } from '@/lib/utils'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button, buttonVariants } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const SignInForm = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"form">) => {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Connectez-vous</h1>
        <p className="text-balance text-sm text-muted-foreground">
            Entrez votre email ci-dessous pour vous connecter à votre compte
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Mot de passe</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Mot de passe oublié?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Se Connecter
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Ou Continuer avec
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <Image
            src={'/svg/google.svg'}
            alt='google'
            width={25}
            height={25}
          />
          Se connecter avec Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Je n&apos;ai pas de compte?
        <Link href="/sign-up" className={cn(buttonVariants({
            variant: 'link'
        }))}>
          S'inscrire
        </Link>
      </div>
    </form>
  )
}

export default SignInForm