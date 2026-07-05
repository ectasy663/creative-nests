import { Header } from '@/components/wexlogic/Header'
import { Footer } from '@/components/wexlogic/Footer'
import { ContactForm } from '@/components/wexlogic/ContactForm'

export const metadata = {
  title: 'Contact Us — WexLogic',
  description: 'Have a project in mind? Reach out to WexLogic for custom CGI campaigns, Next.js web applications, paid ads, SEO, and CRM/ERP integrations.',
  alternates: {
    canonical: 'https://wexlogic.com/contact'
  }
}

export default function ContactPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6', backgroundColor: '#000' }}>
      
      <Header />

      <ContactForm />

      <Footer />
    </div>
  )
}
