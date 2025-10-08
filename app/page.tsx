import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <main className="flex flex-1 flex-col bg-muted/50 min-h-[100vh] md:min-h-min">
          <header className="flex-1 min-h-min bg-linear-to-br from-blue-900 to-green-800 bg-[url('/ku-air-image.jpg')] bg-no-repeat bg-cover bg-center bg-fixed flex flex-col">
            <nav className="flex items-center justify-between z-10 stick top-0 w-full px-4 py-4">
              <span className="font-extrabold backdrop-blur-lg text-4xl tracking-tighter text-blue-700">
                school
              </span>
              <Select defaultValue="en">
                <SelectTrigger>
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent defaultValue="English" defaultChecked={true}>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ar">Arabic</SelectItem>
                </SelectContent>
              </Select>
            </nav>
            <span className="backdrop-blur-lg text-5xl font-bold text-balance w-1/2 my-auto px-4">
              Welcome to EduHub - Your School's Digital Gateway
            </span>
          </header>
          <section className="">
            <span className="backdrop-blur-lg text-5xl font-bold text-balance w-1/2 my-auto px-4">
              Welcome to EduHub - Your School's Digital Gateway
            </span>
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
