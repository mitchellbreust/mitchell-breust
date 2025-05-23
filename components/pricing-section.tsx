import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Website Development Packages</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect package for your business needs. All packages include responsive design, SEO optimization, and fast loading times.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[90rem] items-start gap-8 py-12 md:grid-cols-2 lg:grid-cols-2">
          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg md:col-span-1 lg:col-span-1 px-12">
            <CardHeader>
              <CardTitle>Basic Website</CardTitle>
              <CardDescription>Perfect for small businesses and startups</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$200</span>
                <span className="text-muted-foreground"> /one-time</span>
                <p className="text-sm text-muted-foreground mt-2">Example of what this service can include</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Fast-loading static website 5–7 pages</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Mobile Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Search Engine Optimization (SEO) essentials</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Domain setup + hosting</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>1 Month of Support</span>
                </li>
              </ul>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Who this service is perfect for:</p>
                <p className="mt-1">Local tradies wanting to advertise their services, small businesses wanting to get online, or just a personal website.</p>
              </div>

            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-primary md:col-span-1 lg:col-span-1 px-12">
            <CardHeader>
              <CardTitle>Basic Website + Product Catalog Website</CardTitle>
              <CardDescription>For businesses that need online sales</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$250</span>
                <span className="text-muted-foreground"> /one-time</span>
                <p className="text-sm text-muted-foreground mt-2">Example of what this service can include</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Content Management System (CMS) for easy updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Built-in product search bar & Catalog for user-friendly browsing</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>1 Months of Support</span>
                </li>
              </ul>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Who this service is perfect for:</p>
                <p className="mt-1">Perfect for businesses that want to showcase products with pricing and searchable product catalog</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="default" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg md:col-span-1 lg:col-span-1 px-12">
            <CardHeader>
              <CardTitle>E-commerce Website</CardTitle>
              <CardDescription>For businesses needing advanced features</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$950</span>
                <span className="text-muted-foreground"> /one-time</span>
                <p className="text-sm text-muted-foreground mt-2">Example of what this service can include</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Everything in Product Catalog</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Secure Payment Integration (Stripe, PayPal, etc.)</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Shopping Cart + checkout</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Inventory Management</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced Analytics Dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Customer Loyalty Program</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Multi-language Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>3 Months of Support</span>
                </li>
              </ul>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Who this service is perfect for:</p>
                <p className="mt-1">Perfect for businesses ready to sell online — such as retailers, boutiques, food delivery, or any brand with a product catalog</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="default" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg md:col-span-1 lg:col-span-1 px-12">
            <CardHeader>
              <CardTitle>Custom Solution</CardTitle>
              <CardDescription>For unique business requirements</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-muted-foreground"> /quote-based</span>
                <p className="text-sm text-muted-foreground mt-2">Example of what this service can include</p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Custom Features</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced Integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Custom API Development</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>User Authentication</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  <span>6 Months of Support</span>
                </li>
              </ul>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Who this service is perfect for:</p>
                <p className="mt-1">Businesses with unique requirements needing tailored solutions, complex integrations, or specialized functionality.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <a href="#contact">Get a Quote</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            All packages include: Fast loading times, Mobile-first design, SEO optimization, and Regular backups.
            <br />
            Need something specific? <a href="#contact" className="text-primary hover:underline">Contact me</a> for a custom quote.
          </p>
        </div>
      </div>
    </section>
  )
} 