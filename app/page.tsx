import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import PropertyCard, { Property } from '@/components/ui/PropertyCard'

const mockProperty: Property = {
  id: '1',
  title: 'Modern Family Home',
  price: 850000,
  address: '123 Pine St, Seattle',
  beds: 3,
  baths: 2,
  area: 120,
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E',
  type: 'FOR SALE'
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-light text-nordic-dark dark:text-white">
              Phase 1 Verification Page
            </h1>
            <p className="text-nordic-muted">This page showcases the shared UI components and layout elements implemented in Phase 1.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-nordic-dark dark:text-white">UI Kit Showcase</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="dark">Dark</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Input</h3>
                <Input placeholder="Search properties..." />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-nordic-dark dark:text-white">Property Card</h2>
              <div className="max-w-sm">
                <PropertyCard property={mockProperty} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
