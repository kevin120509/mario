import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import PropertyCard, { Property } from '@/components/ui/PropertyCard'

const featuredProperties: Property[] = [
  {
    id: 'f1',
    title: 'The Glass Pavilion',
    price: 5250000,
    address: 'Beverly Hills, California',
    beds: 5,
    baths: 4.5,
    area: 4200,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM',
    type: 'FOR SALE'
  },
  {
    id: 'f2',
    title: 'Azure Heights Penthouse',
    price: 3800000,
    address: 'Downtown, Vancouver',
    beds: 3,
    baths: 3,
    area: 2100,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s',
    type: 'FOR SALE'
  }
]

const newProperties: Property[] = [
  {
    id: 'n1',
    title: 'Modern Family Home',
    price: 850000,
    address: '123 Pine St, Seattle',
    beds: 3,
    baths: 2,
    area: 120,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E',
    type: 'FOR SALE'
  },
  {
    id: 'n2',
    title: 'Urban Loft',
    price: 3200,
    address: '456 Elm Ave, Portland',
    beds: 1,
    baths: 1,
    area: 85,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4',
    type: 'FOR RENT'
  },
  {
    id: 'n3',
    title: 'Highland Retreat',
    price: 620000,
    address: '789 Mountain Rd, Bend',
    beds: 2,
    baths: 2,
    area: 98,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro',
    type: 'FOR SALE'
  },
  {
    id: 'n4',
    title: 'Sea View Penthouse',
    price: 4500,
    address: '321 Ocean Dr, Miami',
    beds: 3,
    baths: 3,
    area: 180,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U',
    type: 'FOR RENT'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-nordic-dark dark:text-white leading-tight">
              Find your <span className="relative inline-block">
                <span className="relative z-10 font-medium">sanctuary</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-mosque/20 -rotate-1 z-0"></span>
              </span>.
            </h1>
            
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <span className="material-icons text-nordic-muted text-2xl group-focus-within:text-mosque transition-colors">search</span>
              </div>
              <Input 
                className="pl-12 pr-4 py-4 text-lg" 
                placeholder="Search by city, neighborhood, or address..." 
              />
              <Button 
                className="absolute inset-y-2 right-2 shadow-lg shadow-mosque/20"
                size="md"
              >
                Search
              </Button>
            </div>

            <div className="flex items-center justify-center gap-3 overflow-x-auto hide-scroll py-2 px-4 -mx-4">
              <Button variant="dark" size="sm" className="whitespace-nowrap">All</Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap bg-white dark:bg-white/5">House</Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap bg-white dark:bg-white/5">Apartment</Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap bg-white dark:bg-white/5">Villa</Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap bg-white dark:bg-white/5">Penthouse</Button>
              <div className="w-px h-6 bg-nordic-dark/10 mx-2"></div>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <span className="material-icons text-base">tune</span> Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-nordic-dark dark:text-white">Featured Collections</h2>
              <p className="text-nordic-muted mt-1 text-sm">Curated properties for the discerning eye.</p>
            </div>
            <a className="hidden sm:flex items-center gap-1 text-sm font-medium text-mosque hover:opacity-70 transition-opacity" href="#">
              View all <span className="material-icons text-sm">arrow_forward</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        {/* New in Market */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-nordic-dark dark:text-white">New in Market</h2>
              <p className="text-nordic-muted mt-1 text-sm">Fresh opportunities added this week.</p>
            </div>
            <div className="hidden md:flex bg-white dark:bg-white/5 p-1 rounded-lg">
              <Button variant="dark" size="sm">All</Button>
              <Button variant="ghost" size="sm">Buy</Button>
              <Button variant="ghost" size="sm">Rent</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="bg-white dark:bg-white/5">
              Load more properties
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
