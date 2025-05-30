"use client"

import * as React from "react"
import { ChevronLeft } from "lucide-react"
import { FaGoogle } from "react-icons/fa6"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import { useRouter } from "next/navigation"
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodType } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

interface FormData {
  name: string; 
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
}

interface Props<T> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{success: boolean, error?: string}>;
}

const SignUpClientForm = ({
    schema,
    defaultValues,
    onSubmit
}: Props<FormData>) => {
  return (
    <div className="bg-white dark:bg-zinc-950 py-20 text-zinc-800 dark:text-zinc-200 selection:bg-purple-300 dark:selection:bg-purple-600 w-full mx-auto items-center justify-center max-w-lg">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        className="relative z-10 mx-auto w-full max-w-xl p-4"
      >
        <Logo />
        <Header />
        <SocialButtons />
        <Divider />
        <RegistrationForm
          schema={schema}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
        />
        <TermsAndConditions />
      </motion.div>
      <BackgroundDecoration />
    </div>

  )
}

const BackButton: React.FC = () => (
  <SocialButton icon={<ChevronLeft size={16} />}>Go back</SocialButton>
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`rounded-md bg-gradient-to-br from-purple-400 to-purple-700 px-4 py-2 text-lg text-zinc-50 
    ring-2 ring-purple-500/50 ring-offset-2 ring-offset-white dark:ring-offset-zinc-950 
    transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-purple-500/70 ${className}`}
    {...props}
  >
    {children}
  </button>
)

const Logo: React.FC = () => (
  <div className="mb-6 flex items-center justify-center">
    <img
      src="/logo_illustration/head1.png"
      alt="Logoipsum"
      className="h-16 w-16 rounded-full"
    />
    <span className="ml-2 text-3xl font-bold">GlowUp<span className="text-purple-500">Tress</span></span>
  </div>
)

const Header: React.FC = () => (
  <div className="mb-6 text-center">
    <h1 className="text-2xl font-semibold">Connectez-vous à votre compte</h1>
    <p className="mt-2 text-zinc-500 dark:text-zinc-400">
      Vous n'avez pas de compte ?
      <Link href="#" className={cn(buttonVariants({
        variant: 'link',
        className: 'text-purple-600'
      }))}>
        Créez-en un.
      </Link>
    </p>
  </div>
)

const SocialButtons: React.FC = () => (
  <div className="mb-6 space-y-3">
    <div className="grid grid-cols-2 gap-3">
      <SocialButton  icon={<FaGoogle size={20} />} >Google</SocialButton>
      <SocialButton >Se connecter avec SSO</SocialButton>
    </div>
  </div>
)

const SocialButton: React.FC<{
  icon?: React.ReactNode
  fullWidth?: boolean
  children?: React.ReactNode
}> = ({ icon, fullWidth, children }) => (
  <button
    className={`relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-md 
    border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 
    px-4 py-2 font-semibold text-white dark:text-white transition-all duration-500
    before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
    before:rounded-[100%] before:bg-purple-800 dark:before:bg-purple-300 before:transition-transform before:duration-1000 before:content-[""]
    hover:scale-105 hover:text-zinc-100 dark:hover:text-purple-950 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95
    ${fullWidth ? "col-span-2" : ""}`}
  >
    {icon}
    <span>{children}</span>
  </button>
)

const Divider: React.FC = () => (
  <div className="my-6 flex items-center gap-3">
    <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-700" />
    <span className="text-zinc-500 dark:text-zinc-400">OR</span>
    <div className="h-[1px] w-full bg-zinc-300 dark:bg-zinc-700" />
  </div>
)

const RegistrationForm = ({
    schema,
    defaultValues,
    onSubmit,
}: Props<FormData>) => {
    const router = useRouter()

    const form = useForm<FormData>({ 
        resolver: zodResolver(schema),
        defaultValues
    })

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    const result = await onSubmit(data)

    if (result.success) {
        console.log('success')
        router.push('/dashboard')
    } else {
        console.log('error')
    }
   
  }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    Nom complet ou pseudo
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      type="text"
                      placeholder="ex: John"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      type="email"
                      placeholder="ex: John@gmail.com"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    Numero de téléphone
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      type="text"
                      placeholder="ex: +225 05 69 584 955"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className="">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    Lieu de résidence
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      type="text"
                      placeholder="ex: Abobo, Dokui"
                      className="col-span-2"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 !mb-5">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    Mot de passe
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      type="password"
                      placeholder="ex: ********* "
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    Confirmer le mot de passe
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      type="password"
                      placeholder="ex: *********"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            Se Connecter
          </Button>
        </form>
    </Form>
  )
}

const TermsAndConditions: React.FC = () => (
  <p className="mt-9 text-xs text-center text-zinc-500 dark:text-zinc-400">
    En vous connectant, vous acceptez nos
    <Link href="#" className={cn(buttonVariants({
      variant: "link",
      className: "text-purple-500 dark:text-purple-400"
    }))}>
      Conditions générales
    </Link>
    and
    <Link href="#" className={cn(buttonVariants({
      variant: "link",
      className: "text-purple-500 dark:text-purple-400"
    }))}>
      Politique de confidentialité.
    </Link>
  </p>
)

const BackgroundDecoration: React.FC = () => {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  return (
    <div
      className="absolute right-0 top-0 z-0 size-[56vw]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(88 28 135 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDarkTheme
            ? "radial-gradient(100% 100% at 100% 0%, rgba(9,9,11,0), rgba(9,9,11,1))"
            : "radial-gradient(100% 100% at 100% 0%, rgba(255,255,255,0), rgba(9,9,11,1))",
        }}
      />
    </div>
  )
}

export default SignUpClientForm
