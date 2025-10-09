import { ModeSwitcher } from "@/components/mode-switcher";
import { getYear } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import {
  BookImage,
  CheckCircle,
  FileText,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <main className="flex flex-1 flex-col bg-muted/50 min-h-[100vh] md:min-h-min">
          <header className="flex-1 z-10 stick top-0">
            <nav className="flex items-center justify-between w-full px-4 py-4">
              <span className="font-semibold text-4xl tracking-tighter text-blue-400 flex items-center">
                <BookImage className="size-8 mr-1" />
                EduHub
              </span>
              <div className="flex items-center">
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent defaultValue="English" defaultChecked={true}>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                  </SelectContent>
                </Select>
                <div className="ml-4">
                  <ModeSwitcher />
                </div>
              </div>
            </nav>
          </header>

          {/* HERO SECTION */}
          <section className="mx-4 min-h-[90vh] rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden text-white">
            <div className="bg-[url('/ku-air-image.jpg')] bg-no-repeat bg-cover bg-center bg-fixed h-full">
              <div className="bg-linear-to-r from-blue-950 via-blue-900/60 to-transparent flex-1 flex flex-col h-full py-20">
                <div className="flex-1 flex flex-col px-4 lg:px-20 my-auto">
                  <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance md:w-2/3 lg:w-1/2 tracking-wide leading-snug">
                    Empower Learning, Simplify School Life
                  </span>
                  <p className="md:w-2/3 lg:w-1/2 text-lg text-white/80 tracking-wide">
                    Discover a seamless platform designed for students,
                    teachers, and parents. Access everything from assignments
                    and grades to events and announcements - all in one place.
                  </p>
                </div>
                <div className="mt-6 px-4 lg:px-20">
                  <p className="text-lg tracking-wide">
                    Join thousands of schools transforming education today.
                  </p>
                  <Button size="lg" className="mt-6 text-white">
                    Get Started
                  </Button>
                  <Link href="/login">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="ml-4 cursor-pointer"
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* WHY */}
          <section className="py-20 px-4 md:px-8 bg-background">
            <div className="container mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Why Choose EduHub?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  EduHub is more than an app - it's your all-in-one solution for
                  modern education. Built with security, ease, and collaboration
                  in mind, we help schools thrive in a digital world.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-24">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Student Portal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Track assignments, view grades, and manage schedules on
                      the go. Never miss a deadline!
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Teacher Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Create lessons, grade work, and communicate with parents
                      effortlessly. Save time and focus on teaching.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Parent Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Stay connected with real-time updates on your child's
                      progress, attendance, and school events.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-5 h-5 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Secure Communication
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Built-in messaging, announcements, and video calls - all
                      protected with top-tier encryption.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <Smartphone className="w-5 h-5 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Mobile-First Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Access from any device, anywhere. iOS, Android, or web -
                      we've got you covered.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-5 h-5 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Customizable Reports
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Generate insights on performance, attendance, and more to
                      support data-driven decisions.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Trusted by Schools */}
          <section className="py-20 px-4 md:px-24 bg-background">
            <div className="container mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Trusted by Schools Nationwide
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-0">
                  <CardContent className="pt-6">
                    <blockquote className="text-lg italic">
                      "EduHub has revolutionized how we connect with our
                      community. Grades are up, and parent involvement has
                      soared!"
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-semibold">- Principal Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">
                        Riverside High School
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0">
                  <CardContent className="pt-6">
                    <blockquote className="text-lg italic">
                      "As a teacher, the assignment tracker is a game-changer.
                      It's intuitive and saves hours each week."
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-semibold">- Ms. Elena Ramirez</p>
                      <p className="text-sm text-muted-foreground">
                        Math Teacher
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Stats Spotlight */}
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <p className="text-sm text-muted-foreground">
                    Schools Partnered
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">
                    100,000+
                  </div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">
                    99.9%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Uptime Guarantee
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">
                    Free Basic Plan
                  </div>
                  <p className="text-sm text-muted-foreground">
                    For Small Schools
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-blue-950 text-white py-12 px-4 md:px-8 border-t">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <BookImage className="size-4 mr-1" /> EduHub
                </h3>
                <p className="text-sm text-muted-foreground">
                  Empowering Education Since 2020
                </p>
              </div>
              <nav className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="#" className="hover:text-foreground transition-colors">
                  About Us
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Support
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </nav>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
                <Link
                  href="#"
                  // className="w-8 h-8 bg-muted-foreground/20 rounded-full flex items-center justify-center hover:bg-primary"
                >
                  <IconBrandX className="size-6" />
                  {/* Twitter */}
                </Link>

                <Link
                  href="#"
                  // className="w-8 h-8 bg-muted-foreground/20 rounded-full flex items-center justify-center hover:bg-primary"
                >
                  <IconBrandFacebook className="size-6" />
                  {/* Facebook */}
                </Link>
                <Link
                  href="#"
                  // className="w-8 h-8 bg-muted-foreground/20 rounded-full flex items-center justify-center hover:bg-primary"
                >
                  <IconBrandLinkedin className="size-6" />
                  {/* LinkedIn */}
                </Link>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="text-center text-sm text-muted-foreground">
              &copy; {getYear(new Date())} EduHub. All rights reserved.
            </div>
          </footer>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
